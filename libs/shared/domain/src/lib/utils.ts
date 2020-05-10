export class Utils {

  static endsWith(needle: string, haystack: string): boolean {
    const len = needle.length;

    if (len === 0) {
      return true;
    }

    return haystack.substr(haystack.length - len) === needle;
  }

  static capitalizeFirst(txt: string): string {
    return `${ txt.charAt(0).toUpperCase() }${ txt.slice(1) }`;
  }

  static toSnakeCase(txt: string): string {
    return txt
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(char => char.toLowerCase())
      .join('_');
  }

  static toCamelCase(txt: string): string {
    return txt.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, match => match.toUpperCase());
  }
}
