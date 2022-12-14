import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

// The Root component from where the Entire Execution starts

const Home = () => {
  // initially we just have Introduction Component on Our Front Page
  // Further Actions will be taken from Introduction Component or any other one e.g Navbar

  return <Introduction />;
};

export default Home;
