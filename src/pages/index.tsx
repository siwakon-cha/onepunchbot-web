import React, { Fragment, useState } from 'react';
import SetupAgent from '@/components/SetupAgent';
import { STEP } from '@/utils/helper';
import ConnectWallet from '@/components/ConnectWallet';
import BotSetting from '@/components/BotSetting';

const IndexPage = () => {
  const [step, setStep] = useState<STEP>(STEP.CONNECT_WALLET);
  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <SetupAgent>
        <Fragment>
          {step === STEP.CONNECT_WALLET && <ConnectWallet setStep={setStep} />}
          {step === STEP.BOT_SETTING && <BotSetting setStep={setStep} />}
        </Fragment>
      </SetupAgent>
    </div>
  );
};

export default IndexPage;
