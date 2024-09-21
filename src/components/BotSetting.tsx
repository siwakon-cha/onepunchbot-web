'use client';

import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { STEP } from '@/utils/helper';

const FormSchema = z.object({
  chain: z.string({
    required_error: 'Please select an chain.',
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  pairs: z.string(),
});

const items = [
  {
    id: 'uniswapv2',
    label: 'Uniswap V2',
  },
  {
    id: 'uniswapv3',
    label: 'Uniswap V3',
  },
  {
    id: 'sushiswap',
    label: 'Sushiswap',
  },
] as const;

type Props = {
  setStep: (step: STEP) => void;
};

const BotSetting: React.FC<Props> = ({ setStep }) => {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    console.log('isConnected', isConnected);
    if (!isConnected) {
      setStep(STEP.CONNECT_WALLET);
    }
  }, [isConnected]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pairs: '',
      chain: '',
      items: [], // Initialize items as an empty array
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data', data);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <p className="text-xl font-bold">Step 2: Bot Settings</p>
      <p>Wallet : {address}</p>
      <div className="flex flex-col gap-4">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="chain"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Chain" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={
                                    field.value
                                      ? field.value.includes(item.id)
                                      : false
                                  }
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        item.id,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          (value) => value !== item.id,
                                        ),
                                      );
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pairs"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Token Pairs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BotSetting;
