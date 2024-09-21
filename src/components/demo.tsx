import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCircledIcon } from '@radix-ui/react-icons';

const Demo = () => {
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
        <div className="flex gap-4 text-xl mb-4">
          <h2 className="font-bold">Earning</h2>
          <h2 className="text-gray-400">Created</h2>
        </div>
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

export default Demo;
