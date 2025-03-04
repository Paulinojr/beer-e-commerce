export const formatCurrency = (priceInCents) => {
  const priceInDollars = priceInCents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInDollars);
};
