export const convertPriceStringtoNumber = (currentValue) => {
  const priceString = currentValue.product.price;
  const priceWithoutComma = priceString.replace(/,/g, "");
  const price = parseInt(priceWithoutComma);

  return price;
};
