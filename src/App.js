import logo from './logo.svg';
import './App.css';
import InfoFrame from "./features/InfoFrame.tsx";

function App() {
  return (
    <div>
      <InfoFrame portNumber={25} scannedTickets={455} />
    </div>
  );
}

export default App;
