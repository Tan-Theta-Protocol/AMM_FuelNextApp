// import { AlphaRouter } from '@uniswap/smart-order-router';
// import { Token, CurrencyAmount, TradeType, Percent } from '@uniswap/sdk-core';
// import { ethers, Contract, Wallet } from 'ethers';
// import JSBI from 'jsbi';
// import ERC20ABI from './abi.json';
// import { TransactionRequest } from 'ethers';

// const V3_SWAP_ROUTER_ADDRESS = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
// const REACT_APP_INFURA_URL_TESTNET = process.env.REACT_APP_INFURA_URL_TESTNET as string;

// const chainId = 3;

// const web3Provider = new ethers.JsonRpcProvider(REACT_APP_INFURA_URL_TESTNET);
// const router = new AlphaRouter({ chainId: chainId, provider: web3Provider });

// const name0 = 'Wrapped Ether';
// const symbol0 = 'ETH';
// const decimals0 = 6;
// const address0 = '0x29F00aa8662d0Bcd8B0F3750b268cc6a6F7abD7E';

// const name1 = 'Uniswap Token';
// const symbol1 = 'UNI';
// const decimals1 = 18;
// const address1 = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

// const WETH = new Token(chainId, address0, decimals0, symbol0, name0);
// const UNI = new Token(chainId, address1, decimals1, symbol1, name1);

// export const getWethContract = (): Contract => new ethers.Contract(address0, ERC20ABI, web3Provider);
// export const getUniContract = (): Contract => new ethers.Contract(address1, ERC20ABI, web3Provider);

// interface Transaction {
//   data: string;
//   to: string;
//   value: Number;
//   from: string;
//   gasPrice: Number;
//   gasLimit: string;
// }

// export const getPrice = async (
//   inputAmount: number,
//   slippageAmount: number,
//   deadline: number,
//   walletAddress: string
// ): Promise<[Transaction, string, string]> => {
//   const percentSlippage = new Percent(slippageAmount, 100);
//   const wei = ethers.utils.parseUnits(inputAmount.toString(), decimals0);
//   const currencyAmount = CurrencyAmount.fromRawAmount(WETH, JSBI.BigInt(wei));

//   const route: Route = await router.route(
//     currencyAmount,
//     UNI,
//     TradeType.EXACT_INPUT,
//     {
//       recipient: walletAddress,
//       slippageTolerance: percentSlippage,
//       deadline: deadline,
//     }
//   );

//   const transaction: TransactionRequest = {
//     data: route.methodParameters.calldata,
//     to: V3_SWAP_ROUTER_ADDRESS,
//     value: BigNumber.from(route.methodParameters.value),
//     from: walletAddress,
//     gasPrice: BigNumber.from(route.gasPriceWei),
//     gasLimit: ethers.utils.hexlify(1000000),
//   };

//   const quoteAmountOut = route.quote.toFixed(6);
//   const ratio = (inputAmount / parseFloat(quoteAmountOut)).toFixed(3);

//   return [transaction, quoteAmountOut, ratio];
// };

// export const runSwap = async (transaction: Transaction, signer: Wallet): Promise<void> => {
//   const approvalAmount = ethers.utils.parseUnits('10', 18).toString();
//   const contract0 = getWethContract();
//   await contract0.connect(signer).approve(V3_SWAP_ROUTER_ADDRESS, approvalAmount);

//   await signer.sendTransaction(transaction);
// };
