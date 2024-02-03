import './global.css';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from './provider';
import { GeistSans } from 'geist/font/sans';
import Navbar from '@/components/navbar/Navbar';

export const metadata = {
  title: 'ticket-master',
  description: 'Generated by create-solana-dapp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className=' text-white'>
        {/* <Provider>
          <ClusterProvider>
            <SolanaProvider> */}
        {/* <UiLayout> */}
        
        {children}
        {/* </UiLayout> */}
        {/* </SolanaProvider>
          </ClusterProvider>
        </Provider> */}
      </body>
    </html>
  );
}
