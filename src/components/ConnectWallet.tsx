import React, { useEffect } from 'react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useAccount } from 'wagmi';
import { STEP } from '@/utils/helper';

type Props = {
  setStep: (step: STEP) => void;
};

const ConnectWallet: React.FC<Props> = ({ setStep }) => {
  const { isConnected } = useAccount();
  useEffect(() => {
    if (isConnected) {
      setStep(STEP.BOT_SETTING);
    } else {
      setStep(STEP.CONNECT_WALLET);
    }
  }, [isConnected]);

  return (
    <div>
      <p className="text-xl font-bold">Step 1: Connect Wallet</p>
      <DynamicWidget />
    </div>
  );
};

export default ConnectWallet;
