import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container py-5">
                    <div className="content has-text-centered">
                        <p>
                            Made with <span className="icon text-green-500 font-bold"><i className="fa fa-heart"/> </span>
                            using <span className="icon text-green-500 font-bold">React</span> and <span
                            className="icon text-green-500 font-bold">tailwindcss.</span>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}