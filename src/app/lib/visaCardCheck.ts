export const visaCardCheck = (cardNumber: string) => {
  const visaRegex = /^4[0-9]{15}$/;
  const masterCardRegex =
    /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
  const americanExpress = /^3[47][0-9]{13}$/;
  const amexCard = /^3[47][0-9]{13}$/;
  const carteBlancheCard = /^389[0-9]{11}$/;
  const maestroCard = /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/;
  switch (true) {
    case visaRegex.test(cardNumber):
      return "Visa Card";
    case masterCardRegex.test(cardNumber):
      return "MasterCard";
    case americanExpress.test(cardNumber):
      return "American Express";
    case amexCard.test(cardNumber):
      return "Amex Card";
    case carteBlancheCard.test(cardNumber):
      return "Carte Blanche Card";
    case maestroCard.test(cardNumber):
      return "Maestro Card";
    default:
      return "Unknown Card Type";
  }
};
