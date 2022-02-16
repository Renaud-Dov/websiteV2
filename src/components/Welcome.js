import {Component} from "react";

class Wave extends Component {
    render() {
        return null;
    }
}

export class Welcome extends Component {
    render() {
        return (
            <div className="App-header" id="one">
                <h1 className="text-3xl font-bold underline">Bugbear</h1>
                <h2 className="Subtitle">CS Student and developer</h2>
                <Wave/>
            </div>
        )
    }
}