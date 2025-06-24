export const formatValue = (
  value: number | string,
  isSupport: boolean = false
): string => {
  if (typeof value === "string") {
    const numValue = parseFloat(value);
    return isSupport
      ? numValue.toLocaleString()
      : `${(numValue * 100).toFixed(2)}%`;
  }
  return isSupport ? value.toLocaleString() : `${(value * 100).toFixed(2)}%`;
};
