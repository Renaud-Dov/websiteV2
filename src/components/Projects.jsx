import React, {useState, Component} from 'react';
import panic from "../panicAtTortuga.png";
import checkstudents from "../checkstudents.jpg";
import websiteIcon from "../website.jpg";
import websiteIcon2 from "../websitev2.jpg";

const list = [
    {
        name: 'Opticalloop OCR',
        description: 'Opticalloop is OCR application made in C to recognise and solve sudokus.',
        picture: 'https://opticalloop.bugbear.fr/picture/our_project.gif',
        link: 'https://opticalloop.bugbear.fr/',
        tech: ["devicon-c-plain", "devicon-python-plain"]
    },
    {
        name: 'Panic at Tortuga',
        description: 'Panic at Tortuga is a video game developed on Unity Engine during Epita\'s S2 project in a team of 4.',
        picture: panic,
        link: 'https://lifeinvaders.github.io/website/',
        tech: ["devicon-csharp-plain", "devicon-unity-original"]
    },
    {
        name: "CheckStudents",
        description: "CheckStudent is Discord bot written in Python to take the attendance in class used in several servers around the world.",
        picture: checkstudents,
        link: "https://github.com/Renaud-Dov/CheckStudents",
        tech: ["devicon-python-plain"]
    },
    {
        name: "Second Portfolio",
        description: "This portfolio is a website made with ReactJS and tailwindcss. It also host some pictures I took during my trips.",
        picture: websiteIcon2,
        link: "https://bugbear.fr/",
        tech: ["devicon-nodejs-plain", "devicon-react-original", "devicon-tailwindcss-plain"]
    },
    {
        name: 'First Portfolio',
        description: 'My first personal Portfolio, made with bootstrap, and few other libraries.',
        picture: websiteIcon,
        link: 'https://me.bugbear.fr/',
        tech: ["devicon-bootstrap-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain"]
    },
    {
        name: "Other Projects",
        description: "Here are some other projects I made during my studies.",
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
        let bg = null;
        let text_color = "text-green-500";
        if (this.props.item.picture !== undefined) {
            bg = <img src={this.props.item.picture} alt="Avatar"
                      className={"object-cover w-full h-full  " + (this.state.isHovered ? "opacity-30" : "opacity-70")}/>
        } else {
            bg = <div className={"w-full h-full bg-green-500"}/>
            text_color = "text-white"
        }
        return (
            <div className="relative h-28 hover:h-52 duration-200" onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
                {bg}
                <div
                    className={"absolute object-fill w-full h-full inset-y-0 text-white font-bold text-xl text-left transition-all"}>
                    <div className="flex flex-wrap flex-row gap-10 p-5 ">
                        <div
                            className={(this.state.isHovered ? 'underline ' : ' ') +"absolute object-fill decoration-2 h-full visible duration-200 inset-y-0 pl-4 pt-2 text-white font-medium text-2xl md:text-4xl text-left transition-all"}>
                            {this.props.item.name}
                        </div>
                        <div className={(this.state.isHovered ? 'visible ' : 'invisible ') + "absolute pt-8 px-4"}>
                            <p>{this.props.item.description}</p>
                            <a href={this.props.item.link}
                               className={text_color + " hover:underline  hover:decoration-2 pt-3"}>
                                Check this out <i className="fa-solid  fa-arrow-up-right-from-square px-1 md:fa-lg"/>
                            </a>
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
        <h1 className="text-4xl md:text-6xl font-Lato text-left text-green-500 ml-3 md:ml-0  font-bold py-8">My
            Projects</h1>
        <div className="flex flex-col border-green-500  border-4 rounded-md">
            {list.map((item, index) => (
                <ProjectItem key={index} item={item}/>
            ))}

        </div>
    </>;

}