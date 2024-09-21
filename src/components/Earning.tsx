import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Earning = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <svg
                className="w-8 h-8 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <div className="text-right">
                <p className="text-3xl font-bold">50.0%</p>
                <p className="text-gray-400 text-sm">YOUR SHARE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Earnings</p>
                <p className="text-xl font-semibold">30.00 ETH</p>
              </div>
              <div>
                <p className="text-gray-500">Balance</p>
                <p className="text-xl font-semibold">20.00 ETH</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              <div className="text-right">
                <p className="text-3xl font-bold">10.0%</p>
                <p className="text-gray-400 text-sm">YOUR SHARE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Earnings</p>
                <p className="text-xl font-semibold">60.00 ETH</p>
              </div>
              <div>
                <p className="text-gray-500">Balance</p>
                <p className="text-xl font-semibold">0.00 ETH</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="3" y="11" width="18" height="2" />
            </svg>
            <div className="text-right">
              <p className="text-3xl font-bold">20.0%</p>
              <p className="text-gray-400 text-sm">YOUR SHARE</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Earnings</p>
              <p className="text-xl font-semibold">4.25 ETH</p>
            </div>
            <div>
              <p className="text-gray-500">Balance</p>
              <p className="text-xl font-semibold">100.00 ETH</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earning;
