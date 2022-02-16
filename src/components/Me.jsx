import picture from "../dov.jpeg";

const skills =
    [
        {lang: "Python", color: "green"},
        {lang: "JS", color: "green"},
        {lang: "HTML", color: "green"},
        {lang: "CSS", color: "green"},
        {lang: "React", color: "green"},
        {lang: "Node", color: "green"},
        {lang: "SQL", color: "green"},
        {lang: "Git", color: "green"},
    ]
const framework = [
    {lang: "Flask", color: "green"},
    {lang: "expressJS", color: "green"},
    {lang: "Docker", color: "green"},
    {lang: "Azure", color: "green"},
    {lang: "React", color: "green"},
    {lang: "Electron", color: "green"},

]


export function Me() {


    return (
        <div className=":container bg-black text-white">
            <div className="h-screen md:flex">
                <div className="bg-black w-72 ">
                    <img src={picture} className="h-64 w-64 rounded-full mx-auto" alt="Dov"/>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold">Dov</h1>
                        <h2 className="text-lg">Full Stack Developer</h2>
                    </div>
                </div>

                <div className="md:flex-1 md:flex overflow-hidden px-5">
                    <div className="md:flex-1 overflow-y-scroll">
                        <h1 className="text-6xl font-Lato text-left font-bold py-8">About me</h1>
                        <p className="text-4xl font-Lato text-left">
                            I am a software developer with a passion for learning and
                            problem solving. I am currently working at{" "}
                            <a href="https://www.salesforce.com/">Salesforce</a> as a
                            full-stack developer.
                        </p>
                        <h1 className="text-6xl font-Lato text-left font-bold py-8">Skills</h1>
                        <p className="text-4xl font-Lato text-left">
                            I have a strong background in web development and have
                            experience with the following technologies:
                        </p>
                        <h1 className="text-xl font-Lato text-left font-bold py-8">Languages</h1>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((item) => (
                                <p className={`font-Lato min-w-[10%] font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                                    {item.lang}
                                </p>
                            ))}
                        </div>
                        <h1 className="text-xl font-Lato text-left font-bold py-8">Framework</h1>
                        <div className="flex flex-wrap gap-4">
                            {framework.map((item) => (
                                <p className={`font-Lato min-w-[10%] font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                                    {item.lang}
                                </p>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}