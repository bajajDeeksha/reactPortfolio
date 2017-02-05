/*!
 * Array of Experience Data
*/

import port1Img from '../img/portfolio/port1.png';
import port2Img from '../img/portfolio/port2.png';
import port3Img from '../img/portfolio/port3.png';
import port4Img from '../img/portfolio/port4.png';
import port5Img from '../img/portfolio/port5.png';
import port6Img from '../img/portfolio/port6.png';
import port7Img from '../img/portfolio/port7.png';
import port8Img from '../img/portfolio/port8.png';
import port9Img from '../img/portfolio/port9.png';


const ExperienceArr = [
    {
        name: 'Wedding Website for Nish$geet',
        tags: 'JavaScript, php, HTML5, CSS3, Bootstrap, photoshop, UI Design',
        modalLink: 'portfolioModal1',
        img: port1Img,
        modalObj : {
            modalName : "Wedding Website",
            for : "A wedding website for Nishyanth and Geetika.",
            blocks : [
                {
                    duration : "October 2016",
                    mainResp : "Design and Develope a wedding Website that contains information about the bride and the groom, cermonies, RSVP form and gallery with the couple's happy pictures.",
                    tech : "javascript, php, HTML5, CSS3, Bootstrap, UI Design, photoshop",
                    linkText : "Click here to view the website",
                    link : "http://nishandgeet.com/"
                }
            ]
        }
    },
    {
        name: 'Pactera Technology Japan',
        tags: 'Javascript, testing, drupal, Innoveo, AEM, php, HTML5, CSS3',
        modalLink: 'portfolioModal2',
        img: port2Img,
        modalObj : {
            modalName : "Pactera Technology Japan",
            for: "I finished these projects as a part of Pactera Technology Japan.",
            blocks : [
                {
                    taskName : "Demo Website Creation",
                    duration : "October 2016 - December 2016",
                    mainResp : "Training in CakePHP. Creating a demo Website for client using CakePHP",
                    tech : "CakePHP, docker, HTML, CSS, jQuery"
                },
                {
                    taskName : "Adobe Experience Manager",
                    duration : "October 2016 ( 3 Weeks )",
                    mainResp : "Training in Adobe Experience Manager. Creating templates and components using AEM.",
                    tech : "AEM, Eclipse"
                },
                {
                    taskName: "SBI BITS, JAPAN",
                    info: "I finished following projects as a part of SBI BITS team while working for Pactera.",
                    duration : "July 2016 - September 2016",
                    mainResp : "To automation test the stock system under construction using LetIT. LetIT was a system created using selenium to automate the testing by non-technical staff",
                    tech : "Javascript, selenium, Excel, Java(basic), System Architechture."
                },
                {
                    taskName: "Innoveo - Drupal",
                    duration : "May 2016 - June 2016",
                    mainResp : "To created a Innoveo System for Insurance companies based in Japan. Innoveo Skye is a web-based insurance innovation solution with intuitive customization options that function on any platform, offering unprecedented levels of user-friendliness, scalability and cost-effectiveness. Benefit from Swiss efficiency and state-of-the-art technology, and get our unique single integrated sales and distribution software working for you.",
                    tech : "Drupal, Innoveo"
                }
            ]
        }
    },
    {
        name: 'Pelicamera',
        tags: 'Javascript, jQuery, php, HTML5, CSS3, Bootstrap, photoshop, UI Design',
        modalLink: 'portfolioModal3',
        img: port3Img,
        modalObj : {
            modalName : "Pelicamera Photography",
            for : "A Photographers Portfolio Website for Joji.",
            blocks : [
                {
                    duration : "June 2016",
                    mainResp : "To design and develope a photographers' portfolio website thats contains details about the photographer, galleries, testimonials from the clients, different packages details, and contact/booking forms for the customers.",
                    tech : "Javascript, jquery, php, HTML5, CSS3, Bootstrap, UI Design",
                    linkText : "Click here to view the website",
                    link : "http://pelicamera.com/"
                }
            ]
        }
    },
    {
        name: 'SkillHouse, Client: Daijob.com',
        tags: 'jQuery, HTML5, CSS3, MVC framework, Bootstrap',
        modalLink: 'portfolioModal4',
        img: port4Img,
        modalObj : {
            modalName : "SkillHouse, Client: Daijob.com",
            for : "I finished following projects as a part of Daijob.", 
            blocks : [
                {
                    duration : "December 2015 - April 2016",
                    mainResp : "A project based position of a Front End Developer to devlope responsive webpages according to the .psd files for the given website.",
                    tech : "HTML5, CSS3, Bootstrap, jQuery",
                    linkText : "Click here to view the website",
                    link : "https://workingabroad.daijob.com/en/"
                }
            ]
        }
    },
    {
        name: 'PasonaTech, Client:tenso.com',
        tags: 'php, HTML5, CSS3, MVC framework, Bootstrap, jQuery, Javascript, smarty',
        modalLink: 'portfolioModal5',
        img: port5Img,
        modalObj : {
            modalName : "PasonaTech, Client:tenso.com",
            for: "I finished these projects as a part of tenso.com Team while working for PasonaTech.",
            blocks : [
                {
                    taskName: "tenso.com : Coupon Page",
                    duration : "September 2015 - November 2015",
                    mainResp : "To design and develop a responsive module which provides tenso-users with all the coupon information that are available to them. The page displays Inactive, Available, Unavailable and Expired coupons in two different tables with their respective information. This page is linked to the tenso website through its main page.",
                    tech : "php, HTML5, CSS3, Model-view-Controller, Bootstrap, Git (version-control-system)"
                },
                {
                    taskName: "tenso.com : Creating Responsive pages",
                    duration : "May 2015 - September 2015",
                    mainResp : " To make already existing pages Responsive and compatible for different size of screens and different languages. ",
                    tech : "HTML5, CSS3, Bootstrap, Grid System, Git (version-control-system)"
                }
            ]
        }
    },
    {
        name: 'ChatWork-Bitbucket Integration',
        tags: 'Shell Scripting, Git (version control system), bitBucket',
        modalLink: 'portfolioModal6',
        img: port6Img,
        modalObj : {
            modalName : "ChatWork-Bitbucket Integration",
            for: "I finished this projects as a part of tenso.com Team while working for PasonaTech.",
            blocks : [
                {
                    duration : "February 2015 - May 2015",
                    mainResp : "1. Creating a integration of these 2 applications. This application should notify all the team members whenever there is a chnage in the repository. The Application provides information such as branch name, date and time, commit message.2. It also notifies specific user, if there is a conflict that has occurred.3. Creating a shell Script which runs and installs this application within desired Git repository.",
                    tech : "shell Scripting, Git (version-control-system), ChatWork API"
                }
            ]
        }
    },
    {
        name: 'Website  Module  development  for  “Online  Application for Need Base Training',
        tags: 'HTML4, Microsoft Access, ColdFusion',
        modalLink: 'portfolioModal7',
        img: port7Img,
        modalObj : {
            modalName : "NPCIL - Kaiga",
            for : "I finished this projects as a part of an Internship Program at NPCIL.",
            blocks : [
                {
                    info: "NPCIL, Nuclear Power Corporation of India Limited is a public sector organization register under Government of India. NPCIL is responsible for design, construction and operation of Nuclear Reactors.I created a Module for their VPN webiste called Online Need Base Training.",
                    taskName: "Online Application for Need Base Training",
                    duration : "June 2012 - July 2012",
                    mainResp : "1. To create a module using which users can fill out the training form online, which would be then notified automatically to the concerned authorities for approval. This would then notify the Training Department Head to conduct the training.\n 2. The module allows user to check if their application is pending or approved.3. The module allows user to check Training-programs conducted between 2 given dates.",
                    tech : "ColdFusion, HTML, Microsoft Access"
                }
            ]
        }
    },
    {
        name: 'Cross-Lingual Search Engine',
        tags: 'Python, HTML5, CSS3, php, javascript',
        modalLink: 'portfolioModal8',
        img: port8Img,
        modalObj : {
            modalName : "Cross-Lingual Search Engine",
            for: "I finished this projects as a part of my final year project at KLS GIT.",
            blocks : [
                {
                    info : "This project provides cross-lingual information retrieval feature to the user. This feature is provided to the user through an extension. The extension provides an interface where the user can enter and retrieve documents in 4 Indian languages. The application can also provide the user with summary of each result in a pop-up box on mouse-hover.",            
                    duration : "February 2014 - June 2014",
                    mainResp : "1. To design an extension to provide CLIR mechanism.2. The User can input query in any one of the four languages, and can obtain output in one or more languages.3. Summarizes the information for each of the resulted links in pop-up box. .",
                    tech : "Python, php, HTML5, jQuery, Google APIs",
                    linkText : "Click here to view the project Report",
                    link : "./pdfile/CLIR_Report.pdf"
                }
            ]
        }
    },
    {
        name: 'Survey  on  Cloud  Computing in Agricultural Development',
        tags: 'Cloud-computing, Documentation',
        modalLink: 'portfolioModal9',
        img: port9Img,
        modalObj : {
            modalName : "Survey  on  Cloud  Computing in Agricultural Development",
            for: "I finished this projects as a part of my final year project at KLS GIT.",
            blocks : [
                {
                    duration : "February 2014 - June 2014",
                    mainResp : "Performed a survey on cloud computing in agricultural development and studied about agriculture -cloud which is based on MAD cloud architecture.",
                    tech : "Cloud-computing, Documentation",
                    linkText : "Click here to view the project Report",
                    link : "./pdfile/AgriCloud_Report.pdf"
                }
            ]
        }
    }
];

export default ExperienceArr;
