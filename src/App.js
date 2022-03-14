import './App.css';
import {Me} from "./components/Me";
import {changeLang, data} from "./data";
import {Component} from "react";
import epita from "./img/EPITA_LOGO_INGENIEUR_CMJN.svg";

class App extends Component {
    render() {
        return (
            <div className="App relative font-Lato selection:bg-green-500 selection:text-white">
                <button onClick={() => {
                    changeLang();
                    this.setState({});
                }}
                        className="absolute flex ml-3 mt-3">
                    <img src={data.change_lang} alt="change language"
                         className="max-h-10 max-w-16  bg-green-500 p-0 m-0  rounded-xl"/>
                    /></button>
                <Me/>
            </div>
        );
    }
}

export default App;
