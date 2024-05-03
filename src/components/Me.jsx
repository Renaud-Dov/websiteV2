import picture from "../img/dov.webp";
import epita from "../img/EPITA_LOGO_INGENIEUR_CMJN.svg"
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { changeLang, data, lang } from "../data";
import React, { Component } from "react";
import { Studies } from "./Studies";
import { faFlickr } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const skills = [
    { name: "Python", logo: "devicon-python-plain" },
    { name: "Java", logo: "devicon-java-plain" },
    { name: "C#", logo: "devicon-csharp-plain" },
    { name: "C", logo: "devicon-c-plain" },
    { name: "Node JS", logo: "devicon-nodejs-plain" },
    { name: "C++", logo: "devicon-cplusplus-plain" },
    { name: "Rust", logo: "devicon-rust-plain" },
    { name: "Swift", logo: "devicon-swift-plain" },
    { name: "OCaml", logo: "devicon-ocaml-plain" },
]
const tools = [
    { name: "Linux", logo: "devicon-linux-plain" },
    { name: "Docker", logo: "devicon-docker-plain" },
    { name: "Kubernetes", logo: "devicon-kubernetes-plain" },
    { name: "Git", logo: "devicon-git-plain" },
    { name: 'PostgreSQL', logo: "devicon-postgresql-plain" },
    { name: "expressJS", logo: "devicon-express-original" },
    { name: "Flask", logo: "devicon-flask-plain" },
    { name: "Firebase", logo: "devicon-firebase-plain" },
    { name: "Azure", logo: "devicon-azure-plain" },
    { name: "Kafka", logo: "devicon-apachekafka-original" },
    { name: "React", logo: "devicon-react-original" },
    { name: "Grafana", logo: "devicon-grafana-plain" },
]

const cvLink = `https://s3.bugbear.fr/personal/public/cv/${lang}.pdf`;


function AboutMe() {
    return <>
        <h1 className="text-4xl md:text-5xl font-Lato text-left text-green-500 font-bold ml-3 md:ml-0 md:mt-8 py-4">{data.about_me}</h1>
        <p className="text-xl md:text-2xl break-normal  text-justify font-Lato md:text-left mx-5 leading-9 md:leading-10">
            {data.about_me_text1} <a href="https://epita.fr"><img src={epita}
                className="h-14 w-14 fill-green-500 font-medium mx-auto inline-block"
                alt="Epita LOGO" /></a> {data.about_me_text2} <a
                    href="https://flic.kr/ps/3YdDB4"
                    className="break-normal rounded-full px-1 border-4 font-bold text-xl border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 hover:text-white"
                    target="_blank"
                    rel="noreferrer noopener">Flickr <FontAwesomeIcon icon={faFlickr} /></a>.

        </p>
    </>;
}

function Skills() {
    return <>
        <h1 className="text-4xl md:text-5xl font-Lato text-left text-green-500 ml-3 md:ml-0  font-bold pt-8">{data.skills}</h1>
        <h2 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">{data.languages}</h2>
        <div className="flex flex-wrap gap-4 ml-5">
            {skills.map((item, index) => (
                <p key={index}
                    className={`font-Lato hover:scale-110 duration-300 min-w-[10%] font-bold rounded-full bg-green-600 border-8 border-green-600`}>
                    {item.name} <i className={`${item.logo}`} />
                </p>
            ))}
        </div>
        <h2 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">{data.framework}</h2>
        <div className="flex flex-wrap gap-4 ml-5">
            {tools.map((item, index) => (
                <p key={index}
                    className={`font-Lato hover:scale-110 duration-300 min-w-[10%]  font-bold rounded-full bg-green-600 border-8 border-green-600`}>
                    {item.name} <i className={`${item.logo} `} />
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
                        className="w-16 h-16 p-0 m-0  rounded-full ring-green-500 ring-4" />

                </button>
                <div className="pt-9">
                    <img src={picture} className="h-48 w-48 md:h-80 md:w-80 rounded-full mx-auto" alt="Dov" />
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold">Renaud-Dov DEVERS</h1>
                        <h2 className="text-lg">{data.profession}</h2>
                    </div>
                    <div className="my-5">
                        <a href={cvLink}
                            className="rounded-full border-4 py-2 px-3 text-xl font-bold border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 hover:text-white"
                            target="_blank"
                            rel="noreferrer noopener">{data.cv_button}
                        </a>
                    </div>
                    <Contact />
                </div>


            </div>

        )
    }
}

export class RightSide extends Component {
    render() {
        return (
            <div className="md:flex-1  w-full bg-black text-white ">

                <AboutMe />
                <Skills />
                <Studies />
                <Projects />
                <Footer />

            </div>
        )
    }
}
