/*
 * Gestion de l'affichage des workshops (ateliers découvertes)
 */

/**********************************************************************************************************************/
/* Données source */
/**********************************************************************************************************************/

// Par défaut, tous les workshops ont le même horaire
const defaultSchedule = "16:00-18:00";

// Contient la liste des workshops ayant lieu
const workshops = {
    "Vendredi 8 septembre": [
        {
            "title": "Développement de jeu vidéo",
            "association": "gamestar",
            "description": "Tu as toujours voulu créer un jeu vidéo mais tu ne sais pas par où commencer ? Viens apprendre les bases en un après-midi avec Game* ! Lors de ce premier workshop, nous aborderons les principes de Game Design entre théorie et pratique.",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Ordinateur personnel, papier et stylo nécessaires"
                },
                {
                    "icon": "info",
                    "title": "Nos deux workshops sont différents et indépendants l'un de l'autre."
                }
            ],
            "room": "CM 1 221"
        },
        {
            "title": "Jeu de balle",
            "association": "pese",
            "description": "Envie de te défouler en faisant un peu de sport ? Rejoins le PESE et amuse-toi en visant des objets avec des balles !",
            "room": "CM 1 100"
        }
    ],
    "Samedi 9 septembre": [
        {
            "title": "Jeux vidéos",
            "association": "ebou",
            "description": "Retrouvez nous samedi et mardi à partir de 16h et jeudi à partir de 14h en CM 1221 où nous proposons des jeux vidéos variés avec du freeplay et surtout du fun ! Venez passer un bon moment avec vos potes !",
            "room": "CM 1 221"
        },
        {
            "title": "Introduction à la programmation",
            "association": "clic",
            "description": "Bonsoir ! Tu veux voir à quoi ça ressemble la programmation ? Et bien la CLIC, l'association des étudiants en IC, est là pour te montrer la programmation sous un angle original : la génération procédurale. Nous allons voir ce que sont des L-Systems tout en apprenant à faire du JavaScript. T’as rien compris ? C’est normal, on est là pour t’expliquer :) \n" +
                "\n" +
                "Lors de la première heure, nous verrons les bases de la programmation. Afin d'illustrer les concepts, nous vous montrerons aussi ce que sont des L-Systems. \n" +
                "Durant la deuxième heure, nous vous aiderons à prendre en main un langage de programmation, le JavaScript, afin de mettre en pratique ce que vous aurez vu durant la première heure. La troisième heure sera quand à elle consacrée à des approfondissements sur les L-Systems (et donc plus de code :) ).",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Pas besoin de connaissances en informatique ou d'une installation quelconque, mais ramène ton ordinateur personnel."
                }
            ],
            "room": "CM 1 100",
            "schedule": "16:00-19:00"
        },
        {
            "title": "Fresque du climat",
            "association": "zeg",
            "description": "Une sensibilisation ludique et interactive aux enjeux climatiques à travers un atelier collaboratif de trois heures. Plus d'infos sur le site de <a href=\"https://fresqueduclimat.org/\" class=\"lead-link\">la Fresque</a>.",
            "bullets": [
                {
                    "icon": "inscription",
                    "title": "Pour nous donner une idée du nombre de participant·e·s, inscris-toi <a class=\"lead-link\" href=\"https://go.epfl.ch/inscriptionFresque\">ici</a>"
                }
            ],
            "room": "CM 1 104",
            "schedule": "16:00-19:00"
        }
    ],
    "Lundi 11 septembre": [
        {
            "title": "Introduction à Shell et à Git",
            "association": "gnu",
            "description": "Découvre les commandes de base du shell Unix pour pouvoir utiliser efficacement tout programme sur tout type d'ordinateur, puis découvre Git, le logiciel de collaboration et de versionnage de code le plus populaire. Ce logiciel libre et décentralisé te permet de gérer efficacement tout projet individuel ou collaboratif.",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Ordinateur personnel nécessaire"
                }
            ],
            "room": "CM 1 100"
        },
        {
            "title": "Film d'animation japonais",
            "association": "polyjapan",
            "description": "Viens baigner dans un univers asiatique en regardant un film d’animation japonaise ! \n" +
                "Trois lycéens, qui se sont rencontré sur internet (Tomoya, Aoi et Ryo), se rendent sur un aéroport abandonné où un fantôme est réputé apparaître selon certaines conditions. Conformément à cette légende urbaine, Ayane apparaît: « Je ne vois pas tout le monde. Seulement ceux qui essaient de caresser la mort… ». Les trois amis rentrent chez eux, mais Tomoya décide de retourner auprès d’Ayane. Débute alors une dangereuse relation qu’il tente de dissimuler à ses amis.",
            "bullets": [
                {
                    "icon": "info",
                    "title": 'Le film s\'appelle <a class="lead-link" href="https://en.wikipedia.org/wiki/Summer_Ghost">Summer Ghost</a>.'
                }
            ],
            "room": "CE 1 1",
            "schedule": "16:00-17:15"
        },
        {
            "title": "Jeu d’échec et Puzzles",
            "association": "dameblanche",
            "description": "Tu es passionné·e d’échecs et tu veux jouer des parties contre des nouveaux étudiant·e·s comme toi dans la bonne humeur ? \n" +
                "Tu veux simplement résoudre des puzzles ou apprendre comment le faire ? Viens rencontrer La Dame Blanche qui sera ravie de te rencontrer autour du jeu d’échecs et pour contribuer à la résolution de leurs puzzles avec tes potes !",
            "room": "CM 1 104"
        }
    ],
    "Mardi 12 septembre": [
        {
            "title": "Développement de jeu vidéo",
            "association": "gamestar",
            "description": "Tu as toujours voulu créer un jeu vidéo mais tu ne sais pas par où commencer ? Viens apprendre les bases en un après-midi avec Game* ! Lors de ce second workshop, nous aborderons les principes de Game Art entre théorie et pratique.",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Ordinateur personnel, papier et stylo nécessaires"
                },
                {
                    "icon": "info",
                    "title": "Nos deux workshops sont différents et indépendants l'un de l'autre."
                }
            ],
            "room": "CM 1 221"
        },
        {
            "title": "Jeux vidéos",
            "association": "ebou",
            "description": "Retrouvez nous samedi et mardi à partir de 16h et jeudi à partir de 14h en CM 1 120 où nous proposons des jeux vidéos variés avec du freeplay et surtout du fun ! Venez passer un bon moment avec vos potes !",
            "room": "CM 1 120"
        },
        {
            "title": "À la découverte du Rolex",
            "association": "biblio",
            "description": "Ce bâtiment fait rêver plus d’un, alors rejoins ce workshop pour une course d’orientation dans tout le rolex ainsi que pour acquérir des méthodes pour apprendre à étudier.",
            "bullets": [
                {
                    "icon": "inscription",
                    "title": "Les places sont limitées à 300 personnes, nous te prions de t'inscrire <a class=\"lead-link\" href=\"https://go.epfl.ch/s4s-workshop-rolex\">ici.</a>"
                }
            ],
            "room": "Patio 5",
            "schedule": "15:45-17:30"
        }
    ],
    "Mercredi 13 septembre": [
        {
            "title": "Initiation à la compétition mathématique",
            "association": "polympiads",
            "description": "Tu aimes les mathématiques et tu rêves de t’affirmer dans de grandes compétitions ? Polympiads est là pour t’initier dès la première semaine à des défis et problèmes de compétitions mathématiques !",
            "bullets": [
                {
                    "icon": "info",
                    "title": "Trouver l'endroit peut être compliqué, en cas de problème tu peux contacter <a class=\"lead-link\" href=\"https://t.me/ismail_bouhaj\">@ismail_bouhaj</a> sur Telegram."
                }
            ],
            "room": "Bernoulli Center"
        },
        {
            "title": "Initiation au LaTex",
            "association": "gnu",
            "description": "Gnugen revient pour t’initier à l’apprentissage du LaTeX, un outil qui te sera sans doute très puissant et important pour tes études d’ingénierie !",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Ordinateur personnel nécessaire."
                },
                {
                    "icon": "info",
                    "title": "L'atelier se fera en français/anglais."
                }
            ],
            "room": "CM 1 221"
        },
        {
            "title": "Jeux de société",
            "association": "ludopoly",
            "description": "Tu veux passer un bon moment en jouant à des jeux de société avec des étudiant·e·s comme toi ? Ne cherche plus, viens t’amuser avec LudoPoly qui mettra à votre disposition plusieurs jeux et qui sera ravie de vous donner des stickers !",
            "room": "CM 1 120"
        }
    ],
    "Jeudi 14 septembre": [
        {
            "title": "Visite d'un réacteur expérimental à Fusion : Le Tokamak",
            "association": "swissplasmacenter",
            "description": "Prêts à plonger dans le monde chaud (très chaud) de la fusion nucléaire ? 🌞🔥 Rejoignez-nous pour une aventure atomique au cœur même de l'EPFL, où nous explorerons le mystérieux et magnétique tokamak ! 🌪️💥 Attachez vos ceintures, car nous allons dévoiler les secrets de la fusion nucléaire.💡🧪 Montez à bord pour une excursion passionnante dans l'univers des plasmas chauffés, des champs magnétiques puissants et des chercheurs en folie, qui espèrent un jour révolutionner l'énergie. Laissez vos cerveaux curieux se déchaîner et préparez-vous à être éblouis, car la fusion n'a jamais été aussi cool (ou chaude) ! 🔬🚀",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Ce workshop n'a plus de places disponibles. Si tu t'étais inscrit·e, check ta boîte mail pour voir si une confirmation d'inscription t'es parvenue."
                },
                {
                    "icon": "info",
                    "title": "Les inscrit·e·s seront divisé·e·s en deux groupes, chacun effectuant une visite de 1h30. La visite a lieu en anglais."
                }
            ],
            "room": "&Agrave; venir",
            "schedule": "14:00-17:00"
        },
        {
            "title": "Jeux vidéos",
            "association": "ebou",
            "description": "Retrouvez nous samedi et mardi à partir de 16h et jeudi à partir de 14h en CM 1 120 où nous proposons des jeux vidéos variés avec du freeplay et surtout du fun ! Venez passer un bon moment avec vos potes !",
            "room": "CM 1 120",
            "schedule": "14:00-18:00"
        },
        {
            "title": "Jeux de société",
            "association": "ludopoly",
            "description": "Tu veux passer un bon moment en jouant à des jeux de société avec des étudiant·e·s comme toi ? Ne cherche plus, viens t’amuser avec LudoPoly qui mettra à votre disposition plusieurs jeux et qui sera ravie de vous donner des stickers !",
            "room": "CM 1 104",
            "schedule": "14:00-18:00"
        }
    ]
}

// La liste des associations proposant des workshops avec certaines informations
// redondantes qui peuvent alors être omises de la liste des workshops
const associations = {
    "gamestar": {
        "title": "Game*",
        "url": "https://clic.epfl.ch/commissions/game-star",
        "image": "workshop-gamestar.jpg"
    },
    "ebou": {
        "title": "E-bou",
        "url": "https://e-bou.pese.ch",
        "image": "workshop-ebou.jpg"
    },
    "clic": {
        "title": "la CLIC",
        "url": "https://clic.epfl.ch/",
        "image": "workshop-clic.jpg"
    },
    "gnu": {
        "title": "GNU Generation",
        "url": "https://gnugeneration.epfl.ch/fr/",
        "image": "workshop-gnu.jpg"
    },
    "polyjapan": {
        "title": "PolyJapan",
        "url": "https://www.instagram.com/polyjapan/",
        "image": "workshop-polyjapan.jpg"
    },
    "dameblanche": {
        "title": "La Dame Blanche",
        "url": "https://instagram.com/chess.epfl?igshid=NjIwNzIyMDk2Mg==",
        "image": "workshop-dameblanche.jpg"
    },
    "polympiads": {
        "title": "Polympiads",
        "url": "https://www.instagram.com/polympiads.epfl/",
        "image": "workshop-polympiads.jpg"
    },
    "ludopoly": {
        "title": "LudoPoly",
        "url": "https://www.instagram.com/ludopoly_epfl/",
        "image": "workshop-ludopoly.svg"
    },
    "s4s": {
        "title": "S4S",
        "url": "https://s4s.fun",
        "image": "assets/seo/opengraph.png"
    },
    "swissplasmacenter": {
        "title": "Swiss Plasma Center",
        "url": "https://www.epfl.ch/research/domains/swiss-plasma-center/",
        "image": "workshop-tokamak.jpg"
    },
    "pese": {
        "title": "PESE",
        "url": "https://pese.ch/",
        "image": "workshop-pese.jpg"
    },
    "biblio": {
        "title": "Bibliothèque EPFL",
        "url": "https://www.epfl.ch/campus/library/fr/",
        "image": "workshop-biblio.jpg"
    },
    "zeg": {
        "title": "Zero Emission Group",
        "url": "https://www.instagram.com/zeroemissiongroup/",
        "image": "workshop-zeg.jpg"
    }
}

const roomUrls = {
    "CM 1 221": "https://plan.epfl.ch/?room==CM%201%20221",
    "CM 1 120": "https://plan.epfl.ch/?room==CM%201%20120",
    "CM 1 100": "https://plan.epfl.ch/?room==CM%201%20100",
    "CM 1 104": "https://plan.epfl.ch/?room==CM%201%20104",
    "CE 1 1": "https://plan.epfl.ch/?room==CE%201%201",
    "RLC C1 820": "https://plan.epfl.ch/?room==RLC%20C1%20820",
    "Patio 5": "https://plan.epfl.ch/?dim_floor=1&lang=en&dim_lang=en&tree_groups=centres_nevralgiques%2Cmobilite_acces_grp%2Censeignement%2Ccommerces_et_services&baselayer_ref=grp_backgrounds&tree_group_layers_centres_nevralgiques=&tree_group_layers_mobilite_acces_grp=&tree_group_layers_enseignement=&tree_group_layers_commerces_et_services=&map_x=2533200&map_y=1152277&map_zoom=13",
    "Bernoulli Center": "https://www.google.com/maps/place/EPFL+Bernoulli+center/@46.5198032,6.5716923,15z/data=!4m2!3m1!1s0x0:0x3a4de4ac4fbd08c1?sa=X&ved=2ahUKEwiBhIO8gqv6AhXTi8MKHQD1AJIQ_BJ6BAhTEAU",
    "&Agrave; venir": ""
}

const bulletIcons = {
    "warning": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>`,
    "info": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>`,
    "inscription": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>`
}

/**********************************************************************************************************************/
/* Affichage des workshops */
/**********************************************************************************************************************/
function computeWorkshopHtml(workshop) {
    let association = associations[workshop["association"]];
    let imageName = workshop["image"] ?? association["image"];
    let imageSrc = imageName.includes("/") ? imageName : "assets/illustrations/" + imageName;
    let title = workshop["title"];
    let associationUrl = workshop["url"] ?? association["url"];
    let associationTitle = association["title"];
    let description = workshop["description"].replaceAll("\n", "<br />");
    let room = workshop["room"];
    let roomUrl = roomUrls[room];
    let schedule = workshop["schedule"] ?? defaultSchedule;

    let points = "";
    if (workshop["bullets"]) {
        for (const point of workshop["bullets"]) {
            points += `<div class="workshop-bullet">
                       ` + bulletIcons[point.icon] + `

                       ` + point.title + `
                   </div>
                    `;
        }
    }

    return `<article class="workshop">
         <img class="workshop-image" src="`+imageSrc+`" alt="" />
         <h3>`+title+`</h3>
         <p class="workshop-association">
             par
             <a href="`+associationUrl+`" class="lead-link">`+associationTitle+`</a>
         </p>

         <p class="workshop-description">
             `+description+`
         </p>

         <div class="workshop-bullets">
             `+points+`
            <div class="workshop-bullet">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <a` + ( roomUrl === "" ? `` : ` href="`+roomUrl+`"`) + ` class="lead-link">`+room+`</a>
            </div>
            <div class="workshop-bullet">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                   `+schedule+`
            </div>
        </div>
    </article>`
}
function computeDayHtml(dayTitle) {
    let day = workshops[dayTitle];
    let workshopsHtml = "";
    for (const workshop of day) {
        workshopsHtml += computeWorkshopHtml(workshop);
    }
    return `<details class="workshops-day">
                <summary>
                    `+dayTitle+`
                </summary>
                <div class="scroll-x-wrapper">
                    <div class="workshops">
                        `+workshopsHtml+`

                        <div class="workshops-right-padding"></div>
                    </div>
                </div>
            </details>`;
}
function computeWorkshopsContainerInnerHtml() {
    let result = "";
    for (const key of Object.keys(workshops)) {
        result += computeDayHtml(key);
    }
    return result;
}

document.getElementById("workshops-container").innerHTML = computeWorkshopsContainerInnerHtml();
