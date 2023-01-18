import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { AppProps } from "next/app";

import "assets/styles/globals.css";
import { CustomToast } from "components";
// Wallet
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import "assets/styles/suiet-wallet-kit-custom.css";

function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <div>
            <WalletProvider>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </WalletProvider>
            <CustomToast />
        </div>
    );
}

export default App;
