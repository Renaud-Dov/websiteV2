import './App.css';
import {Me, RightSide} from "./components/Me";
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="App relative font-Lato selection:bg-green-500 selection:text-white">

                <div className=":container z-0  bg-black text-white">

                    <div className=" md:flex flex-row md:px-5">
                        <Me reference={this}/>
                        <RightSide/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
