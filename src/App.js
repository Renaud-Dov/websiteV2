// import logo from './logo.svg';
// import './App.css';
import './App.css';
import Header from './components/Header.jsx';
import {Me} from "./components/Me";
import {MainPage} from "./components/MainPage";
// import {Welcome} from "./components/Welcome";
// import {Me} from "./Me";

function App() {
  return (
    <div className="App selection:bg-green-500 selection:text-white">
        <Header/>
        <Me/>
    </div>
  );
}

export default App;
