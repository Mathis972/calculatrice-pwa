import { useEffect, useState } from 'react';
const operators = ['*', '-', '/', '+', 'C', '='];

const Calculator = () => {
  const [lastClicked, setLastClicked] = useState('');
  const [prevOperator, setPrevOperator] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [currNumber, setCurrNumber] = useState('');
  const calculus = (num1: number, operator: string, num2: number) => {
    let result = 0;
    switch (operator) {
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '+':
        result = num1 + num2;
        break;
      default:
        break;
    }
    return result;
  };
  useEffect(() => {
    if (lastClicked === '=') {
      setCurrNumber(
        calculus(
          parseInt(prevNumber),
          prevOperator,
          parseInt(currNumber)
        ).toString()
      );
    } else if (lastClicked === 'C') {
      setPrevNumber('');
      setPrevOperator('');
      setCurrNumber('');
      setLastClicked('');
    } else if (operators.includes(lastClicked)) {
      setPrevOperator(lastClicked);
      setPrevNumber(currNumber);
      setCurrNumber('');
    } else {
      setCurrNumber(currNumber + lastClicked);
    }
  }, [lastClicked]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      console.log('User pressed: ', event.key);
      console.log(event.key);

      if (event.key === 'Enter') {
        event.preventDefault();
        setLastClicked('=');
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: 'white', color: 'green' }}>
        {currNumber}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          borderWidth: 5,
          borderColor: 'white',
          width: 400,
          justifyContent: 'space-between',
          backgroundColor: 'red',
        }}
      >
        {Array(9)
          .fill(null)
          .map((c, i) => (
            <div
              key={i}
              onClick={() => setLastClicked(i.toString())}
              style={{ padding: 50 }}
            >
              {i}
            </div>
          ))}
      </div>
      {operators.map((o, i) => (
        <button key={i} name={o} onClick={() => setLastClicked(o)}>
          {o}
        </button>
      ))}
    </div>
  );
};
export default Calculator;
