class Masks {
    MoneyMask(value: string | null) {
      if (typeof value === "string") {
        if (value.length < 3) return value;
        value = value.replace(/\D/g, '');
        const lastDigits = value.substring(value.length - 2);
        value = value.replace(/.{0,2}$/, ".");
        return value + lastDigits;
      }
      return "";
    }
  }
  export default new Masks();