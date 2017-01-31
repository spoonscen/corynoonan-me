"use strict";
var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
    res.send("\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <meta charset=\"UTF-8\" />\n            <title>Cory Noonan</title>\n            <link rel=\"shortcut icon\" href=\"../public/assets/bikeicon.png\" type=\"image/x-icon\">\n            <link rel=\"stylesheet\" type=\"text/css\" href=\"../public/assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css\">\n        </head>\n        <body>\n            <div id=\"app\"></div>\n            <script src=\"../node_modules/react/dist/react.js\"></script>\n            <script src=\"../node_modules/react-dom/dist/react-dom.js\"></script>\n            <script src=\"../dist/bundle.js\"></script>\n        </body>\n    </html>\n  ");
});
router.get('/api/projects', function (req, res) {
    res.send({
        data: {
            projects: [
                {
                    "title": "corynoonan.me",
                    "details": "Personal Site (Typescript, React, Nodejs, Webpack, Sass, Docker)",
                    "description": "I wanted to build this site to flex and showcase my skillset. I chose Typescript because I have found huge advantages using a typed language. The number of bugs is dramatically reduced and the accuracy and readability of the code increases. The front end is written in React. I followed a “stateful and pure” pattern where the only components that have state are the ones that have to make requests to the API. The advantage of this pattern is a better separation of concerns. All page routing is handled using react-router. The front end code is tested using mocha, chai, sinon, and enzyme. The API is Typescript/Nodejs leveraging the Expressjs framework and is tested with mocha and chai. All of the styles are written is Sass and there are no skeleton frameworks used for element positioning.",
                    "link": "",
                    "github": "https://github.com/spoonscen/corynoonan-me",
                    "imageLinks": [
                        "/images/projects/corynoonan-me.png"
                    ]
                },
                {
                    "title": "ES6 Mocha Snippets",
                    "details": "Snippets to reduce boiler plate when practicing BDD/TDD ",
                    "description": "As someone who writes a lot a of javascript unit tests I lean heavily on the testing framework called mocha. When writing mocha tests there is a decent amount of boilerplate that needs to be written continuously. I wanted to speed up that process. Visual Studio Code has a very extendable user interface and was lacking in ES6 mocha snippets.",
                    "link": "https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets",
                    "github": "https://github.com/spoonscen/es6-mocha-snippets-vs-code",
                    "imageLinks": [
                        "/images/projects/mocha-snippets.png"
                    ]
                },
                {
                    "title": "Spoonsauce",
                    "details": "GA Front End Web Development final project (Angular, Javascript)",
                    "description": "As a hot sauce lover, Spoonsauce was a way for me to share my passion with the world. I started making hot sauce in 2013.  I loved sharing the sauces I made with my friends and was frequently asked for the recipes or ingredients. Spoonsauce became my answer to their questions!  There is hot sauce recipe page where the user can search and sort the recipes by heat level. Each hot sauce recipe page includes some ingredients and a quick description on how to make it. The same heat level filtering is applied to the peppers page.  Each pepper page includes a little description and some facts about the pepper. \nI wanted to challenge myself with my final project and go above and beyond what GA was asking. This was my first deep dive into a front end javascript framework. I had never worked with a single page application before and had no concept of MVC when I started. I decided on Angular because the position I was taking as a software engineer at Maxwell Health involved working in an Angular web app. I hacked away following tutorials and relentlessly googled solutions to any issues I ran into. At the end of my GA class, I had a functioning single page Angular app. I chose to host it on an AWS free tier which was my first introduction to AWS. My introduction to modern web development was a great experience. I developed healthy patterns for self teaching and got some great practice with Javascript, Angular, Amazon, and Git.",
                    "link": "http://spoonsauce.com",
                    "github": "https://github.com/spoonscen/Spoonsauce",
                    "imageLinks": [
                        "/images/projects/spoonsauce.png"
                    ]
                },
                {
                    "title": "Unix Timestamp Converter",
                    "details": "Chrome Extension (jQuery, Javascript)",
                    "description": "If you do any kind of software development you have most likely come across a unix timestamp. It looks something like this: 1480191963 (the number of seconds since 01/01/1970 UTC). As a QA Engineer, I was constantly visiting websites that would do the conversion for me. Most of those websites require you to enter in the date in a very specific format. As you know, dates don’t always come in the same form and breaking them up into multiple boxes is prone to human error. I wanted a tool that would easily convert any date to unix timestamps or vice versa. I chose to make the tool a Chrome extension because hosting a website for a tool like this seemed a bit overkill. The tool has two input boxes, one for unix timestamps and one for other date formats. When a date is entered and the convert button is clicked the tool converts the date into a date in your timezone, UTC, and unix. \nThe Unix Timestamp Converter is a very simple Javascript app that is used all over the world. I use Google Analytics to track the usage of the extension. It is used in over 40 countries with Sweden coming in with the most sessions per day! It has the highest rating in the Chrome App store and has over 590 users.",
                    "link": "https://chrome.google.com/webstore/detail/unix-timestamp-converter/clkkocmhcpfginlphpgjmgpdffihcbmm",
                    "github": "https://github.com/spoonscen/unix-timestamp-chrome",
                    "imageLinks": [
                        "/images/projects/unix-timestamp.png"
                    ]
                }
            ]
        }
    });
});
router.get('/api/about', function (req, res) {
    res.send({
        data: {
            about: {
                email: 'cory.noonan@gmail.com',
                technicalRoles: ['Full Stack Software Engineer', 'Scrum Master', 'Quality Assurance Engineer'],
                technicalSkills: {
                    languages: ['Typescript', 'Javascript', 'Sass', 'CSS', 'HTML5', 'Jade', 'Less', 'Gherkin', 'Coffeescript', 'Ruby', 'Bash'],
                    frameWorks: ['React', 'React-Native', 'Angular', 'Express', 'Cucumber', 'Capybara', 'Mocha', 'Ava', 'Jest'],
                    otherTechnologies: ['Mongodb', 'Docker', 'webpack', 'gulp', 'chai', 'sinon', 'nock', 'other various JS testing libraries', 'Jira', 'Travis CI', 'Jenkins', 'Team City', 'Confluence', 'git', 'Google Analytics']
                },
                interests: ['Track cycling/fixies', 'building bikes', 'photography', 'making hot sauce', 'fermentation', 'spinning/collecting vinyl records', 'juggling', 'fire breathing', 'fancy coffee', 'dancing', 'blacksmith puzzles', 'sewing', 'vegetables', 'vegetarian cooking']
            }
        }
    });
});
router.get('/api/blog', function (req, res) {
    res.send({
        data: {
            posts: [
                {
                    title: 'Test',
                    datePosted: '11/27/2016',
                    content: 'blog post content',
                }
            ]
        }
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=router.js.map