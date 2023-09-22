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

  export const randomNumber = () => {
    return Math.random()
  }

  export const shippingCost = parseFloat((Math.random() + 5).toFixed(2));
