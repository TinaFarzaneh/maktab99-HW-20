import "./App.css";
import StopWatchShow from "./components/widget/btnWrapper/BtnWrapper";
// import { MainContextProvider } from "./utils/context/Context";

function App() {
  return (
    // <MainContextProvider>
    <div className="w-full h-screen bg-[#3E3E3E] flex flex-col items-center text-white text-2xl">
      <StopWatchShow />
    </div>
    // </MainContextProvider>
  );
}

export default App;
