function validateCreditCardNumber(cardNumber) {
  let sum = 0;
  let alt = false;
  let i = cardNumber.length - 1;

  while (i >= 0) {
    let n = parseInt(cardNumber.charAt(i));
    if (alt) {
      if (n * 2 > 9) {
        n = (n * 2) - 9;
      } else {
        n = n * 2;
      }
    }
    sum += n;
    alt = !alt;
    i--;
  }

  return sum % 10 === 0;
}

export default validateCreditCardNumber;
