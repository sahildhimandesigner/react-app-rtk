export const stringifyToJson = (str:string) => {
    if (!str) {
      return null;
    }
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  };