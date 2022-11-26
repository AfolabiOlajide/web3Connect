import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import Home from "./pages/Home";

const alchemyId = "Fg6HLf1Ep4_Qz_fIX8KmhuoP1QkFPDGO";

const client = createClient(
  getDefaultClient({
    appName: "Web3Connect",
    alchemyId,
  }),
);

function App() {
  return (
    <div className="App">
      
      <WagmiConfig client={client}>
        <ConnectKitProvider 
          customTheme={{
            "--ck-connectbutton-color": "white",
            "--ck-connectbutton-background": "#F1A61E",
            "--ck-connectbutton-hover-color": "#F1A61E",
            "--ck-connectbutton-hover-background": "white",
          }}
        >
          <Home />
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
