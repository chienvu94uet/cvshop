// https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/
const moneyFormat = (money, locale, options) => {
  const defaultOptions = {
    style: "currency",
    currency: "USD",
  };
  return new Intl.NumberFormat(locale, options || defaultOptions).format(money);
};

export default moneyFormat;
