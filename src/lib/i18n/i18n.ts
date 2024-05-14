import dot from 'dot-object';

type TranslationObject = string | { [key: string]: TranslationObject };

export type Copy = Record<string, TranslationObject>;
export type Language = string;
export type Keys = Record<Language, Copy>;

class I18n {
  private lang: Language;
  private copy: Copy;

  constructor(keys: Keys, lang = 'EN_us') {
    this.lang = lang;
    this.copy = keys[this.lang];
  }

  public t(key: string, interpolations?: Record<string, string>): string {
    const copy = this.copy;
    // we are using pick in order to make life easier when the day for plurals and copy with params arrives
    const result = dot.pick(key, copy);

    if (!result) {
      console.warn(`I18n::t:: No translation found for key ${key}`);
    }

    return interpolations
      ? this._interpolateKeys(result, interpolations)
      : result ?? key;
  }

  private _interpolateKeys(
    str: string,
    replacements: Record<string, string>,
    char1 = '{',
    char2 = '}',
  ): string {
    const regex = new RegExp(`${char1}[^${char2}]*${char2}`, 'g');

    return str.replace(regex, (match) => {
      const key = match.slice(1, -1);
      return replacements[key] ?? match;
    });
  }
}

export default I18n;
