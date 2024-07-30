import React from 'react';
import PageButton from './PageBtn';
import ConnectButton from './ConnectBtn';
import { ethers } from 'ethers';

interface PoolProps {
//   provider: ethers.providers.Web3Provider | undefined;
//   isConnected: () => boolean;
//   signerAddress: string | undefined;
//   getSigner: (provider: ethers.providers.Web3Provider) => void;
}

const Pool: React.FC<PoolProps> = ({}) => {
  

  return (
    // <div className="App">
    //   <div className="appNav">
    //     <div className="my-2 buttonContainer buttonContainerTop">
    //       <PageButton name={"Swap"} isBold={true} to="/" />
    //       <PageButton name={"Pool"} to="/pool" />
    //       <PageButton name={"Vote"} />
    //       <PageButton name={"Charts"} />
    //     </div>

    //     <div className="rightNav">
    //       <div className="connectButtonContainer">
    //         <ConnectButton
    //           provider={provider}
    //           isConnected={isConnected}
    //           signerAddress={signerAddress}
    //           getSigner={getSigner}
    //         />
    //       </div>
    //       <div className="my-2 buttonContainer">
    //         <PageButton name={"..."} isBold={true} />
    //       </div>
    //     </div>
    //   </div>

      <div className="poolBody">
        <div className="poolHeader">
          <span className="poolText">Your V2 Liquidity</span>
          <div className="poolButtons">
            <button className="poolButton" onClick={() => alert('Create a pair')}>
              Create a pair
            </button>
            <button className="poolButton" >
              Import pool
            </button>
            <button className="poolButton" >
              Add V2 Liquidity
            </button>
          </div>
        </div>
        <div className="liquidityContainer">
          <div className="noLiquidity">
            No liquidity found.
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Pool;
