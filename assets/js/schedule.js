/*
 * Manages the schedule component
 */

/**********************************************************************************************************************/
/* Source data */
/**********************************************************************************************************************/
const typeNames = {
    c: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></svg> Cours',
    e: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></svg> Exercices',
    p: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg> Présentation',
    r: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg> Questions',
    w: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></svg> Activités',
    b: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></svg> Pause'
};

const sections = [
    {
        name: 'Architecture',
        message: 'Désolé, Students 4 Students ne s’adresse pas aux étudiant·e·s en architecture.',
    },
    {
        name: 'Chimie et génie chimique',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ch"],
    },
    {
        name: 'CMS',
        courses: ["cms-ceremony", "cms-workshop_calculs", "ws", "snack", "cms-pr", "cms-raq", "cms-pg", "cms-al", "cms-ga", "cms-an"],
    },
    {
        name: 'Génie civil',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ch"],
    },
    {
        name: 'Génie mécanique',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "el"],
    },
    {
        name: 'Génie électrique et électronique',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "el"],
    },
    {
        name: 'Informatique',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ai"],
    },
    {
        name: 'Matériaux',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ch"],
    },
    {
        name: 'Mathématiques',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "ala", "pr", "ana"],
    },
    {
        name: 'Microtechnique',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "el"],
    },
    {
        name: 'Physique',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "ala", "pr", "ana"],
    },
    {
        name: 'Sciences du vivant',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ch"],
    },
    {
        name: 'Sciences et ingénierie de l’environnement',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ch"],
    },
    {
        name: 'Systèmes de communication',
        courses: ["ceremony", "workshop_learn2study", "ws", "snack", "pm", "al", "pr", "an", "ai"],
    },
];

/**********************************************************************************************************************/
/* Initial state */
/**********************************************************************************************************************/

// Populate the select choices
const sectionSelect = document.querySelector('.js-schedule-section');
sectionSelect.innerHTML += sections.map(section => `<option>${section.name}</option>`).join('');

// Set random placeholder widths
Array.from(document.querySelectorAll('.schedule-placeholder')).forEach((placeholder) => {
    const percentage = 50 + Math.random() * 50;
    placeholder.style.setProperty('margin-right', `${100 - percentage}%`);
});

//FORMAT is important: "<day name> <day of month> <start hour>h[minutes]-<end hour>h[minutes]"
const COURSES = {
    "ceremony": {
        "name": "Cérémonie d'ouverture",
        "presentations": ["jeu 29 8h-9h"]
    },
    "snack":{
        "name": "Goûter",
        "breaks": ["ven 30 15h30-16h", "sam 31 15h30-16h", "lun 2 15h30-16h", "mar 3 15h30-16h", "mer 4 15h30-16h", "jeu 5 15h30-16h"],
    },
    "cms-ceremony": {
        "name": "Cérémonie d'ouverture",
        "presentations": ["jeu 29 9h-10h"]
    },
    "workshop_learn2study": {
        "name": "Workshop apprendre à étudier",
        "activities": ["jeu 29 9h-12h"],
    },
    "cms-workshop_calculs": {
        "name": "Workshop rappels calculs algébriques",
        "activities": ["jeu 29 10h-12h"],
    },
    "cms-raq": {
        "name": "R.A.Q",
        "raq": ["mer 4 13h30-15h30"],
    },
    "ws": {
        "name": "Workshops",
        "activities": ["jeu 29 13h30-19h",
            "ven 30 16h-19h",
            "sam 31 16h-19h",
            "lun 2 16h-19h",
            "mar 3 16h-19h",
            "mer 4 16h-19h",
            "jeu 5 16h-19h",
        ]
    },
    "an": {
        "name": "Analyse",
        "courses": ["sam 31 10h-12h", "mar 3 10h-12h"],
        "exercices": ["sam 31 13h30-15h30", "mar 3 13h30-15h30"]
    },
    "ana": {
        "name": "Analyse avancée",
        "courses": ["sam 31 10h-12h", "mar 3 10h-12h", "mer 4 10h-12h"],
        "exercices": ["sam 31 13h30-15h30", "mar 3 13h30-15h30", "mer 4 13h30-15h30"]
    },
    "al": {
        "name": "Algèbre linéaire",
        "courses": ["ven 30 10h-12h", "mer 4 10h-12h"],
        "exercices": ["ven 30 13h30-15h30", "mer 4 13h30-15h30"]
    },
    "ala": {
        "name": "Algèbre linéaire avancée",
        "courses": ["ven 30 10h-12h", "lun 2 10h-12h", "jeu 5 8h-10h"],
        "exercices": ["ven 30 13h30-15h30", "lun 2 13h30-15h30", "jeu 5 13h30-15h30"]
    },
    "el": {
        "name": "Électricité",
        "courses": ["lun 2 10h-12h", "jeu 5 8h-10h"],
        "exercices": ["lun 2 13h30-15h30", "jeu 5 13h30-15h30"]
    },
    "pm": {
        "name": "Physique mécanique",
        "courses": ["ven 30 8h-10h", "mar 3 8h-10h"],
        "exercices": ["lun 2 8h-10h", "mer 4 8h-10h"]
    },
    "pr": {
        "name": "Programmation",
        "courses": [],
        "exercices": ["sam 31 8h-10h", "jeu 5 10h-12h"]
    },
    "ai": {
        "name": "AICC",
        "courses": ["lun 2 10h-12h", "jeu 5 8h-10h"],
        "exercices": ["lun 2 13h30-15h30", "jeu 5 13h30-15h30"]
    },
    "ch": {
        "name": "Chimie",
        "courses": ["lun 2 10h-12h", "jeu 5 8h-10h"],
        "exercices": ["lun 2 13h30-15h30", "jeu 5 13h30-15h30"]
    },
    "cms-an": {
        "name": "Analyse (CMS)",
        "courses": ["sam 31 10h-12h", "lun 2 8h-10h", "mar 3 10h-12h"],
        "exercices": ["lun 2 13h30-15h30", "mar 3 13h30-15h30"]
    },
    "cms-al": {
        "name": "Algèbre (CMS)",
        "courses": ["ven 30 8h-10h", "sam 31 8h-10h"],
        "exercices": ["ven 30 13h30-15h30", "sam 31 13h30-15h30"]
    },
    "cms-ga": {
        "name": "Géométrie analytique (CMS)",
        "courses": ["lun 2 10h-12h"],
        "exercices": ["mar 3 8h-10h"]
    },
    "cms-pg": {
        "name": "Physique générale (CMS)",
        "courses": ["mer 4 8h-10h", "jeu 5 8h-10h"],
        "exercices": ["mer 4 10h-12h", "jeu 5 13h30-15h30"]
    },
    "cms-pr": {
        "name": "Programmation",
        "exercices": ["ven 30 10h-12h", "jeu 5 10h-12h"]
    }
}

const DAYS = ["jeu 29", "ven 30", "sam 31", "lun 2", "mar 3", "mer 4", "jeu 5"];
const TIMES = ["8h", "9h", "10h", "11h", "12h", "13h30", "14h30", "15h30", "16h", "19h"];
const ALL_TIMES = ["8h", "9h", "10h", "11h", "12h", "13h30", "14h30", "15h30", "16h", "19h"]
/**********************************************************************************************************************/

/* Interaction */
function findTimeSlot(hours, search_day, search_time) {
    for (let h in hours) {
        const hour = hours[h];
        const day = DAYS.indexOf(hour.split(" ")[0] + " " + hour.split(" ")[1]);
        if (day !== search_day) {
            continue;
        }
        const start = ALL_TIMES.indexOf(hour.split(" ")[2].split("-")[0]);
        const end = ALL_TIMES.indexOf(hour.split(" ")[2].split("-")[1]);
        if (search_time >= start && search_time < end) {
            return true;
        }
    }
    return false;
}

function findCourse(section, search_day, search_time) {
    const types = [
        { key: 'courses', type: 'c' },
        { key: 'exercices', type: 'e' },
        { key: 'presentations', type: 'p' },
        { key: 'activities', type: 'w' },
        { key: 'breaks', type: 'b' },
        { key: 'raq', type: 'r' }
    ];
    for (let c of section.courses) {
        const course = COURSES[c];

        for (let { key, type } of types) {
            if (findTimeSlot(course[key], search_day, search_time)) {
                return {
                    name: course.name,
                    code: c.split("-").reverse()[0],
                    type: type
                };
            }
        }
    }
    return undefined;
}

/**********************************************************************************************************************/
function computeCourseHtml(section, courseIndex) {
    const search_day = Math.floor(courseIndex / TIMES.length);
    let search_time = courseIndex % TIMES.length;

    let ret = findCourse(section, search_day, ALL_TIMES.indexOf(TIMES[search_time]));

    if (ret === undefined) {
        return `<div class="schedule-course" style="visibility: hidden" id="schedule-js-edit"></div>`;
    }
    return `<div class="schedule-course course-${ret.code}" id="schedule-js-edit">
        <h4 class="schedule-course-title">${ret.name}</h4>
        <div class="schedule-course-type">${typeNames[ret.type]}</div>
    </div>`;
};


const scheduleElement = document.querySelector('.js-schedule');
const scheduleMessageElement = document.querySelector('.js-schedule-message');

sectionSelect.addEventListener('change', () => {
    const newSection = sections[sectionSelect.selectedIndex - 1];

    // Unavailable message
    if (newSection.message) {
        scheduleMessageElement.innerText = newSection.message;
        scheduleElement.setAttribute('style', 'display: none');
        return;
    }

    scheduleMessageElement.innerText = '';
    scheduleElement.removeAttribute('style');

    // Update courses
    const coursesElements = Array.from(document.querySelectorAll('.schedule-course:not(.js-skip)'));
    let lastHTML = undefined;
    let lastElement = undefined;
    coursesElements.forEach((courseElement, courseIndex) => {
        let n = computeCourseHtml(newSection, courseIndex);
        if (n === lastHTML) {
            if (lastElement.style.gridRow !== "") {
                lastElement.style.gridRow = lastElement.style.gridRow.split(" ")[0] + " " + (lastElement.style.gridRow.split(" ")[1] - (-1));
            } else {
                lastElement.style.gridRow = "span 2";
            }
            courseElement.style.display = "none";
            return;
        }
        courseElement.outerHTML = n;
        lastHTML = n;
        lastElement = document.getElementById("schedule-js-edit");
        lastElement.removeAttribute("id");
    });
});


DAYS.forEach(value => {
    if (value.startsWith("lun")) {
        scheduleElement.innerHTML += `
            <h3 class="schedule-day">dim 1</h3>
            <div style="grid-row: span 10"></div>
        `;
    }
    scheduleElement.innerHTML += `
             <h3 class="schedule-day">${value}</h3>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>

             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>

             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
             <article class="schedule-course" style="visibility: hidden">
                 <div class="schedule-course-title">
                     <span class="schedule-placeholder"></span>
                     <span class="schedule-placeholder"></span>
                 </div>
                 <div class="schedule-course-type">
                     <span class="schedule-placeholder"></span>
                 </div>
             </article>
        `;
});
scheduleElement.innerHTML += `<div></div>`;
scheduleElement.classList.add("schedule");
