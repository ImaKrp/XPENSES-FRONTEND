import array from "./RelationLocaleCurrency";

export const getCurrency = (locationVar: string | undefined): string => {
  if (!locationVar) return "USD";
  const i = array.findIndex((obj) => obj.location === locationVar);
  if (array[i]?.currency) {
    return array[i].currency;
  }
  return "USD";
};

export const formatAmountValue = (
  value: number,
  locationVar: string | undefined
): string => {
  return value.toLocaleString(locationVar, {
    style: "currency",
    currency: getCurrency(locationVar),
  });
};

export const formatDate = (
  value: Date,
  locationVar: string | undefined
): string => {
  if (!locationVar)
    return value.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return value.toLocaleString(locationVar, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
