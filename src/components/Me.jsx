import picture from "../dov.jpeg";
import epita from "../EPITA_LOGO_INGENIEUR_CMJN.svg"
import {Contact} from "./Contact";
import {Footer} from "./Footer";
import {Projects} from "./Projects";

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


export function Me() {
    return (
        <div className=":container bg-black text-white scroll-auto ">
            <div className="h-screen md:flex md:mx-6">
                <div className="bg-black self-center mx-auto flex-1 w-72 ">
                    <img src={picture} className="h-48 w-48  md:h-80 md:w-80 rounded-full mx-auto" alt="Dov"/>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold">Renaud-Dov DEVERS</h1>
                        <h2 className="text-lg font-light">Student & Developer</h2>
                    </div>
                    <div className="my-5">
                        <a href="https://api.bugbear.fr/cv/fr"
                           className="rounded-full border-4 py-2 border-green-500 bg-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white"
                           target="_blank"
                           rel="noreferrer noopener">
                            <span className="text-xl font-bold ml-2">My CV</span> <i
                            className="fa-solid fa-arrow-up-right-from-square px-1 fa-lg"/>
                        </a>
                    </div>
                    <Contact/>
                </div>

                <div className="md:flex-1 md:flex overflow-hidden px-5 bg-black text-white ">
                    <div className="md:flex-1 overflow-y-scroll">
                        <h1  className="text-4xl md:text-6xl font-Lato text-left text-green-500 font-bold py-4">About me</h1>
                            <p className="text-xl md:text-3xl font-Lato text-left ml-5 leading-9 md:leading-10">
                            I am a student at <a href="https://epita.fr"><img src={epita}
                                                                              className="h-14 w-14 fill-green-500 font-medium mx-auto inline-block"
                                                                              alt="Epita LOGO"/></a> and developer with
                            a passion for learning and
                            problem solving. I am currently working on my master degree in Computer Science.
                            I am a very good eager to learn new technologies and I am always looking for new challenges.
                            I also like photography, you can find few pictures on <a
                            href="https://flic.kr/ps/3YdDB4"
                            className="rounded-full px-1 border-4 font-bold text-xl border-green-500 bg-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white"
                            target="_blank"
                            rel="noreferrer noopener">Flickr <i
                            className="fa-brands fa-flickr "/></a>.

                        </p>
                        <h1 className="text-4xl md:text-6xl font-Lato text-left text-green-500  font-bold pt-8">Skills</h1>
                        <h1 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">Languages</h1>
                        <div className="flex flex-wrap gap-4 ml-5">
                            {skills.map((item, index) => (
                                <p key={index}
                                   className={`font-Lato hover:scale-110 duration-300 min-w-[10%] font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                                    {item.lang} <i className={`${item.logo}`}/>
                                </p>
                            ))}
                        </div>
                        <h1 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">Framework and
                            tools</h1>
                        <div className="flex flex-wrap gap-4 ml-5">
                            {tools.map((item, index) => (
                                <p key={index}
                                   className={`font-Lato hover:scale-110 duration-300 min-w-[10%]  font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                                    {item.lang} <i className={`${item.logo} `}/>
                                </p>

                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-Lato text-left text-green-500  font-bold py-8">My Projects</h1>
                        <Projects/>
                        <Footer/>

                    </div>

                </div>
            </div>
        </div>
    )
}