import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const list = [
  {
    username: 'siwakondev',
    address: '0x123',
    value: 250,
    valueETH: 1.51,
    ownership: 69,
  },
  {
    username: 'siwakondev',
    address: '0x123',
    value: 250,
    valueETH: 1.51,
    ownership: 69,
  },
  {
    username: 'siwakondev',
    address: '0x123',
    value: 250,
    valueETH: 1.51,
    ownership: 69,
  },
  {
    username: 'siwakondev',
    address: '0x123',
    value: 250,
    valueETH: 1.51,
    ownership: 69,
  },
  {
    username: 'siwakondev',
    address: '0x123',
    value: 250,
    valueETH: 1.51,
    ownership: 69,
  },
  {
    username: 'siwakondev',
    address: '0x123',
    value: 250,
    valueETH: 1.51,
    ownership: 69,
  },
];

const Created = () => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h1 className="text-2xl font-bold">16 split recipients</h1>
      <h2 className="text-lg text-gray-500">
        Funds received through this auction are split between these recipients.
      </h2>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Recipient</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Ownership</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((item, index: any) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <span>{item.username}</span>
                      <span>{item.address}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>${item.value}</TableCell>
                <TableCell>{item.ownership}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Created;
