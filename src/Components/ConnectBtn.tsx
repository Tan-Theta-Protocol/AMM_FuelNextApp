import React from 'react';
import PageButton from './PageBtn';
import { ethers } from 'ethers';

interface ConnectButtonProps {
  isConnected: () => boolean;
  signerAddress?: string;
//   getSigner: (provider: ethers.) => void;
//   provider: ethers.providers.Web3Provider | undefined;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ isConnected, signerAddress }) => {
  const displayAddress = `${signerAddress?.substring(0, 10)}...`;

  return (
    <>
      {isConnected() ? (
        <div className="buttonContainer">
          <PageButton name={displayAddress} />
        </div>
      ) : (
        <div
          className="btn my-2 connectButton"
        //   onClick={() => getSigner(provider!)}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
}

export default ConnectButton;
