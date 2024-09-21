import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactElement;
};

const SetupAgent = ({ children }: Props) => {
  const { isConnected } = useAccount();
  const router = useRouter();
  return (
    <div className="w-[500px] flex justify-center">
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>One Punch Agent Setup</CardTitle>
            <Button onClick={() => router.push('/account')}>Account</Button>
          </div>
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
