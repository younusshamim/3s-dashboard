import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import TopBg from "./components/TopBg";

function App() {
  return (
    <div className="App">
      <Flex bg="gray.50" position="relative">
        <TopBg />

        <Sidebar />
        <MainContent />
      </Flex>
    </div>
  );
}

export default App;
