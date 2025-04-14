import { useState, useEffect } from 'react';

interface DisclaimerProps {
  docs: { title: string; link: string }[];
}

interface docVersion {
  version: number;
  link: string;
}

const LocalStorageDisclaimerPrefix = 'DEWEB_UPLOADER_DISCLAIMER_';

/* Links passed to useDisclaimer should end with "_V{version number}.{extension}" */
export function useDisclaimer({ docs }: DisclaimerProps) {
  const [isValid, setIsValid] = useState(true);
  const [newOrUpdatedFiles, setNewOrUpdatedFile] = useState<docVersion[]>([]);

  /* For each doc, check whether it has been accepted or not by the user.
    When a doc has been accepted, it's version is stored in the localstorage (the key is it's link).
    So if a doc version has been updated, it would not match the one stored in the localstorage and the 
    user would be invited again to accept (updated) docs.
    If the version of the doc match the one in the localstorage, it means that the user has already accepted them so
    no need to display the disclaimer */
  useEffect(() => {
    async function checkLegalDoc() {
      const newOrUpdated: docVersion[] = [];
      for (const doc of docs) {
        // extract version number from the link
        const versionMatch = doc.link.match(/_V(\d+)\.[a-zA-Z]{1,5}$/);
        let version = '0';

        if (!versionMatch) {
          console.warn(
            `Invalid document link format: ${doc.link}. Should have a version number`,
          );
        } else {
          // if the link is valid, extract the version number
          version = versionMatch[1];
        }

        // check if the version is already stored in localstorage
        const storedVersion = localStorage.getItem(
          LocalStorageDisclaimerPrefix + doc.link,
        );

        /* if the version is not stored or it is different from the current version,
          the user has to accept the doc again */
        if (!storedVersion || storedVersion !== version) {
          newOrUpdated.push({
            link: doc.link,
            version: parseInt(version), // convert version to number
          });
        }
      }
      setNewOrUpdatedFile(newOrUpdated);
      setIsValid(newOrUpdated.length === 0);
    }

    checkLegalDoc();

    /* Remove from localstorage all entries whose key begin by LocalStorageDisclaimerPrefix
      and that are not in the docs list.
      This is done to remove docs that are no more required */
    return () => {
      const storedKeys = Object.keys(localStorage).filter((key) =>
        key.startsWith(LocalStorageDisclaimerPrefix),
      );
      const validKeys = docs.map(
        (file) => LocalStorageDisclaimerPrefix + file.link,
      );
      storedKeys.forEach((key) => {
        if (!validKeys.includes(key)) {
          localStorage.removeItem(key);
        }
      });
    };
  }, [docs]);

  function accept() {
    newOrUpdatedFiles.forEach(({ link, version }) => {
      localStorage.setItem(
        LocalStorageDisclaimerPrefix + link,
        version.toString(),
      );
    });

    setIsValid(true);
  }

  return { isValid, accept };
}
