import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Created from '@/components/Created';
import Earning from '@/components/Earning';

const Account = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center mb-8">
        <svg
          className="w-10 h-10 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.5L12 2L22 8.5V15.5L12 22L2 15.5V8.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            New Split
          </Button>
          <Button variant="outline" className="bg-gray-100 hover:bg-gray-200">
            <Avatar className="w-5 h-5 mr-2">
              <AvatarImage
                src="/placeholder.svg?height=20&width=20"
                alt="Avatar"
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            0x1147
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <h2 className="text-lg text-gray-500 flex items-center gap-1 mb-1">
            Your Earnings
            <InfoCircledIcon className="h-4 w-4" />
          </h2>
          <p className="text-3xl font-bold">35.00 ETH</p>
        </div>
        <div>
          <h2 className="text-lg text-gray-500 flex items-center gap-1 mb-1">
            Your Balance
            <InfoCircledIcon className="h-4 w-4" />
          </h2>
          <p className="text-3xl font-bold">35.00 ETH</p>
        </div>
        <div className="bg-blue-500 rounded-3xl p-4 text-white">
          <h2 className="text-lg mb-1">Claimable Funds</h2>
          <p className="text-3xl font-bold">30.00 ETH</p>
        </div>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="earning" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="earning">Earning</TabsTrigger>
            <TabsTrigger value="created">Created</TabsTrigger>
          </TabsList>
          <TabsContent value="earning">
            <Earning />
          </TabsContent>
          <TabsContent value="created">
            <Created />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
