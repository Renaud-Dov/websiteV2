import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter, faInstagram, faDiscord} from '@fortawesome/free-brands-svg-icons';


const links = [
    {name: "GitHub", url: "https://github.com/Renaud-Dov", icon: faGithub},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/renaud-dov-devers/", icon: faLinkedin},
    {name: "Twitter", url: "https://twitter.com/dov_devers", icon: faTwitter},
    {name: "contact@bugbear.fr", url: "mailto:contact@bugbear.fr", icon: faEnvelope},
    {name: "Instagram", url: "https://www.instagram.com/dov_devers/", icon: faInstagram},
    {name: "BugBear#8715", url: "https://discord.com/users/208480161421721600", icon: faDiscord},
]

export class Contact extends Component {
    render() {
        return (
            <div className=":container bg-black text-white scroll-auto mx-auto">
                <div className="grid grid-cols-2 ">
                    {links.map((link, index) => (
                        (link.icon !== undefined) ?
                            <a href={link.url}
                               className="text-left w-full  p-4 text-green-500 hover:text-white"
                               target="_blank"
                               rel="noreferrer noopener" key={index}>
                                <FontAwesomeIcon icon={link.icon} size="2x"/>
                                <span className="text-xl ml-4 invisible md:visible">{link.name}</span>
                            </a> :
                            <div
                                className="text-left w-full w-1/6 md:w-1/2 p-4 text-green-500 hover:text-white"
                                key={index}>
                                <i className={`${link.icon} fa-2x`}/>
                                <span className="text-xl ml-4 invisible md:visible">{link.name}</span>
                            </div>
                    ))}
                </div>
            </div>
        )
            ;
    }
}
