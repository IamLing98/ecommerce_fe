export const formatNumber = (number) => {
  return new Intl.NumberFormat("ja-JP", { maximumSignificantDigits: 3 }).format(number);
};
