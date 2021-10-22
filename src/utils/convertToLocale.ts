import array from "./RelationLocaleCurrency";

const getcurrency = (locationVar: string): string => {
  const i = array.findIndex((obj) => obj.location === locationVar);
  if (array[i]?.currency) {
    return array[i].currency;
  }
  return "USD";
};

const formatAmountValue = (value: number, locationVar: string): string => {
  return value.toLocaleString(locationVar, {
    style: "currency",
    currency: getcurrency(locationVar),
  });
};

export default formatAmountValue;
