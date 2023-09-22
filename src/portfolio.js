/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jeffrey",
  title: "Hi all, I'm Jeffrey",
  subTitle: emoji(
    "A dedicated full stack software developer with strong product mindeset and well-versed in crafting exceptional web applications while maintaining a strong commitment to continuous learning and rapid skill acquisition."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jeffrey940421",
  linkedin: "https://www.linkedin.com/in/jeffrey-zhang-usc/",
  gmail: "jeffrey940421@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive frontend and user interfaces for web applications"
    ),
    emoji("⚡ Build robust backend and database for data storage and processing"),
    emoji(
      "⚡ Integrate third party services including AWS, Google API, and rich text editor"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      logo: require("./assets/images/cplusplus.svg").default
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ExpressJS",
      logo: require("./assets/images/expressjs-logo.svg").default
    },
    {
      skillName: "Flask",
      logo: require("./assets/images/flask.svg").default
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Redux",
      logo: require("./assets/images/redux.svg").default
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "MySQL",
      logo: require("./assets/images/mysql-logo.svg").default
    },
    {
      skillName: "PostgreSQL",
      logo: require("./assets/images/postgresql-logo.svg").default
    },
    {
      skillName: "Apache Hive",
      logo: require("./assets/images/hive.svg").default
    },
    {
      skillName: "Sequelize",
      logo: require("./assets/images/sequelize.svg").default
    },
    {
      skillName: "SQLAlchemy",
      logo: require("./assets/images/SQLAlchemy.svg").default
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Socket.IO",
      logo: require("./assets/images/Socket-io.svg").default
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/usc.png"),
      subHeader: "Master of Science in Materials Engineering",
      duration: "August 2016 - May 2018",
      desc: "My educational background in Materials Engineering provided me with a strong foundation in critical thinking and problem-solving. I also discovered my passion for programming and data analysis during my graduate studies, which led me to transition into the field of software development.",
      descBullets: {
        "MASC575 Molecular Dynamics Simulations of Materials and Processes": [
          "Implemented velocity Verlet algorithm in Fortran for atomic motion simulations.",
          "Scripted LAMMPS input commands in Linux environment to simulate material testing processes on high-performance computing clusters (HPCC)."
        ],
        "DSO552 SQL for Business Analyst": [
          "Conducted data manipulation and executed complex database queries on a substantial 10GB supermarket database using MySQL and Hive.",
          "Analyzed sales data to identify category-leading products, discover frequently paired items, and assess customer shopping patterns, enabling data-driven recommendations for optimizing promotional pricing and store layout"
        ]
      }
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend & Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend & Database",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming Algorithms",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manager",
      company: "Renogy",
      companylogo: require("./assets/images/renogy.jpg"),
      date: "August 2018 – October 2022",
      desc: "Renogy is a solution provider of clean energy systems. As a product manager at Renogy, I led a dedicated team of four individuals in researching the solar energy storage market, defining product roadmaps, and meticulously detailing product features. My responsibilities encompassed product design, project management, product testing, and cross-functional coordination.",
      descBullets: [
        "Created a web scraper using Python to collect peak sun hour data from the National Renewable Energy Lab's database and developed a solar calculator using JavaScript for customers to design solar systems and assess investment returns",
        "Collaborated with software architects and engineers in designing a CAN-based proprietary communication protocol for smart solar energy devices, enabling automation and remote monitoring of solar systems"
      ]
    },
    {
      role: "Research Assistant",
      company: "AMI-USC",
      companylogo: require("./assets/images/ami-usc.png"),
      date: "Sepetember 2017 – May 2018",
      desc: "AMI-USC is a non-profit organization dedicated to bridging the gap between biomedical innovation and the creation of commercially successful medical products. As a research assistant at AMI-USC, I actively contributed to a project focused on utilizing 3D printing technology for the manufacturing of composite bone scaffolds. This innovative approach offered an efficient and cost-effective solution for producing customized scaffolds to aid in bone regeneration, holding significant promise for millions of patients worldwide facing bone defects.",
      descBullets: [
        "Developed a 3D printer control system in C for a custom-built 3D printer, enabling the slicing of 3D models, generation of exposure images, and precise control over the movement speed of each axis of the 3D printer.",
        "Constructed a multiple regression model to analyze pirnitng parameters that possibly affect the scaffold quality, reducing printing defects by an impressive 95%"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME THINGS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/airpnp_1.png"),
      projectName: "Airpnp",
      projectDesc: "Airpnp is a full stack home rental web application, inspired by Airbnb, featuring spot, review, and booking management functionalities, and a interactive map for location visualization.",
      techStack: 'NodeJS, ExpressJS, HTML5, CSS3, JavaScript, ReactJs, Sequelize, AWS S3, Redux, PostgreSQL, Goggle API (Map, Geocoding, Address Validation, Address Suggestion)',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airpnp.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/Jeffrey940421/airpnp-portfolio-project"
        }
      ]
    },
    {
      image: require("./assets/images/bumblr.png"),
      projectName: "Bumblr",
      projectDesc: "Bumblr is a full stack social media web application, inspired by Tumblr, featuring post, tag, like, and follow management functionalities, a direct message system, and a rich text post editor.",
      techStack: 'Python, Flask, HTML5, CSS3, JavaScript, ReactJs, SQLAlchemy, AWS S3, Redux, PostgreSQL, CKEditor5, Socket.IO',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bumblr.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/thomasyuan478/Bumblr"
        }
      ]
    },
    {
      image: require("./assets/images/klack.png"),
      projectName: "Klack",
      projectDesc: "Klack is a full stack instant messaging web application, inspired by Slack, featuring workspace, channel, message, and reply management functionalities, a rich text message editor, and real-time state synchronization.",
      techStack: 'Python, Flask, HTML5, CSS3, JavaScript, ReactJs, SQLAlchemy, AWS S3, Redux, PostgreSQL, CKEditor5, Socket.IO',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://klack.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/Jeffrey940421/klack"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  number: "213(292)-1698",
  email_address: "jeffrey940421@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
