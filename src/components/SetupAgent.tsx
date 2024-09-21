import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useAccount } from 'wagmi';

type Props = {
  children: React.ReactElement;
};

const SetupAgent = ({ children }: Props) => {
  const { isConnected } = useAccount();
  return (
    <div className="w-[500px] flex justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>One Punch Agent Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isConnected ? <DynamicWidget /> : null}
            <div>{children}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetupAgent;
