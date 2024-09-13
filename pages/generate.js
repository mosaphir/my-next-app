import { generateCreditCard } from '@mihnea.dev/credit-card-generator';

const GeneratePage = () => {
  const [bin, setBin] = useState('');
  const [creditCard, setCreditCard] = useState({});

  const handleGenerate = async () => {
    const creditCardData = generateCreditCard(bin);
    setCreditCard(creditCardData);
  };

  return (
    <div>
      <h1>Credit Card Generator</h1>
      <form>
        <label>
          Enter BIN:
          <input type="text" value={bin} onChange={(e) => setBin(e.target.value)} />
        </label>
        <button onClick={handleGenerate}>Generate</button>
      </form>
      {creditCard && (
        <div>
          <h2>Generated Credit Card:</h2>
          <ul>
            <li>Card Number: {creditCard.cardNumber}</li>
            <li>Expiration Date: {creditCard.expirationDate}</li>
            <li>CVV: {creditCard.cvv}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneratePage;
