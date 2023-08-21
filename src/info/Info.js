import self from "../img/self.png"
import mock2 from "../img/mock2.png"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(10,255,164)", "rgb(176,104,255)"];
/*
I highly recommend using a gradient generator like https://cssgradient.io/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ahmet",
    lastName: "Gulmez",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(15deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself.
        
        {
            emoji: '🌎',
            text: 'based in the TR'
        },
        {
            link: "https://github.com/theahmetgg",
            emoji: "💼",
            text: "Open to work"
        },
        {
            emoji: "📧",
            text: "ahmetttgulmez@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/theahmetgg",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/theahmetgg",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, I'm Ahmet GULMEZ. 2022 I graduated from Mersin University, Department of Computer Engineering. I can use my work effectively and richly with the knowledge I gained in the process of self-development. I keep going. The latest in the projects I offer with web projects, Hosting services and SEO studies. I respond to customer requests using technologies. The positive and satisfaction I received Contextual feedback is the biggest source of motivation for me. Ambitious, intelligent and likes results-oriented projects in a short time, and at the same time algorithm, project according to your needs as someone who enjoys dealing with mathematics and software If you want to cooperate in the development process.You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'adobe photoshop', 'adobe illustrator', 'adobe premiere pro']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://ahmetgulmez.com.tr", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://ahmetgulmez.com.tr", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        {
            title: "Project 2",
            live: "https://ahmetgulmez.com.tr", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://ahmetgulmez.com.tr", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://ahmetgulmez.com.tr", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://ahmetgulmez.com.tr", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        {
            title: "Project 4",
            live: "https://ahmetgulmez.com.tr", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://ahmetgulmez.com.tr", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        
    ]
}