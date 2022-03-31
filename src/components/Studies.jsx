import epita from "../img/EPITA_LOGO_INGENIEUR_CMJN.svg";
import cabrini from "../img/cabrini.png";
import {data, lang} from "../data";


const studies = [
    {
        name: "EPITA",
        from: 2020,
        to: 2025,
        logo: epita,
        description: {
            en: "Master in Computer Science (Ongoing)",
            fr: "Master en Informatique (En cours)",
        }
    },
    {
        name: "Francoise Cabrini",
        from: 2017,
        to: 2020,
        logo: cabrini,
        description: {
            fr: "Baccalauréat Scientifique (Mention Bien)",
            en: "Science Baccalaureate (Mention Well)",
        }
    }
]

// https://static.tacdn.com/img2/attractions/apd/dotted-line.svg

export function Studies() {

    return <>
        <h1 className="text-4xl md:text-6xl font-Lato text-left text-green-500 ml-3 md:ml-0 font-bold py-8">{data.studies}</h1>
        <ul className="flex flex-col">
            {
                studies.map(study => <li key={study.name} className="flex ">
                    {/*picture*/}
                    <div
                        className="bg-dot-pattern w-full  bg-repeat-y justify-center justify-items-start z-1 justify-self-center content-center place-content-center bg-center object-scale-down">
                        <img src={study.logo} alt={study.name}
                             className="object-scale-down w-16 h-16 mx-auto  rounded-full bg-white border-green-500 border-4"/>
                    </div>
                    {/*description*/}
                    <div className="flex flex-col ml-5 mb-4">
                        <div className="flex flex-row items-center gap-0">
                            <span
                                className="text-xl font-Lato text-left text-green-500 font-bold">{study.name}</span>
                            <span className="bg-green-500 ml-3 p-1 flex-none">{study.from} - {study.to}</span>
                        </div>
                        <span>{study.description[lang]}</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid assumenda atque consequatur deserunt dicta, doloremque ea eaque eveniet exercitationem expedita in itaque molestiae nemo neque nesciunt numquam odio optio provident quaerat quam quia quod quos recusandae sint. Nihil, odit?
                    </div>
                </li>)
            }
        </ul>
    </>
}