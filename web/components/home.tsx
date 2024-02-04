'use client';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Home() {
    const { connected } = useWallet();
    return (
        <h1 className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{connected? "Wallet connected" : "Please connect your wallet"}</h1>
      ) 
}