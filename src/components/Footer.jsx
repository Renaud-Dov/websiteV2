import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container py-5">
                    <div className="content has-text-centered">
                        <p>
                            Made with <span className="icon text-green-500 font-bold">
                            <FontAwesomeIcon className="pr-1" icon={faHeart}/>
                        </span>
                            using <span className="icon text-green-500 font-bold">React</span> and <span
                            className="icon text-green-500 font-bold">tailwindcss.</span>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}