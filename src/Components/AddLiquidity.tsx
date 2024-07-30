import React from 'react';
import { GearFill } from 'react-bootstrap-icons';
import CurrencyField from './CurrencyField';

const AddLiquidity: React.FC = () => {
  return (
    <div className="appBody">
      <div className="addLiquidityContainer">
        <div className="swapHeader">
          <span className="swapText">Add Liquidity</span>
        </div>

        <div className="tipBox">
          Tip: When you add liquidity, you will receive pool tokens representing your position.
          These tokens automatically earn fees proportional to your share of the pool, and can be
          redeemed at any time.
        </div>

        <div className="swapBody">
          <CurrencyField
            field="input"
            tokenName="WETH"
          />
          <CurrencyField
            field="output"
            tokenName="UNI"
          />
        </div>

        <div className="ratioContainer">
          {/* {ratio && <>1 UNI = {ratio} WETH</>} */}
        </div>

        <div className="swapButtonContainer">
          <div className='swapButton'>
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLiquidity;
