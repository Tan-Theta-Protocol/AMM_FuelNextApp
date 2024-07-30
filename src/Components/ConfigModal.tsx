import React, { ChangeEvent } from 'react';

interface ConfigModalProps {
  onClose: () => void;
  slippageAmount: number;
  setSlippageAmount: (value: number) => void;
  deadlineMinutes: number;
  setDeadlineMinutes: (value: number) => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({ onClose, slippageAmount, setSlippageAmount, deadlineMinutes, setDeadlineMinutes }) => {
  const handleSlippageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSlippageAmount(parseFloat(e.target.value));
  };

  const handleDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeadlineMinutes(parseInt(e.target.value, 10));
  };

  return (
    <div className="modaly" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <h4 className="titleHeader">Transaction Settings</h4>

          <div className="row">
            <label className="labelField">Slippage Tolerance</label>
          </div>
          <div className="row">
            <div className="col-md-9 fieldContainer">
              <input
                className="inputField"
                placeholder="1.0%"
                value={slippageAmount}
                onChange={handleSlippageChange}
              />
            </div>
            <div className="col-md-3 inputFieldUnitsContainer">
              <span>%</span>
            </div>
          </div>
          <div className="row">
            <label className="labelField">Transaction Deadline</label>
          </div>
          <div className="row">
            <div className="col-md-9 fieldContainer">
              <input
                className="inputField"
                placeholder="10"
                value={deadlineMinutes}
                onChange={handleDeadlineChange}
              />
            </div>
            <div className="col-md-3 inputFieldUnitsContainer">
              <span>minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigModal;
