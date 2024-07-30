"use client";
import './App.css';
import { useState, useEffect } from 'react';
import { ethers, Signer } from 'ethers';
import { GearFill } from 'react-bootstrap-icons';
import ConnectButton from '@/Components/ConnectBtn';
import PageButton from '@/Components/PageBtn';
import ConfigModal from '@/Components/ConfigModal';
import CurrencyField from '@/Components/CurrencyField';
import Pool from '@/Components/Pool'; 
// import { BackgroundGradientAnimation } from '@/Components/ui/background-gradient-animation';
import { Navbar } from '@/Components/Navbar';
const ImportPool: React.FC = () => <div>Import Pool Page</div>;

const App: React.FC = () => {
  // const [provider, setProvider] = useState<ethers.providers.Web3Provider | undefined>(undefined);
  const [signer, setSigner] = useState<Signer | undefined>(undefined);
  const [signerAddress, setSignerAddress] = useState<string | undefined>(undefined);

  const [slippageAmount, setSlippageAmount] = useState<number>(2);
  const [deadlineMinutes, setDeadlineMinutes] = useState<number>(10);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [inputAmount, setInputAmount] = useState<string | undefined>(undefined);
  const [outputAmount, setOutputAmount] = useState<string | undefined>(undefined);
  const [transaction, setTransaction] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [ratio, setRatio] = useState<string | undefined>(undefined);
  const [wethContract, setWethContract] = useState<ethers.Contract | undefined>(undefined);
  const [uniContract, setUniContract] = useState<ethers.Contract | undefined>(undefined);
  const [wethAmount, setWethAmount] = useState<number | undefined>(undefined);
  const [uniAmount, setUniAmount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const onLoad = async () => {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // setProvider(provider);

      // const wethContract = getWethContract();
      // setWethContract(wethContract);

      // const uniContract = getUniContract();
      // setUniContract(uniContract);
    };
    onLoad();
  }, []);

  // const getSigner = async (provider: ethers.providers.Web3Provider) => {
  //   await provider.send("eth_requestAccounts", []);
  //   const signer = provider.getSigner();
  //   setSigner(signer);
  // };

  const isConnected = (): boolean => signer !== undefined;

  // const getWalletAddress = async () => {
  //   if (!signer || !wethContract || !uniContract) return;

  //   const address = await signer.getAddress();
  //   setSignerAddress(address);

  //   const wethBalance = await wethContract.balanceOf(address);
  //   setWethAmount(Number(ethers.utils.formatEther(wethBalance)));

  //   const uniBalance = await uniContract.balanceOf(address);
  //   setUniAmount(Number(ethers.utils.formatEther(uniBalance)));
  // };

  useEffect(() => {
    if (signer) {
      // getWalletAddress();
    }
  }, [signer]);

  // const getSwapPrice = async (inputAmount: string) => {
  //   setLoading(true);
  //   setInputAmount(inputAmount);

  //   const swapData = await getPrice(
  //     inputAmount,
  //     slippageAmount,
  //     Math.floor(Date.now() / 1000 + deadlineMinutes * 60),
  //     signerAddress!
  //   );
    
  //   setTransaction(swapData[0]);
  //   setOutputAmount(swapData[1]);
  //   setRatio(swapData[2]);
  //   setLoading(false);
  // };

  return (
      <div className="App">
           {/* <BackgroundGradientAnimation> */}
            
            <div>
              <div className="appNav">
              <Navbar />  

              </div>
              
              <div className="appBody">
                <div className="swapContainer">
                  <div className="swapHeader">
                    <span className="swapText">Swap</span>
                    <span className="gearContainer" onClick={() => setShowModal(true)}>
                      <GearFill />
                    </span>
                    {showModal && (
                      <ConfigModal
                        onClose={() => setShowModal(false)}
                        setDeadlineMinutes={setDeadlineMinutes}
                        deadlineMinutes={deadlineMinutes}
                        setSlippageAmount={setSlippageAmount}
                        slippageAmount={slippageAmount}
                      />
                    )}
                  </div>
                  <div className="swapBody">
                    <CurrencyField
                      field="input"
                      tokenName="WETH"
                      // getSwapPrice={getSwapPrice}
                      // signer={signer}
                      balance={wethAmount}
                    />
                    <CurrencyField
                      field="output"
                      tokenName="UNI"
                      value={outputAmount}
                      // signer={signer}
                      balance={uniAmount}
                      // spinner={BeatLoader}
                      loading={loading}
                    />
                  </div>
                  <div className="ratioContainer">
                    {ratio && <>1 UNI = {ratio} WETH</>}
                  </div>
                  <div className="swapButtonContainer">
                    {isConnected() ? (
                      <div className="swapButton">
                        Swap
                      </div>
                    ) : (
                      <div className="swapButton">
                        Connect Wallet
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        
             {/* </BackgroundGradientAnimation> */}

         
      </div>
  );
};

export default App;
