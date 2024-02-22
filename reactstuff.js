import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

export default function App() {
  return (
    <div id="cashbut"></div>
    <ThirdwebProvider activeChain="mumbai" clientId="YOUR_CLIENT_ID" locale={en()} supportedWallets={[metamaskWallet(), localWallet(), embeddedWallet({ auth:{options:["email","google","apple","facebook",],},}),]}>
      <ConnectWallet
        theme={"dark"}
        modalSize={"compact"}
        modalTitleIconUrl={
          "https://shopcard.github.io/images/LMAO.jpeg"
        }
        showThirdwebBranding={false}
      />
    </ThirdwebProvider>
  );
}
