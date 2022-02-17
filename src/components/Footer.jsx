import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container py-5">
                    <div className="content has-text-centered">
                        <p>
                            Made with <span className="icon text-red-600 font-bold"><i className="fa fa-heart"/> </span>
                             with React and tailwindcss.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}