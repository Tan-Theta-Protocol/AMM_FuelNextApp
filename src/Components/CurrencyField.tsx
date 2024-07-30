import React from 'react';

interface CurrencyFieldProps {
  field: 'input' | 'output';
  tokenName: string;
  value?: string;
  loading?: boolean;
  balance?: number;
  spinner?: React.ElementType;
  getSwapPrice?: (value: string) => void;
}

const CurrencyField: React.FC<CurrencyFieldProps> = (props) => {
  const getPrice = (value: string) => {
    if (props.getSwapPrice) {
      props.getSwapPrice(value);
    }
  };

  return (
    <div className="row currencyInput">
      <div className="col-md-6 numberContainer">
        {props.loading ? (
          <div className="spinnerContainer">
            {props.spinner && <props.spinner />}
          </div>
        ) : (
          <input
            className="currencyInputField"
            placeholder="0.0"
            value={props.value}
            onBlur={(e) => (props.field === 'input' ? getPrice(e.target.value) : null)}
          />
        )}
      </div>
      <div className="col-md-6 tokenContainer">
        <span className="tokenName">{props.tokenName}</span>
        <div className="balanceContainer">
          <span className="balanceAmount">Balance: {props.balance?.toFixed(3)}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyField;
