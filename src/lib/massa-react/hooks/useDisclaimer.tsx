import { useState, useEffect } from 'react';

interface DisclaimerProps {
  docs: { title: string; link: string }[];
}

interface hashFile {
  hash: string;
  link: string;
}

const LocalStorageDisclaimerPrefix = 'DEWEB_UPLOADER_DISCLAIMER_';

export function useDisclaimer({ docs }: DisclaimerProps) {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [newOrUpdatedFiles, setNewOrUpdatedFile] = useState<hashFile[]>([]);

  /* For each doc, check whether it has been accepted or not by the user.
    When a doc has been accepted, it's hash is stored in the localstorage (the key is it's link).
    So if a doc is updated, it's hash would not match the one stored in the localstorage and the 
    user would be invited again to accept (updated) docs.
    If the hash of the doc match the one in the localstorage, it means that the user has already accepted them so
    no need to display the disclaimer */
  useEffect(() => {
    async function checkLegalDoc() {
      const newOrUpdated: hashFile[] = [];
      for (const doc of docs) {
        try {
          const response = await fetch(doc.link);
          const content = await response.text();

          // hash of the document content
          const hash = await crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(content),
          );
          const hashHex = Array.from(new Uint8Array(hash))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');

          // check if the hash is already stored in localstorage
          const storedHash = localStorage.getItem(
            LocalStorageDisclaimerPrefix + doc.link,
          );

          // if the hash is not stored or it is different from the current hash, the user has to accept the doc again
          if (!storedHash || storedHash !== hashHex) {
            newOrUpdated.push({
              link: doc.link,
              hash: hashHex,
            });
          }
        } catch (error) {
          setError(error as Error);
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
    newOrUpdatedFiles.forEach(({ link, hash }) => {
      localStorage.setItem(LocalStorageDisclaimerPrefix + link, hash);
    });

    setIsValid(true);
  }

  return { isValid, accept, error };
}
