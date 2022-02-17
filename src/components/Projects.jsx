import React, {useState, Component} from 'react';

const list = [
    {
        name: 'Panic at Tortuga',
        description: 'Panic At Tortuga is a video game developed on Unity Engine during Epita\'s S2 project in a team of 4.',
        picture: 'https://bugbear.fr/img/panicAtTortuga.png',
        link: 'https://lifeinvaders.github.io/website/'
    },
    {
        name: 'opticalloop',
        description: 'Opticalloop is OCR application made in C to recognise and solve sudokus.',
        picture: 'https://opticalloop.bugbear.fr/picture/our_project.gif',
        link: 'https://opticalloop.bugbear.fr/'
    },
    {
        name: 'Bugbear',
        description: 'My first personal Portfolio, made with bootstrap.',
        picture: 'https://bugbear.fr/img/website.jpg',
        link: 'https://bugbear.fr/'
    },
    {
        name: "CheckStudents",
        description: "CheckStudent is Python Discord bot to take the attendance in class used in several servers around the world.",
        picture: "https://bugbear.fr/img/checkstudents.jpg",
        link: "https://github.com/Renaud-Dov/CheckStudents",
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
        return (
            <div className="relative h-20 hover:h-40 duration-200" onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
                <img src={this.props.item.picture} alt="Avatar"
                     className="object-cover w-full h-full bg-black opacity-50"/>

                <div
                    className={"absolute object-fill w-full h-full inset-y-0 text-white font-bold text-xl text-left bg-black opacity-50 transition-all"}>
                    <div className="flex flex-wrap flex-row gap-10 p-5 justify-center">
                        <div
                            className={"absolute object-fill w-full h-full visible duration-200 inset-y-0 text-white font-light text-4xl text-left transition-all"}>
                            {this.props.item.name}
                        </div>
                        <div className={(this.state.isHovered ? 'visible ' : 'invisible ') + "pt-8"}>
                            <p>{this.props.item.description}</p>
                            <button ref={this.props.item.link}>
                                Check this out <i className="fa-solid fa-arrow-up-right-from-square px-1 fa-lg"/>
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
            {list.map((item) => (
                <ProjectItem item={item}/>
            ))}

        </div>

    )
}