import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter, faInstagram, faDiscord, faGitlab} from '@fortawesome/free-brands-svg-icons';


const links = [
    {name: "GitHub", url: "https://github.com/Renaud-Dov", icon: faGithub},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/renaud-dov-devers/", icon: faLinkedin},
    {name: "Gitlab", url: "https://gitlab.com/dov_bugbear", icon: faGitlab},
    {name: "contact@bugbear.fr", url: "mailto:contact@bugbear.fr", icon: faEnvelope},
    {name: "bugbear", url: "https://discord.com/users/208480161421721600", icon: faDiscord},
]

export class Contact extends Component {
    render() {
        return (
            <div className=":container bg-black text-white scroll-auto mx-auto">
                <div className="grid grid-cols-2 ">
                    {links.map((link, index) => (
                        <a href={link.url}
                           className="text-left w-full  p-4 text-green-500 hover:text-white flex flex-row items-center gap-4"
                           target="_blank"
                           rel="noreferrer noopener" key={index}>
                            <FontAwesomeIcon icon={link.icon} size="2x" />
                            <span className="text-xl ml-4  md:visible">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        )
            ;
    }
}
