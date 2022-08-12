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

    ws: 'Ateliers découverte',
};

const typeNames = {
    c: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></svg> Cours',
    e: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></svg> Exercices',
    w: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></svg> Activités',
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
        'ANc', 'ANe',
        'SPECc', 'PHc', 'SPECe',

        'PHe', 'ALc', 'ALe',
        'ANc', 'ANe', 'SPECc',
        'SPECe', 'ALc', 'ALe',
        'PHc', 'PHe', 'WSw',
    ];

    const advancedSchedule = [
        'ANAc', 'ALAc',
        'ALAe', 'PHc', 'ANAe',

        'PHe', 'ANAc', 'ALAc',
        'ALAe', 'ANAe', 'ANAc',
        'ANAe', 'ALAc', 'ALAe',
        'PHc', 'PHe', 'WSw',
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
