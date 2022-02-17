import React, {useState, Component} from 'react';
import panic from "../panicAtTortuga.png";
import checkstudents from "../checkstudents.jpg";
import websiteIcon from "../website.jpg";

const list = [
    {
        name: 'Opticalloop OCR',
        description: 'Opticalloop is OCR application made in C to recognise and solve sudokus.',
        picture: 'https://opticalloop.bugbear.fr/picture/our_project.gif',
        link: 'https://opticalloop.bugbear.fr/'
    },
    {
        name: 'Panic at Tortuga',
        description: 'Panic At Tortuga is a video game developed on Unity Engine during Epita\'s S2 project in a team of 4.',
        picture: panic,
        link: 'https://lifeinvaders.github.io/website/'
    },
    {
        name: "CheckStudents",
        description: "CheckStudent is Discord bot written in Python to take the attendance in class used in several servers around the world.",
        picture: checkstudents,
        link: "https://github.com/Renaud-Dov/CheckStudents",
    },
    {
        name: 'First Portfolio',
        description: 'My first personal Portfolio, made with bootstrap, and few other libraries.',
        picture: websiteIcon,
        link: 'https://me.bugbear.fr/'
    },


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
        if (this.props.item.picture !== undefined) {
            bg = <img src={this.props.item.picture} alt="Avatar"
                      className={"object-cover w-full h-full  opacity-50"}/>
        }
        else {
            bg = <div className={"w-full h-full bg-green-500"}/>
        }
        return (
            <div className="relative h-28 hover:h-48 duration-200" onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
                {bg}
                <div
                    className={"absolute object-fill w-full h-full inset-y-0 text-white font-bold text-xl text-left transition-all"}>
                    <div className="flex flex-wrap flex-row gap-10 p-5 justify-center content-center">
                        <div
                            className={"absolute object-fill hover:underline hover:decoration-1 w-full h-full visible duration-200 inset-y-0 pl-4 pt-2 text-white font-light text-4xl text-left transition-all"}>
                            {this.props.item.name}
                        </div>
                        <div className={(this.state.isHovered ? 'visible ' : 'invisible ') + "pt-8"}>
                            <p>{this.props.item.description}</p>
                            <button ref={this.props.item.link}>
                                Check this out <i className="fa-solid  z-10 fa-arrow-up-right-from-square px-1 fa-lg"/>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export function Projects() {
    return (
        <div className="flex flex-col">
            {list.map((item,index) => (
                <ProjectItem key={index} item={item}/>
            ))}
            <ProjectItem item={{name:"Other projects",link:"#"}}/>

        </div>

    )
}