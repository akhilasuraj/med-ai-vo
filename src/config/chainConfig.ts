import { CHAIN_NAMESPACES, CustomChainConfig } from '@web3auth/base';

export const chain: {
  [key: string]: CustomChainConfig;
} = {
  ethereum: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x1',
    displayName: 'Ethereum Mainnet',
    rpcTarget: 'https://rpc.ankr.com/eth',
    blockExplorerUrl: 'https://etherscan.io',
    ticker: 'ETH',
    tickerName: 'Ethereum',
    logo: 'https://web3auth.io/images/web3authlog.png',
  },
};
