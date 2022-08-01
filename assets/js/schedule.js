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
    el: 'Électro&shy;technique',
    ch: 'Chimie',
};

const typeNames = {
    c: 'Cours',
    e: 'Exercices',
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
        name: 'Génie électronique et électronique',
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
        'PHc', 'PHe',
    ];
    
    const advancedSchedule = [
        'ANAc', 'ANAe',
        'ALAc', 'PHc', 'ALAe',
        
        'PHe', 'ALAc', 'ALAe',
        'ALAc', 'ALAe', 'ANAc',
        'ANAe', 'ALAc', 'ALAe',
        'PHc', 'PHe',
    ];

    const schedule = section.advanced ? advancedSchedule : standardSchedule;
    const courseStr = schedule[courseIndex];

    let courseCode = courseStr.substring(0, courseStr.length - 1).toLowerCase();
    if (courseCode === 'spec') {
        courseCode = section.specificCourse;
    }
    const typeCode = courseStr.substring(courseStr.length - 1, courseStr.length);

    return `<div class="schedule-course">
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

