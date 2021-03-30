export const calculateShipping = (
  weight: number,
  sum: number,
  voucher: boolean,
): number => {
  if (voucher) return 0;
  if (sum > 400) return 0;
  if (weight <= 10) return 30;

  return (weight - 10) * 7 + 30;
};
