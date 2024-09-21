import React from 'react';
import { useAccount } from 'wagmi';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import Demo from '@/components/demo';

const IndexPage = () => {
  const { address, isConnected, chain } = useAccount();

  return (
    <div>
      <DynamicWidget />
      <p>wagmi connected: {isConnected ? 'true' : 'false'}</p>
      <p>wagmi address: {address}</p>
      <p>wagmi network: {chain?.id}</p>
      <Demo />
    </div>
  );
};

export default IndexPage;
