import picture from "../dov.jpeg";
import epita from "../EPITA_LOGO_INGENIEUR_CMJN.svg"
import {Contact} from "../Contact";
import {Footer} from "./Footer";

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
const framework = [

    {lang: "Flask", color: "green", "logo": "devicon-flask-plain"},
    {lang: "expressJS", color: "green", "logo": "devicon-express-original"},
    {lang: "Docker", color: "green", "logo": "devicon-docker-plain"},
    {lang: "Azure", color: "green", "logo": "devicon-azure-plain"},
    {lang: "React", color: "green", "logo": "devicon-react-original"},
    {lang: "Electron", color: "green", "logo": "devicon-electron-orignal "},

]


export function Me() {
    return (
        <div className=":container bg-black text-white scroll-auto ">
            <div className="h-screen md:flex ">
                <div className="bg-black self-center flex-1 w-72 ">
                    <img src={picture} className="h-80 w-80 rounded-full mx-auto" alt="Dov"/>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold">Dov</h1>
                        <h2 className="text-lg font-light">Full Stack Developer</h2>
                    </div>
                    <div className="my-5">
                        <a href="https://api.bugbear.fr/cv/fr"
                           className="rounded-full border-4 py-2 border-green-500 bg-green-500  hover:text-white"
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
                        <h1 className="text-6xl font-Lato text-left text-green-500 font-bold py-8">About me</h1>
                        <p className="text-3xl font-Lato text-left ml-5">
                            I am a student at <img src={epita} className="h-14 w-14 fill-green-500 mx-auto inline-block"
                                                   alt="Epita LOGO"/> and developer with a passion for learning and
                            problem solving.
                        </p>
                        <h1 className="text-6xl font-Lato text-left text-green-500  font-bold pt-8">Skills</h1>
                        <h1 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">Languages</h1>
                        <div className="flex flex-wrap gap-4 ml-5">
                            {skills.map((item) => (
                                <p className={`font-Lato break-inside-avoid-column min-w-[10%] text-left font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                                    {item.lang} <i className={`${item.logo}`}/>
                                </p>
                            ))}
                        </div>
                        <h1 className="text-xl font-Lato text-left text-green-500 ml-5 font-bold py-8">Framework and
                            tools</h1>
                        <div className="flex flex-wrap gap-4 ml-5">
                            {framework.map((item) => (
                                <p className={`font-Lato hover:scale-110 duration-300 min-w-[10%]  font-bold rounded-full bg-green-500 border-8 border-green-500`}>
                                    {item.lang} <i className={`${item.logo} `}/>
                                </p>

                            ))}
                        </div>
                        <h1 className="text-6xl font-Lato text-left text-green-500  font-bold pt-8">My Projects</h1>


                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam asperiores commodi
                        culpa doloremque ea earum eveniet exercitationem facere fugit iste libero magni, natus neque
                        nostrum nulla obcaecati omnis optio porro quibusdam quisquam quos, reprehenderit rerum sit
                        veniam vitae! Beatae eos ipsa iste, mollitia porro similique. Commodi deserunt eveniet id
                        laborum non, porro sed. Alias, asperiores dolorum et facilis natus nisi quidem quo voluptatum?
                        Asperiores commodi debitis esse, facere, inventore ipsum laborum minima nihil odit provident
                        tempora tempore temporibus voluptas. Cumque fugit laboriosam natus voluptates. Animi at atque
                        dicta distinctio dolorum eligendi eos et facilis id, illo magni maiores maxime nam,
                        necessitatibus neque, pariatur perferendis quaerat quasi quis quo ratione recusandae repellendus
                        saepe sapiente sequi similique velit. A adipisci alias asperiores, cumque debitis delectus
                        dignissimos ducimus eligendi enim eos esse est eveniet ex fugiat, illum in ipsam iste labore
                        laborum molestias nam necessitatibus nesciunt nisi nostrum officia quas, quisquam reiciendis rem
                        saepe sed sequi tenetur totam voluptatibus! Atque debitis enim iusto magnam minima, nulla
                        numquam odit rerum unde vel vitae voluptas. Adipisci, aliquid asperiores autem culpa dignissimos
                        dolorem ex explicabo iusto nobis non perferendis perspiciatis recusandae rem tempora tenetur,
                        ullam voluptates? Ipsum, possimus, tenetur. Animi aut beatae consequatur cum dicta, distinctio
                        dolore doloremque eaque eius eveniet inventore ipsam iure modi molestias nisi numquam officia
                        optio qui quisquam rerum saepe, sequi similique sint totam unde ut voluptates. Ab accusamus
                        assumenda, consequatur consequuntur debitis dignissimos distinctio dolores eaque earum esse fuga
                        fugiat fugit id impedit in ipsam laudantium libero magnam modi mollitia nam non, odio officia
                        officiis optio praesentium quas qui quia quidem quisquam repellendus reprehenderit sequi sint
                        tenetur vel vitae voluptatibus! Accusamus ad aliquid architecto beatae cupiditate debitis
                        deleniti est et excepturi harum hic, impedit ipsum iste magni minima numquam omnis quae quia
                        quisquam quos recusandae, rem sapiente, similique suscipit ut veritatis vitae? Alias architecto
                        consequuntur culpa cum dolores ea hic illo illum in magni nemo officia officiis quasi qui quo,
                        sed voluptatem. Consectetur, doloremque, totam! Ipsa, iusto, perspiciatis? Aliquid aut dolore
                        dolorum eius esse incidunt iusto laudantium magnam molestias nobis nulla officiis quae, quisquam
                        sed similique vero voluptas voluptatem. Commodi delectus distinctio esse incidunt quidem.
                        Adipisci alias asperiores assumenda at debitis dolor earum excepturi facilis fugit illum
                        incidunt, ipsum iste maiores maxime necessitatibus, quae soluta vel veniam voluptate,
                        voluptates! Accusamus animi beatae inventore minima nam, officia possimus quas. Amet aspernatur
                        aut blanditiis enim excepturi exercitationem facilis fugit in labore laboriosam laudantium
                        necessitatibus nostrum pariatur quas, rem saepe voluptatum! Asperiores debitis deleniti eaque
                        eius est eveniet ex excepturi facilis, fugit ipsa laboriosam numquam placeat quas qui
                        repudiandae saepe voluptatum? Excepturi necessitatibus sed soluta tempore! Assumenda commodi
                        consectetur facilis illum ipsum labore, magni non quae quas quos tempore, veniam, voluptas
                        voluptate! Adipisci aliquid architecto dolorum exercitationem impedit in, natus obcaecati quo
                        ratione repellendus reprehenderit sequi sit tenetur ullam veritatis? Accusamus aliquam
                        architecto, cumque eaque eos excepturi explicabo illo, inventore ipsum iste nihil obcaecati
                        officiis, optio praesentium recusandae reiciendis ullam voluptate voluptatum. Nobis officiis qui
                        quos sequi soluta. Aliquam quas quia voluptas?
                        {/*<div className="visible md:invisible py-5 h-0">*/}
                        {/*    <h1 className="text-3xl font-Lato text-left text-green-500 font-bold py-8">Contact me</h1>*/}
                        {/*    <Contact/>*/}
                        {/*</div>*/}
                        <Footer/>

                    </div>

                </div>
            </div>
        </div>
    )
}