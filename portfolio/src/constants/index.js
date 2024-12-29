import { flipkart,gyanstore } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    tailwindcss,
   
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "Support Engineer",
        company_name: "Flipkart",
        icon: flipkart,
        iconBg: "#accbe1",
        date: "November 2023 - July 2024",
        points: [
            "Provided technical support for web-based applications using HTML, CSS, and Bootstrap, ensuring responsive design, high performance, and resolving front-end or system-related issues.",
            "Supported system operations on Unix and Windows 10 environments, performing troubleshooting, system diagnostics, and issue resolution.",
            "Collaborated with development and design teams to troubleshoot and resolve UI/UX issues using Figma, ensuring a smooth user experience across multiple devices and platforms.",
            "Utilized Git and GitHub for version control and bug tracking, managing repositories and coordinating with the team to deploy fixes.",
            "Worked within VS Code to efficiently troubleshoot, debug, and improve code for internal projects.",
            "Participated in Agile sprints, ensuring timely support and resolutions to technical challenges on both Unix and Windows systems.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Gyanstore",
        icon: gyanstore,
        iconBg: "#fbc3bc",
        date: "September 2023 - November 2023",
        points: [
            "Developed and maintained websites using HTML, CSS, and WordPress, ensuring responsive and visually appealing designs.",
            "Collaborated with the design team to implement UI/UX enhancements, resulting in a 20% increase in user engagement.",
            "Customized WordPress themes and plugins to meet client requirements, optimizing performance and functionality.",
            "Conducted thorough testing to ensure cross-browser compatibility and responsiveness across various devices.",
            "Developed front-end user interfaces for several complex web applications with HTML, CSS.",
        ],
    },
   
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Vishnnsingh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vishnu-singh-790b621bb/',
    }
];

export const projects = [
    {
        // iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'Developed a comprehensive Expense Tracker application aimed at simplifying personal finance management. The project enables users to track, categorize, and analyze their spending patterns, set budgets, and receive AI-driven financial advice. Key features include visual data representation through Chart.js (pie charts, bar graphs, and line charts), tax calculation tools, and a currency converter. The platform offers detailed expense notes for enhanced tracking and planning.\n\n Technologies Used:  HTML, CSS, JavaScript, Chart.js, AI APIs.\n\nFuture Enhancements: Plans to include automated transaction tracking, mobile app development, multi-currency support, and advanced security features.',
        link: 'https://vishnnsingh.github.io/Expense-Tracker/index.html',
    },
    {
        // iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Book App',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://vishnnsingh.github.io/Fs-23_Module_4/weekly_test_5/index.html',
    },
    {
        // iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Swiggy Clone',
        description: 'A responsive web design replicating Swiggy\'s interface with a fixed navigation bar, custom hover effects, scalable images, and a Flexbox-based layout. Features include smooth transitions, box shadows, and precise alignment for a modern, user-friendly experience. Built using HTML and CSS.',
        link: 'https://vishnnsingh.github.io/Swiggy_clone/',
    },
    
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];