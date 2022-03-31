export let lang = "fr";
export const data_raw =
    {
        en: {
            profession: "Student & Developer",
            cv_button: "My Resume",
            change_lang: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
            about_me: "About me",
            about_me_text1: "I am a student at",
            about_me_text2: "and developer with a passion for learning and problem solving. I am currently working on my master degree in Computer Science. I am a very good eager to learn new technologies and I am always looking for new challenges. I also like photography, you can find few pictures on",
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
            change_lang: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
            about_me: "À propos de moi",
            about_me_text1: "Je suis étudiant à l'",
            about_me_text2: "et développeur qui aime apprendre constamment et résoudre des problèmes. Je prépare actuellement mon master en informatique. Je suis très avide d'apprendre de nouvelles technologies et je suis toujours à la recherche de nouveaux défis. J'aime beaucoup aussi la photographie, vous pouvez par ailleurs trouver quelques-unes de mes photos sur",
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