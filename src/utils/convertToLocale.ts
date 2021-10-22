import array from "./RelationLocaleCurrency";

export const getCurrency = (locationVar: string): string => {
  const i = array.findIndex((obj) => obj.location === locationVar);
  if (array[i]?.currency) {
    return array[i].currency;
  }
  return "USD";
};

export const formatAmountValue = (
  value: number,
  locationVar: string
): string => {
  return value.toLocaleString(locationVar, {
    style: "currency",
    currency: getCurrency(locationVar),
  });
};

export const formatDate = (value: Date, locationVar: string): string => {
  return value.toLocaleString(locationVar, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
