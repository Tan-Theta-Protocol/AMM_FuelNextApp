import { Account, BN } from "fuels";

type DappEnvironment = "local" | "testnet";

export const CURRENT_ENVIRONMENT: DappEnvironment =
  (process.env.NEXT_PUBLIC_DAPP_ENVIRONMENT as DappEnvironment) || "local";

// export const NODE_URL =
//   CURRENT_ENVIRONMENT === 'local'
//     ? `http://127.0.0.1:${process.env.NEXT_PUBLIC_FUEL_NODE_PORT || 4000}/v1/graphql`
//     : 'https://testnet.fuel.network/v1/graphql';

export const NODE_URL = "https://testnet.fuel.network/v1/graphql";

export interface AppWallet {
  wallet?: Account;
  walletBalance?: BN;
  refreshWalletBalance?: () => Promise<void>;
}

export const TESTNET_FAUCET_LINK = "https://faucet-testnet.fuel.network/";
