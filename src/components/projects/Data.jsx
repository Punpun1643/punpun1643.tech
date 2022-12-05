import PeerPrep from '../../assets/peerprep.jpeg';
import RepoSense from '../../assets/reposense.jpeg';
import ReHash from '../../assets/rehash.jpeg';
import FintechMonth from '../../assets/fintechmonth.jpeg';
import KOLClassification from '../../assets/kolclassification.jpeg';

export const Data = [
    {
        id: 1,
        image: PeerPrep,
        title: 'PeerPrep',
        subtitle: 'A collaborative whiteboard-style technical interview preparation platform built based on microservices architecture',
        category: 'Dev',
        source: 'https://github.com/Punpun1643/PeerPrep',
        tech: [
            {
                stack: 'React',
            },
            {
                stack: 'Express.js'
            },
            {
                stack: 'MongoDB'
            },
            {
                stack: 'SQLite'
            },
            {
                stack: 'Docker'
            },
            {
                stack: 'Material UI'
            },
            {
                stack: 'Cypress.io'
            },
            {
                stack: 'Socket.io'
            },
            {
                stack: 'JWT'
            },
        ]
    },
    {
        id: 2,
        image: RepoSense,
        title: 'RepoSense (Open Source)',
        subtitle: 'A contribution analysis tool for Git repositories which can generate interactive visualizations of programmer activities',
        category: 'Dev',
        source: 'https://github.com/Punpun1643/RepoSense',
        tech: [
            {
                stack: 'Vue.js',
            },
            {
                stack: 'Pug',
            },
            {
                stack: 'SCSS',
            },
            {
                stack: 'Cypress.io',
            }
        ]
    },
    {
        id: 3,
        image: ReHash,
        title: 'Project ReHash',
        subtitle: 'A web application for items swapping. The project achieved the highest attainable level of achievemnet, awarded to the top 10% of the cohort',
        category: 'Dev',
        source: 'https://github.com/Punpun1643/Project-ReHash',
        tech: [
            {
                stack: 'React',
            },
            {
                stack: 'Bootstrap'
            },
            {
                stack: 'Express.js',
            },
            {
                stack: 'MongoDB',
            },
            {
                stack: 'Socket.io',
            },
            {
                stack: 'Heroku',
            },
        ]
    },
    {
        id: 4,
        image: FintechMonth,
        title: 'NUS Fintech Month 2022',
        subtitle: 'UI/UX of Fintech Month website for hackathon and workshop registrations which is being used worldwide',
        category: 'Design',
        source: 'https://nusfintechmonth.comp.nus.edu.sg/',
        tech: [
            {
                stack: 'Figma',
            },
        ]
    },
    {
        id: 5,
        image: KOLClassification,
        title: 'KOL social media posts category classification',
        subtitle: 'Machine learning models to automate KOL social media post captions and images into e-commerce categories',
        category: 'ML',
        source: 'https://github.com/404',
        tech: [
            {
                stack: 'Tensorflow',
            },
            {
                stack: 'Pandas',
            },
            {
                stack: 'KeyBERT'
            },
            {
                stack: 'Transfer Learning'
            },
            {
                stack: 'CV'
            },
            {
                stack: 'NLP'
            }
        ]
    },
];

export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Dev',
    },
    {
        name: 'Design',
    },
    {
        name: 'ML',
    }
];