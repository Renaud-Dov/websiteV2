import uk_flag from "./img/uk_flag.webp";
import fr_flag from "./img/fr_flag.webp";

export let lang = "fr";
export const data_raw =
    {
        en: {
            profession: "Student & Developer",
            cv_button: "My Resume",
            change_lang: uk_flag,
            about_me: "About me",
            about_me_text1: "I am a student in the 3rd year of the engineering cycle at",
            about_me_text2: " in embedded systems major specialising in Open Platform (systems/toolchain). I am passionate about development and learning new technologies. I am constantly looking for new challenges and ways to improve my skills as a developer. I also love photography, you can find some of my photos on",
            about_me_job: "I am currently looking for an end-of-studies internship for a duration of 6 months starting in February 2025 in the field of DevOps or Platform Engineering.",
            skills: "Skills",
            languages: "Languages",
            framework: "Framework and tools",
            projects: "Projects",
            link_project: "Check this out",
            link_other_projects: "Check my other projects",
            studies: "Studies"
        },
        fr: {

            profession: "Etudiant & Développeur",
            cv_button: "Mon CV",
            change_lang: fr_flag,
            about_me: "À propos de moi",
            about_me_text1: "Je suis étudiant en 3ème année du cycle ingénieur à l'",
            about_me_text2: " en majeure systèmes embarqués spécialisation Plateforme Ouverte (systèmes/toolchain). Je suis passionné par le développement et l'apprentissage de nouvelles technologies. Je suis constamment à la recherche de nouveaux défis et de manières d'améliorer mes compétences en tant que développeur. J'adore également la photographie, vous pouvez par ailleurs trouver quelques-unes de mes photos sur",
            about_me_job: "Je suis actuellement en recherche d'un stage de fin d'études pour une durée de 6 mois à partir de février 2025 dans le domaine du DevOps ou Platform Engineering.",
            skills: "Compétences",
            languages: "Languages",
            framework: "Framework et outils",
            projects: "Projets",
            link_project: "Voir ce projet",
            link_other_projects: "Voir mes autres projets",
            studies: "Études",
        },
    }

export let data = genData();

export function changeLang() {
    lang = lang === "fr" ? "en" : "fr";
    data = genData();

}

function genData() {
    return data_raw[lang];
}
