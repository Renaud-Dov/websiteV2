import React, {Component} from 'react';
import panic from "../img/panicAtTortuga.webp";
import discordSolana from "../img/discordSolana.webp";
import checkstudents from "../img/checkstudents.webp";
import websiteIcon from "../img/website.webp";
import hermes from "../img/hermes.webp";
import opticalloop from "../img/opticalloop.webp";
import websiteIcon2 from "../img/websitev2.webp";
import {data, lang} from "../data";
const list = [
    {
        name: "Hermes",
        description: {
            fr: "Bot discord utilisé par l'équipe d'assistants (ACDC) de l'EPITA pour gérer la création et le suivi des tickets des étudiants.",
            en: "Discord bot used by the EPITA assistants (ACDC) team to manage the creation and tracking of student tickets."
        },
        picture: hermes,
        tech: ["devicon-python-plain", "devicon-grafana-original"],
        link: "https://github.com/Renaud-Dov/Hermes"
    },
    {
        name: "Discord + Solana",
        description: {
            fr: "Différents bots Discord conçus pour intéragir avec les marchés d'NFT et la blockchain en général.",
            en: "Different Discord bots made to interact with NFTs markets and the blockchain in general."
        },
        picture: discordSolana,
        tech: ["devicon-python-plain", "fa-brands fa-discord"]
    },
    {
        name: 'Opticalloop OCR',
        description: {
            en: "Opticalloop is OCR application made in C to recognise and solve sudokus.",
            fr: "Opticalloop est une application écrite en C pour reconnaître et résoudre des sudokus.",
        },
        picture: opticalloop,
        link: 'https://opticalloop.bugbear.fr/',
        tech: ["devicon-c-plain", "devicon-python-plain"]
    },
    {
        name: 'Panic at Tortuga',
        description: {
            en: "Panic at Tortuga is a video game developed on Unity Engine during Epita's S2 project in a team of 4.",
            fr: "Panic at Tortuga est un jeu vidéo développé avec le moteur Unity durant le projet de S2 d'Epita en équipe de 4."
        },
        picture: panic,
        link: 'https://lifeinvaders.github.io/website/',
        tech: ["devicon-csharp-plain", "devicon-unity-original"]
    },
    {
        name: "CheckStudents",
        description: {
            en: "CheckStudent is Discord bot written in Python to take the attendance in class used in several servers around the world.",
            fr: "CheckStudent est un bot Discord écrit en Python pour permettre de faire l'appel en distanciel. Il est utilisé dans plusieurs serveurs autour du monde.",
        },
        picture: checkstudents,
        link: "https://github.com/Renaud-Dov/CheckStudents",
        tech: ["devicon-python-plain"]
    },
    {
        name: "Second Portfolio",
        description: {
            en: "This portfolio is a website made with ReactJS and tailwindcss. It also host some pictures I took during my trips.",
            fr: "Ce portfolio est un site web écrit avec ReactJS et tailwindcss. Il contient également des photos que j'ai pris durant mes voyages.",
        },
        picture: websiteIcon2,
        link: "https://bugbear.fr/",
        tech: ["devicon-nodejs-plain", "devicon-react-original", "devicon-tailwindcss-plain"]
    },
    {
        name: 'First Portfolio',
        description: {
            en: 'My first personal Portfolio, made with bootstrap, and few other libraries.',
            fr: "Mon premier portfolio personnel, écrit avec Bootstrap et quelques autres librairies."
        },

        picture: websiteIcon,
        link: 'https://me.bugbear.fr/',
        tech: ["devicon-bootstrap-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain"]
    },
    {
        name: "Other Projects",
        description: {
            en: "Here are some other projects I made during my studies.",
            fr: "Voici quelques autres projets que j'ai réalisé durant mes études."
        },
        link: "https://github.com/Renaud-Dov?tab=repositories",
        tech: []
    }
]

class ProjectItem extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);

    }

    handleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        let bg;
        let text_color = "text-green-500";
        if (this.props.item.picture !== undefined) {
            bg = <img src={this.props.item.picture} alt="Avatar"
                      className={"object-cover w-full h-full  " + (this.state.isHovered ? "opacity-30" : "opacity-70")}/>
        } else {
            bg = <div className={"w-full h-full bg-green-500"}/>
            text_color = "text-white"
        }
        return (
            <div className="relative h-28 hover:h-64 md:hover:h-52 duration-200" onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
                {bg}
                <div
                    className={"absolute object-fill w-full h-full inset-y-0 text-white font-bold text-xl text-left transition-all"}>
                    <div className="flex flex-wrap flex-row gap-10 p-5 ">
                        <div
                            className={(this.state.isHovered ? 'underline ' : ' ') + "absolute object-fill decoration-2 h-full visible duration-200 inset-y-0 pl-4 pt-2 text-white font-medium text-2xl md:text-4xl text-left transition-all"}>
                            {this.props.item.name}
                        </div>
                        <div className={(this.state.isHovered ? 'visible ' : 'invisible ') + "absolute pt-8 px-4"}>
                            <p>{this.props.item.description[lang]}</p>
                            {(this.props.item.link !== undefined) &&
                                <a href={this.props.item.link} target="_blank" rel="noreferrer noopener"
                                   className={text_color + " hover:underline  hover:decoration-2 pt-3"}>
                                    {this.props.item.picture !== undefined ? data.link_project : data.link_other_projects}
                                    <i className="fa-solid  fa-arrow-up-right-from-square px-1 md:fa-lg"/>
                                </a>
                            }
                            <div className="flex flex-wrap  gap-4 pt-2 right-0">
                                {this.props.item.tech.map((tech, index) => {
                                    return (
                                        <div key={index} className="flex flex-row items-center">
                                            <i className={tech}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export function Projects() {
    return <>
        <h1 className="text-4xl md:text-5xl font-Lato text-left text-green-500 ml-3 md:ml-0  font-bold py-8">{data.projects}</h1>
        <div className="flex flex-col border-green-500  border-4 rounded-md">
            {list.map((item, index) => (
                <ProjectItem key={index} item={item}/>
            ))}

        </div>
    </>;

}