import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  trustWallet,
} from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="YOUR_CLIENT_ID"
      locale={en()}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        trustWallet(),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        modalSize={"wide"}
      />
    </ThirdwebProvider>
  );
}

export function App();
