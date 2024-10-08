import epita from "../img/EPITA_LOGO_INGENIEUR_CMJN.svg";
import cabrini from "../img/cabrini.webp";
import atu from "../img/atu.webp";
import {data, lang} from "../data";


const studies = [
    {
        name: "EPITA",
        from: 2020,
        to: 2025,
        logo: epita,
        description: {
            fr: "3ème année en cycle ingénieur majeure systèmes embarqués spécialisation Plateforme Ouverte",
            en: "3rd year in engineering cycle majoring in embedded systems specialising in Open Platform",
        }
    },
    {
        name: "ATU Sligo",
        in: 2022,
        logo: atu,
        description: {
            fr: "Semestre d'étude à l'étranger",
            en: "Semester abroad",
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
        <h1 className="text-4xl md:text-5xl font-Lato text-left text-green-600 ml-3 md:ml-0 font-bold py-8">{data.studies}</h1>
        <ul className="ml-5 flex flex-col">
            {studies.map((study, index) =>
                <li key={study.name} className="flex ">
                    {/*picture*/}
                    <div
                        className={(index === 0 || index === studies.length - 1 ? "" : "bg-dot-pattern") + " w-16 bg-repeat-y justify-center justify-items-start z-1 justify-self-center content-center place-content-center bg-center"}>
                        <img src={study.logo} alt={study.name}
                             className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-green-500 border-4"/>
                    </div>
                    {/*description*/}
                    <div className={(index === studies.length - 1 ? "" : "mb-10 ") + " ml-5"}>
                        <div className="flex flex-row items-center gap-0">
                            <span
                                className="text-xl font-Lato text-left text-green-600 font-bold">{study.name}</span>
                            <span
                                className="bg-green-600 ml-3 py-1 px-2 rounded-full flex-none">{study.in ? study.in : study.from + " - " + study.to}</span>
                        </div>
                        <span>{study.description[lang]}</span>
                    </div>
                </li>
            )}
        </ul>
    </>
}
