/*
 * Manages the schedule component
 */

/**********************************************************************************************************************/
/* Source data */
/**********************************************************************************************************************/

const coursesNames = {
    an: 'Analyse',
    al: 'Algèbre linéaire',
    ana: 'Analyse avancée',
    ala: 'Algèbre linéaire avancée',
    ph: 'Physique',

    ai: 'AICC',
    el: 'Électricité',
    ch: 'Chimie',

    we: 'Cérémonie d\'ouverture',
    ws: 'Workshops',
};

const typeNames = {
    c: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></svg> Cours',
    e: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></svg> Exercices',
    p: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg> Présentation',
    w: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></svg> Activités'
};

const sections = [
    {
        name: 'Architecture',
        message: 'Désolé, Students 4 Students ne s’adresse pas aux étudiant·e·s en architecture.',
    },
    {
        name: 'Chimie et génie chimique',
        specificCourse: 'ch',
    },
    {
        name: 'CMS',
        message: 'Désolé, Students 4 Students ne s’adresse pas aux étudiant·e·s du CMS.',
    },
    {
        name: 'Génie civil',
        specificCourse: 'ch',
    },
    {
        name: 'Génie mécanique',
        specificCourse: 'el',
    },
    {
        name: 'Génie électrique et électronique',
        specificCourse: 'el',
    },
    {
        name: 'Informatique',
        specificCourse: 'ai',
    },
    {
        name: 'Matériaux',
        specificCourse: 'ch',
    },
    {
        name: 'Mathématiques',
        advanced: true,
    },
    {
        name: 'Microtechnique',
        specificCourse: 'el',
    },
    {
        name: 'Physique',
        advanced: true,
    },
    {
        name: 'Sciences du vivant',
        specificCourse: 'ch',
    },
    {
        name: 'Sciences et ingénierie de l’environnement',
        specificCourse: 'ch',
    },
    {
        name: 'Systèmes de communication',
        specificCourse: 'ai',
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

/**********************************************************************************************************************/
/* Interaction */
/**********************************************************************************************************************/
const computeCourseHtml = (section, courseIndex) => {
    const standardSchedule = [
        'WEp', 'ANc', 'ANe', 'WSw',
        'PHc', 'ALc', 'ALe', 'WSw',

        'PHe', 'SPECc', 'SPECe', 'WSw',
        'ANc', 'SPECc', 'ANe', 'WSw',
        'SPECe', 'ALc', 'ALe', 'WSw',
        'PHc', 'PHe', 'WSw'
    ];

    const advancedSchedule = [
        'WEp', 'ANAc', 'ANAe', 'WSw',
        'PHc', 'ALAc', 'ALAe', 'WSw',

        'PHe', 'ALAc', 'ALAe', 'WSw',
        'ANAc', 'ALAc', 'ANAe', 'WSw',
        'ANAc', 'ANAe', 'ALAe', 'WSw',
        'PHc', 'PHe', 'WSw'
    ];

    const schedule = section.advanced ? advancedSchedule : standardSchedule;
    const courseStr = schedule[courseIndex];

    let courseCode = courseStr.substring(0, courseStr.length - 1).toLowerCase();
    if (courseCode === 'spec') {
        courseCode = section.specificCourse;
    }
    const typeCode = courseStr.substring(courseStr.length - 1, courseStr.length);

    return `<div class="schedule-course course-${courseCode}">
        <h4 class="schedule-course-title">${coursesNames[courseCode]}</h4>
        <div class="schedule-course-type">${typeNames[typeCode]}</div>
    </div>`;
};

sectionSelect.addEventListener('change', () => {
    const scheduleMessageElement = document.querySelector('.js-schedule-message');
    const scheduleElement = document.querySelector('.js-schedule');
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
    coursesElements.forEach((courseElement, courseIndex) => {
        courseElement.outerHTML = computeCourseHtml(newSection, courseIndex);
    });
});
