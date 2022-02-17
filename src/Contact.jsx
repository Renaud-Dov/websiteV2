import {Component} from "react";

const links = [
    {name: "GitHub", url: "https://github.com/Renaud-Dov", "icon": "fa-brands fa-github"},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/renaud-dov-devers/", "icon": "fa-brands fa-linkedin"},
    {name: "Twitter", url: "https://twitter.com/dov_chavers", "icon": "fa-brands fa-twitter"},
    {name: "Instagram", url: "https://www.instagram.com/dov_devers/", "icon": "fa-brands fa-instagram"},
    {name: "contact@bugbear.fr", url: "mailto:contact@bugbear.fr", "icon": "fa-solid fa-envelope"},
    {name: "BugBear#8715", url: "", "icon": "fa-brands fa-discord"},

]

export class Contact extends Component {
    render() {
        return (
            <div className=":container bg-black text-white scroll-auto mx-auto">
                <div className="flex flex-wrap ">
                    {links.map((link, index) => (
                        <a href={link.url} className=" text-left w-full w-1/6 md:w-1/2 p-4 text-green-500 hover:text-white" target="_blank"
                           rel="noreferrer noopener" key={index}>
                            <i className={`${link.icon} fa-2x`}/>
                            <span className="text-xl ml-2">{link.name}</span>
                        </a>
                    ))}


                </div>
            </div>
        )
            ;
    }
}