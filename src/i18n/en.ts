import type { ObjectOrString } from "@/interfaces/lib/ILanguagePack";
import IbmLogo from "../../public/img/logos/ibm.png";

/**
 * List of all experiences since entering the IT work field
 */
const EnStrings: ObjectOrString = {
  NAVBAR: {
    PROMOTION: "The professional you need with the skills you want",
  },
  PAGES: {
    HOME: {},
    CONTACT: {
      TITLE: "Get in Touch",
    },
    EXPERIENCES: {
      timeline: [
        {
          title: "Technical Leader",
          company: "IBM",
          duration: "June 2017 - Present",
          logo: IbmLogo,
          description:
            "Joining back at IBM a year later, I felt a lot more confident as I had been working on the skills I obtained during my CO-OP so I could use them on real-world projects and help build modern applications for our customers' businesses. Since the time of writing this, within IBM I've worked in the public and private sector in industries like: Banking, Retail, Government, Travel & Transportation and Healthcare. Having started out at the lowest graded band level at the department, after 9 years of hard work and dedication I was able to increase my eminence, consult with and help multiple clients on their modernization journey, obtain several certifications, grow our business and number of consults within our department, all resulting in me moving into and operating at one of the more senior roles in our department.",
          projects: [
            {
              title: "Railway Transportation App",
              description:
                "This was my first customer project 3 months after starting my full-time career at IBM. I was only supposed to be on this project for 3 months as they only needed support for a few features, but within that 3 months I was able to prove my ability to solve complex problems, understand the ecosystem, how the business works, and have a good grasp on the code base. I worked closely with the architect and would ideate with him on how we were going to solve new features and enhancements to the app. What was supposed to be a 3-month project ended up with me becoming the lead developer and helping sell the client on moving from a legacy design system to Material UI and to move away from AngularJS to React, and I played a big part in setting up the new codebase skeleton and built a lot of the material screens from scratch.",
              skills: [
                "AngularJS",
                "NodeJS",
                "Bootstrap",
                "Git",
                "Grunt",
                "Webpack",
                "React",
                "Material UI",
                "SCSS/LESS",
                "SVN",
                "Agile Methodology",
                "MVC Architecture",
              ],
              date: "August 2017 - December 2019",
              icon: "mdi-train",
            },
            {
              title: "IBM DeepSense Partnership",
              description:
                "I was one of the few who got chosen to take part in a role which required an IBMer to work with and assist one of IBM's largest investments in Atlantic Canada (DeepSense) based out of Dalhousie University. IBM donated a massive Data Center with HPCs and part of the agreement was that they would have a Technical Advisor to support them with various research projects and company collaborations. This was a step away from Software Engineering but it gave me the opportunity to explore how research projects work, build partnerships with new companies, network, and get an understanding of how we can use AI responsibly to solve some of the ocean sector's biggest problems.",
              skills: [
                "AI/ML Models",
                "Data Analysis",
                "Python",
                "Jupyter Notebooks",
                "HPCs",
                "Data Visualization",
                "Networking",
                "Ocean Sector",
              ],
              date: "December 2019 - December 2020",
              icon: "mdi-database",
            },
            {
              title: "IBM/UNB Covid-19 Research Dashboard",
              description:
                "While working on the national Innovation team, an opportunity came up where full-stack expertise was required and I was selected to help build out a dashboard which would display data fed in by research models to understand how Covid-19 was spreading within schools in Newfoundland and Labrador and potential mitigation strategies. I set up the project in React, Node.js on the backend, and deployed the app to IBM Cloud via Pipeline. The project was recognized by ACM and ended up being published.",
              skills: [
                "ReactJS",
                "NodeJS",
                "Data Visualization",
                "Git",
                "Agile Methodology",
                "IBM Cloud",
                "IBM Cloudant",
              ],
              date: "April 2020 - July 2020",
              icon: "mdi-chart-bar",
            },
            {
              title: "Financial Services",
              description:
                "This project I took on the role of a Software Engineer focused primarily on the backend side of things. Our goal was to leverage Confluent Control Center to create streaming applications, ingest data, map it, and push it back into Control Center. We followed the BIAN data mapping protocol. I created several different data streaming microapps primarily leveraging Apache Kafka Streams to stream from different topics, perform joins, populate topics, and send the messages. We were able to ingest millions of data sitting in an MQ server and deploy our streamers to production and get the data residing within Control Center following BIAN protocols.",
              skills: [
                "Java",
                "Apache Kafka Streams",
                "Confluent Control Center",
                "Kafka",
                "Git",
                "Agile Methodology",
                "Spring Boot",
                "OpenShift/Kubernetes",
                "Jenkins",
              ],
              date: "December 2021 - November 2022",
              icon: "mdi-bank",
            },
            {
              title: "Home Renovation Services",
              description:
                "This project was my first experience within the Retail domain and I had joined an existing team that was building applications to allow a certified professional to come to your place of living and install various furnishings/appliances in your house. This was an agile team in which we leveraged Vue.js as our primary framework and a BFF as our middleware with GCP being our K8s Cloud provider. Much like my first project at IBM, I demonstrated the ability to catch on quickly, deliver quality, unit-tested code that would best meet the criteria of the feature I was building. On many occasions I was deemed to be an asset to the team and really enjoyed this engagement.",
              skills: [
                "VueJS",
                "NodeJS",
                "Git",
                "Agile Methodology",
                "GCP",
                "Kubernetes",
                "Jenkins",
                "GraphQL",
                "Contentful",
                "SEO",
              ],
              date: "December 2021 - October 2022",
              icon: "mdi-shovel",
            },
            {
              title: "Private Medical Service Provider",
              description:
                "This project was short but the team managed to deliver on our requirements in a small time frame. The customer had an existing portal that was not maintainable by non-technical people and wanted something that someone non-technical could update/change without having to engage engineers. So they hired us to build them a custom React-based solution in Microsoft Power Apps. The client had multiple other vendors supporting so our part was to build the React screens and allow the appropriate teams to integrate with Power Apps.",
              skills: ["ReactJS", "Microsoft Power Apps", "Azure DevOps", "Agile Methodology"],
              date: "October 2022 - January 2023",
              icon: "mdi-medical-bag",
            },
            {
              title: "Public Sector",
              description:
                "This project was the first time I was appointed as Tech Lead within our Agile team. We were tasked to build an application that would allow non-citizens to apply to renew their passport online. I was in charge of around 7 devs, mixed between backend and frontend, and also worked on code delivery. We managed to build a complex system that integrates with the customer's existing SOAP services through our Spring Boot apps and delivery to/from the Angular frontend. The solution was deployed to AWS and we leveraged several services like S3, Dynamo, ECS, ECR, CloudWatch, ALB, etc. I was really proud of what the team accomplished given how diverse the team was in terms of skillsets, location, and proficiency with the tech stack.",
              skills: [
                "Angular",
                "NodeJS",
                "Express",
                "AWS",
                "Spring Boot",
                "Git",
                "Agile Methodology",
                "MVC Architecture",
                "SOAP Services",
                "Cron Jobs",
              ],
              date: "January 2023 - January 2024",
              icon: "mdi-passport",
            },
            {
              title: "Financial Services",
              description:
                "I was brought back on to the IBM team but this time in a different space than the data streaming team. This time I was a Tech Lead for a full-stack development crew consisting of IBM and Client developers. We managed to build several new capabilities for end banking users and for customer-facing agents. I was responsible for leading, defining solution approaches, ensuring everyone had what they need, and reviewing code that we delivered. We worked on several different systems within the company's ecosystem and were responsible from creating the initial branch to deployment to production. Towards the end of this engagement I was deployed as a Tech Lead to a Tiger team whose main goal was to tackle some of the highest priority items reported from customers in which I continued to advise the team while also contributing code.",
              skills: [
                "Java",
                "Spring Boot",
                "Angular",
                "RxJS",
                "Git",
                "Agile Methodology",
                "Material UI",
                "Jenkins",
                "OpenShift/Kubernetes",
                "Logscale",
              ],
              date: "January 2024 - March 2025",
              icon: "mdi-credit-card",
            },
            {
              title: "Financial Services Provider",
              description:
                "I had joined a new client within the banking sector as a Tech Lead/Scrum Master for a team responsible for re-writing an old PHP UI in modern tech like React.js and Material UI. I wrote less code on this project and worked primarily as a scrum master/BSA, working with the product owner to understand the requirements and bridge the gap between what's possible technically and what's realistic to deliver in terms of dates and technical feasibility. While I really enjoyed who I was working with, I found I was not able to identify a path within our program to become an Architect, so I gracefully found a backfill and exited the account.",
              skills: [
                "React.js",
                "Scrum Master",
                "Business Analysis",
                "Material UI",
                "Git",
                "Agile Methodology",
              ],
              date: "March 2025 - January 2026",
              icon: "mdi-bank-transfer",
            },
            {
              title: "Financial Services",
              description:
                "This is my current engagement at IBM and I am really enjoying it. I am the Tech Lead for my crew but also provide daily support to other individuals in other crews. I lead by example, ensure things are done the correct way aligning to the bank's high and well-defined standards, and we are delivering on our sprint items. This is one of the most challenging projects I have had to deliver on as not only am I leading my team to victory, I am also writing code to ensure we meet our deadline. The continued success and outcomes we've had at this bank has allowed us to keep coming back, time and time again to deliver on the next big thing.",
              skills: [
                "Java",
                "Spring Boot",
                "Angular",
                "RxJS",
                "Git",
                "Agile Methodology",
                "Material UI",
                "Jenkins",
                "OpenShift/Kubernetes",
              ],
              date: "January 2026 - Present",
              icon: "mdi-headset",
            },
          ].reverse(),
        },
        {
          title: "IT Specialist (CO-OP)",
          company: "IBM",
          duration: "July 2016 - August 2016",
          logo: IbmLogo,
          description:
            "This was my first experience within the IT industry after completing my first year of schooling. I joined IBM walking through the doors not knowing what to expect. The people I met, the skills I acquired, and the experiences I still greatly value to this day. Coming from a database-focused second semester, programming was new to me. My colleague and I were assigned to build a full-stack web application using a modern stack (AngularJS, Node.js), yes, they were modern at the time, and we had it deployed to Bluemix, which is now formally IBM Cloud. This was an amazing experience for me, and my performance was such that they offered me full-time employment pending graduation the following year.",
          projects: [
            {
              title: "Welcome Mat Onboarding Tool",
              description:
                "The welcome mat project was an idea where our CO-OP team would assemble and build an application that helped track the pipeline of projects coming into our department and identify engineers who had that skillset so they could be aligned to the opportunity. The application was secured using OAuth and leveraged SSO in order to allow only IBMs to login to our site. It had an AngularJS frontend and was powered by a Node.js Express backend, and for data persistence, we leveraged Cloudant. By the end of ~3 months we had the application deployed and working in Bluemix which is now known as IBM Cloud. The stakeholders were very impressed with the work that we had done in such a short timeline.",
              skills: [
                "AngularJS",
                "NodeJS",
                "Bootstrap",
                "Bluemix",
                "Git",
                "Agile Methodology",
                "MVC Architecture",
                "SAML SSO",
                "OAuth",
              ],
              icon: "mdi-xml",
            },
          ],
        },
      ],
    },
  },
};

export default EnStrings;
