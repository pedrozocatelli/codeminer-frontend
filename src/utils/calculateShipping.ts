export const calculateShipping = (
  weight: number,
  sum: number,
  voucher: boolean,
): number => {
  if (voucher && sum > 300.5) return 0;
  if (sum > 400) return 0;
  if (weight <= 14) return 30;

  return (weight - 10) * 7 + 30;
};
