import picture from "../img/dov.webp";
import epita from "../img/EPITA_LOGO_INGENIEUR_CMJN.svg"
import {Contact} from "./Contact";
import {Footer} from "./Footer";
import {Projects} from "./Projects";
import {changeLang, data, lang} from "../data";
import React, {Component} from "react";
import {Studies} from "./Studies";
import {faFlickr} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const skills =
    [
        {lang: "Python", color: "green", "logo": "devicon-python-plain"},
        {lang: "Node JS", color: "yellow", "logo": "devicon-nodejs-plain"},
        {lang: "Rust", color: "green", "logo": "devicon-rust-plain"},
        {lang: "C", color: "green", "logo": "devicon-c-plain"},
        {lang: "C#", color: "green", "logo": "devicon-csharp-plain"},
        {lang: "C++", color: "green", "logo": "devicon-cplusplus-plain"},
        {lang: "Swift", color: "green", "logo": "devicon-swift-plain"},
    ]
const tools = [

    {lang: "Flask", color: "green", "logo": "devicon-flask-plain"},
    {lang: "expressJS", color: "green", "logo": "devicon-express-original"},
    {lang: "Linux", color: "green", "logo": "devicon-linux-plain"},
    {lang: "Git", color: "green", "logo": "devicon-git-plain"},
    {lang: "Firebase", color: "yellow", "logo": "devicon-firebase-plain"},
    {lang: "Docker", color: "green", "logo": "devicon-docker-plain"},
    {lang: "Azure", color: "green", "logo": "devicon-azure-plain"},
    {lang: "React", color: "green", "logo": "devicon-react-original"},
    {lang: "Electron", color: "green", "logo": "devicon-electron-original"},
    {lang: "Unity", color: "green", "logo": "devicon-unity-original"},
    {lang: "Matlab", color: "green", "logo": "devicon-matlab-plain"},

]


function AboutMe() {
    return <>
        <h1 className="text-4xl md:text-6xl font-Lato text-left text-green-500 font-bold ml-3 md:ml-0 md:mt-8 py-4">{data.about_me}</h1>
        <p className="text-xl md:text-3xl break-normal  text-justify font-Lato md:text-left mx-5 leading-9 md:leading-10">
            {data.about_me_text1} <a href="https://epita.fr"><img src={epita}
                                                                  className="h-14 w-14 fill-green-500 font-medium mx-auto inline-block"
                                                                  alt="Epita LOGO"/></a> {data.about_me_text2} <a
            href="https://flic.kr/ps/3YdDB4"
            className="rounded-full px-1 border-4 font-bold text-xl border-green-500 bg-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white"
            target="_blank"
            rel="noreferrer noopener">Flickr <FontAwesomeIcon icon={faFlickr} /></a>.

        </p>
    </>;
}

function Skills() {
    return <>
        <h1 className="text-4xl md:text-6xl font-Lato text-left text-green-500 ml-3 md:ml-0  font-bold pt-8">{data.skills}</h1>
        <h2 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">{data.languages}</h2>
        <div className="flex flex-wrap gap-4 ml-5">
            {skills.map((item, index) => (
                <p key={index}
                   className={`font-Lato hover:scale-110 duration-300 min-w-[10%] font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                    {item.lang} <i className={`${item.logo}`}/>
                </p>
            ))}
        </div>
        <h2 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">{data.framework}</h2>
        <div className="flex flex-wrap gap-4 ml-5">
            {tools.map((item, index) => (
                <p key={index}
                   className={`font-Lato hover:scale-110 duration-300 min-w-[10%]  font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                    {item.lang} <i className={`${item.logo} `}/>
                </p>

            ))}
        </div>
    </>;
}

export class Me extends Component {
    render() {
        return (
            <div className="left-0 md:sticky md:top-0 h-min md:flex-1">
                <button onClick={() => {
                    changeLang();
                    this.props.reference.setState({});
                }}
                        className="absolute z-1 flex ml-3 mt-3">
                    <img src={data.change_lang} alt="change language"
                         className="max-h-10 max-w-16  bg-green-500 p-0 m-0  rounded-xl"/>

                </button>
                <div className="pt-9">
                    <img src={picture} className="h-48 w-48 md:h-80 md:w-80 rounded-full mx-auto" alt="Dov"/>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold">Renaud-Dov DEVERS</h1>
                        <h2 className="text-lg font-light">{data.profession}</h2>
                    </div>
                    <div className="my-5">
                        <a href={`https://api.bugbear.fr/cv/${lang}.pdf`}
                           className="rounded-full border-4 py-2 border-green-500 bg-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white"
                           target="_blank"
                           rel="noreferrer noopener">
                            <span className="text-xl font-bold ml-2">{data.cv_button}</span> <i
                            className="fa-solid fa-arrow-up-right-from-square px-1 fa-lg"/>
                        </a>
                    </div>
                    <Contact/>
                </div>


            </div>

        )
    }
}

export class RightSide extends Component {
    render() {
        return (
            <div className="md:flex-1  w-full bg-black text-white ">

                <AboutMe/>
                <Skills/>
                <Studies/>
                <Projects/>
                <Footer/>

            </div>
        )
    }
}
