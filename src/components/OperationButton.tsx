interface OperationButtonProps {
  buttonType: 'multiply' | 'divide' | 'substract';
}

const OperationButton: React.FC<OperationButtonProps> = ({ buttonType }) => {
  let operator = '';
  switch (buttonType) {
    case 'divide':
      operator = '/';
      break;
    case 'multiply':
      operator = '*';
      break;
    case 'substract':
  }
  return <div>Allez le boutton {buttonType}</div>;
};

export default OperationButton;
