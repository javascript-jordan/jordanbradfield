import type { ObjectOrString } from "@/interfaces/lib/ILanguagePack";
import IbmLogo from "../../public/img/logos/ibm.png";

/**
 * Liste de toutes les expériences depuis mon entrée dans le domaine du travail informatique
 */
const FrStrings: ObjectOrString = {
  NAVBAR: {
    PROMOTION: "Le professionnel dont vous avez besoin avec les compétences que vous voulez",
  },
  PAGES: {
    HOME: {},
    CONTACT: {
      TITLE: "Entrez en contact",
    },
    EXPERIENCES: {
      timeline: [
        {
          title: "Leader Technique",
          company: "IBM",
          duration: "Juin 2017 - Présent",
          logo: IbmLogo,
          description:
            "Rejoignant IBM un an plus tard, je me sentais beaucoup plus confiant car j'avais travaillé sur les compétences que j'avais acquises pendant mon CO-OP pour pouvoir les utiliser sur des projets du monde réel et aider à construire des applications modernes pour les entreprises de nos clients. Depuis le moment d'écrire ceci, chez IBM j'ai travaillé dans le secteur public et privé dans des industries comme : Banque, Commerce de détail, Gouvernement, Voyages et Transport et Santé. Ayant commencé au niveau de bande le plus bas du département, après 9 ans de dur travail et de dévouement j'ai pu augmenter mon éminence, consulter et aider plusieurs clients dans leur voyage de modernisation, obtenir plusieurs certifications, faire croître notre entreprise et le nombre de consultants dans notre département, tout aboutissant à ce que je me déplace vers et opère à l'un des rôles plus seniors dans notre département.",
          projects: [
            {
              title: "Application de Transport Ferroviaire",
              description:
                "Ceci était mon premier projet client 3 mois après avoir commencé ma carrière à temps plein chez IBM. Je n'étais censé être sur ce projet que pour 3 mois car ils n'avaient besoin de support que pour quelques fonctionnalités, mais dans ces 3 mois j'ai pu prouver ma capacité à résoudre des problèmes complexes, comprendre l'écosystème, comment l'entreprise fonctionne, et avoir une bonne maîtrise de la base de code. J'ai travaillé étroitement avec l'architecte et j'idéerais avec lui sur comment nous allions résoudre de nouvelles fonctionnalités et améliorations à l'application. Ce qui était censé être un projet de 3 mois s'est terminé avec moi devenant le développeur principal et aidant à vendre au client de passer d'un système de conception legacy à Material UI et de s'éloigner d'AngularJS vers React, et j'ai joué un grand rôle dans la configuration du squelette du nouveau code base et construit beaucoup des écrans de matériel à partir de zéro.",
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
                "Méthodologie Agile",
                "Architecture MVC",
              ],
              date: "Août 2017 - Décembre 2019",
              icon: "mdi-train",
            },
            {
              title: "Partenariat IBM DeepSense",
              description:
                "J'étais l'un des rares choisis pour prendre part à un rôle qui nécessitait qu'un IBMer travaille avec et assiste l'un des plus gros investissements d'IBM dans l'Atlantique du Canada (DeepSense) basé à l'Université Dalhousie. IBM a fait don d'un Centre de Données massif avec HPCs et partie de l'accord était qu'ils auraient un Conseiller Technique pour les supporter avec divers projets de recherche et collaborations d'entreprise. C'était une étape loin de l'Ingénierie Logicielle mais cela m'a donné l'opportunité d'explorer comment les projets de recherche fonctionnent, construire des partenariats avec de nouvelles entreprises, faire du networking, et obtenir une compréhension de comment nous pouvons utiliser l'AI de manière responsable pour résoudre certains des plus gros problèmes du secteur océanique.",
              skills: [
                "Modèles AI/ML",
                "Analyse de Données",
                "Python",
                "Jupyter Notebooks",
                "HPCs",
                "Visualisation de Données",
                "Networking",
                "Secteur Océanique",
              ],
              date: "Décembre 2019 - Décembre 2020",
              icon: "mdi-database",
            },
            {
              title: "Tableau de Bord de Recherche Covid-19 IBM/UNB",
              description:
                "Pendant que je travaillais sur l'équipe nationale d'Innovation, une opportunité s'est présentée où une expertise full-stack était requise et j'ai été sélectionné pour aider à construire un tableau de bord qui afficherait des données alimentées par des modèles de recherche pour comprendre comment Covid-19 se propageait dans les écoles de Terre-Neuve-et-Labrador et des stratégies potentielles de mitigation. J'ai configuré le projet en React, Node.js sur le backend, et déployé l'application vers IBM Cloud via Pipeline. Le projet a été reconnu par ACM et a fini par être publié.",
              skills: [
                "ReactJS",
                "NodeJS",
                "Visualisation de Données",
                "Git",
                "Méthodologie Agile",
                "IBM Cloud",
                "IBM Cloudant",
              ],
              date: "Avril 2020 - Juillet 2020",
              icon: "mdi-chart-bar",
            },
            {
              title: "Services Financiers",
              description:
                "Ce projet j'ai pris le rôle d'un Ingénieur Logiciel focalisé principalement sur le côté backend. Notre objectif était de tirer parti de Confluent Control Center pour créer des applications de streaming, ingérer des données, les mapper, et les pousser de retour dans Control Center. Nous avons suivi le protocole de mappage de données BIAN. J'ai créé plusieurs applications de microdonnées de streaming différentes tirant principalement parti d'Apache Kafka Streams pour streamer depuis différents sujets, effectuer des joins, peupler des sujets, et envoyer les messages. Nous avons pu ingérer des millions de données assises dans un serveur MQ et déployer nos streamers en production et obtenir les données résidant dans Control Center suivant les protocoles BIAN.",
              skills: [
                "Java",
                "Apache Kafka Streams",
                "Confluent Control Center",
                "Kafka",
                "Git",
                "Méthodologie Agile",
                "Spring Boot",
                "OpenShift/Kubernetes",
                "Jenkins",
              ],
              date: "Décembre 2021 - Novembre 2022",
              icon: "mdi-bank",
            },
            {
              title: "Services de Rénovation Résidentielle",
              description:
                "Ce projet était ma première expérience dans le domaine du Commerce de détail et j'ai rejoint une équipe existante qui construisait des applications pour permettre à un professionnel certifié de venir à votre lieu de résidence et installer divers meubles/électroménagers dans votre maison. C'était une équipe agile dans laquelle nous avons tiré parti de Vue.js comme notre framework primaire et un BFF comme notre middleware avec GCP étant notre fournisseur de nuage K8s. Très similaire à mon premier projet chez IBM, j'ai démontré la capacité d'apprendre rapidement, livrer du code de qualité testé par unités qui répondrait le mieux aux critères de la fonctionnalité que je construisais. À de nombreuses occasions j'ai été considéré comme un atout pour l'équipe et j'ai vraiment apprécié cet engagement.",
              skills: [
                "VueJS",
                "NodeJS",
                "Git",
                "Méthodologie Agile",
                "GCP",
                "Kubernetes",
                "Jenkins",
                "GraphQL",
                "Contentful",
                "SEO",
              ],
              date: "Décembre 2021 - Octobre 2022",
              icon: "mdi-shovel",
            },
            {
              title: "Fournisseur Privé de Services Médicaux",
              description:
                "Ce projet était court mais l'équipe a réussi à livrer sur nos exigences dans un petit cadre de temps. Le client avait un portail existant qui n'était pas maintenable par des personnes non-techniques et voulait quelque chose que quelqu'un de non-technique puisse mettre à jour/changer sans avoir à engager des ingénieurs. Ils nous ont donc embauchés pour leur construire une solution personnalisée basée sur React dans Microsoft Power Apps. Le client avait plusieurs autres fournisseurs supportant donc notre partie était de construire les écrans React et permettre aux équipes appropriées de s'intégrer avec Power Apps.",
              skills: ["ReactJS", "Microsoft Power Apps", "Azure DevOps", "Méthodologie Agile"],
              date: "Octobre 2022 - Janvier 2023",
              icon: "mdi-medical-bag",
            },
            {
              title: "Secteur Public",
              description:
                "Ce projet était la première fois que j'étais nommé Tech Lead dans notre équipe Agile. Nous étions chargés de construire une application qui permettrait aux non-citoyens de postuler pour renouveler leur passeport en ligne. J'étais en charge d'environ 7 devs, mélangés entre backend et frontend, et j'ai aussi travaillé sur la livraison de code. Nous avons réussi à construire un système complexe qui s'intègre avec les services SOAP existants du client à travers nos applications Spring Boot et livraison depuis/vers le frontend Angular. La solution a été déployée vers AWS et nous avons tiré parti de plusieurs services comme S3, Dynamo, ECS, ECR, CloudWatch, ALB, etc. J'étais vraiment fier de ce que l'équipe a accompli étant donné à quel point l'équipe était diverse en termes de compétences, emplacement, et maîtrise du stack technologique.",
              skills: [
                "Angular",
                "NodeJS",
                "Express",
                "AWS",
                "Spring Boot",
                "Git",
                "Méthodologie Agile",
                "Architecture MVC",
                "Services SOAP",
                "Cron Jobs",
              ],
              date: "Janvier 2023 - Janvier 2024",
              icon: "mdi-passport",
            },
            {
              title: "Services Financiers",
              description:
                "J'ai été ramené à l'équipe IBM mais cette fois dans un espace différent de l'équipe de streaming de données. Cette fois j'étais Tech Lead pour un équipage de développement full-stack consistant en développeurs IBM et Client. Nous avons réussi à construire plusieurs nouvelles capacités pour les utilisateurs finaux bancaires et pour les agents orientés client. J'étais responsable de diriger, définir des approches de solution, assurer que tout le monde avait ce dont ils avaient besoin, et réviser le code que nous livrions. Nous avons travaillé sur plusieurs systèmes différents dans l'écosystème de l'entreprise et étions responsables de la création de la branche initiale au déploiement en production. Vers la fin de cet engagement j'ai été déployé comme Tech Lead à une équipe Tiger dont le but principal était de s'attaquer à certains des items de plus haute priorité rapportés par les clients dans lesquels j'ai continué à conseiller l'équipe tout en contribuant aussi du code.",
              skills: [
                "Java",
                "Spring Boot",
                "Angular",
                "RxJS",
                "Git",
                "Méthodologie Agile",
                "Material UI",
                "Jenkins",
                "OpenShift/Kubernetes",
                "Logscale",
              ],
              date: "Janvier 2024 - Mars 2025",
              icon: "mdi-credit-card",
            },
            {
              title: "Fournisseur de Services Financiers",
              description:
                "J'avais rejoint un nouveau client dans le secteur bancaire comme Tech Lead/Scrum Master pour une équipe responsable de ré-écrire une ancienne UI PHP en technologie moderne comme React.js et Material UI. J'ai écrit moins de code sur ce projet et j'ai travaillé principalement comme scrum master/BSA, travaillant avec le propriétaire du produit pour comprendre les exigences et combler le fossé entre ce qui est possible techniquement et ce qui est réaliste à livrer en termes de dates et de faisabilité technique. Bien que j'aie vraiment apprécié avec qui je travaillais, j'ai trouvé que je n'étais pas capable d'identifier un chemin dans notre programme pour devenir Architecte, j'ai donc gracieusement trouvé un remplaçant et quitté le compte.",
              skills: [
                "React.js",
                "Scrum Master",
                "Analyse d'Affaires",
                "Material UI",
                "Git",
                "Méthodologie Agile",
              ],
              date: "Mars 2025 - Janvier 2026",
              icon: "mdi-bank-transfer",
            },
            {
              title: "Services Financiers",
              description:
                "Ceci est mon engagement actuel chez IBM et je l'apprécie vraiment. Je suis le Tech Lead pour mon équipage mais je fournis aussi un support quotidien à d'autres individus dans d'autres équipages. Je mène par l'exemple, assure que les choses sont faites de la bonne manière s'alignant aux hauts et bien définis standards de la banque, et nous livrons sur nos items de sprint. Ceci est l'un des projets les plus difficiles sur lesquels j'ai eu à livrer car non seulement je mène mon équipe à la victoire, j'écris aussi du code pour assurer que nous rencontrions notre deadline. Le succès continu et les résultats que nous avons eus à cette banque nous a permis de continuer à revenir, temps et temps de nouveau pour livrer sur la prochaine grande chose.",
              skills: [
                "Java",
                "Spring Boot",
                "Angular",
                "RxJS",
                "Git",
                "Méthodologie Agile",
                "Material UI",
                "Jenkins",
                "OpenShift/Kubernetes",
              ],
              date: "Janvier 2026 - Présent",
              icon: "mdi-headset",
            },
          ].reverse(),
        },
        {
          title: "Spécialiste IT (CO-OP)",
          company: "IBM",
          duration: "Juillet 2016 - Août 2016",
          logo: IbmLogo,
          description:
            "C'était ma première expérience dans l'industrie informatique après avoir complété ma première année d'études. J'ai rejoint IBM marchant à travers les portes sans savoir à quoi m'attendre. Les personnes que j'ai rencontrées, les compétences que j'ai acquises, et les expériences que je valorise encore grandement à ce jour. Venant d'un deuxième semestre focalisé sur la base de données, la programmation était nouvelle pour moi. Mon collègue et moi avons été assignés pour construire une application web full-stack utilisant un stack moderne (AngularJS, Node.js), oui, ils étaient modernes à l'époque, et nous l'avions déployé vers Bluemix, qui est maintenant formellement IBM Cloud. C'était une expérience incroyable pour moi, et ma performance était telle qu'ils m'ont offert un emploi à temps plein en attente de graduation l'année suivante.",
          projects: [
            {
              title: "Outil d'Incorporation Welcome Mat",
              description:
                "Le projet welcome mat était une idée où notre équipe CO-OP s'assemblerait et construirait une application qui aiderait à suivre le pipeline de projets entrant dans notre département et identifier les ingénieurs qui avaient cet ensemble de compétences pour qu'ils puissent être alignés à l'opportunité. L'application était sécurisée utilisant OAuth et tirait parti de SSO afin de permettre seulement aux IBMs de se connecter à notre site. Elle avait un frontend AngularJS et était alimentée par un backend Node.js Express, et pour la persistance de données, nous avons tiré parti de Cloudant. À la fin de ~3 mois nous avions l'application déployée et fonctionnant dans Bluemix qui est maintenant connu comme IBM Cloud. Les parties prenantes étaient très impressionnées par le travail que nous avions fait dans un tel court timeline.",
              skills: [
                "AngularJS",
                "NodeJS",
                "Bootstrap",
                "Bluemix",
                "Git",
                "Méthodologie Agile",
                "Architecture MVC",
                "SAML SSO",
                "OAuth",
              ],
              icon: "mdi-xml",
            },
          ],
        },
      ],
    },
    SKILLS: {
      TECHNICAL: [
        {
          name: "Développement d'API",
          description:
            "J'ai travaillé avec plusieurs clients en construisant principalement des APIs RESTful dans des technologies comme Spring Boot et Express.JS. Lors du développement de ces APIs, j'ai suivi les meilleures pratiques comme choisir la méthode HTTP en fonction de l'opération qui devait être effectuée. Je me suis assuré que les APIs échouent de manière gracieuse si, par exemple, un paramètre était mal formaté ou nul. J'ai sécurisé mes APIs derrière l'authentification JWT. J'ai également mis en œuvre des outils comme Lombok et des outils de formatage de code pour instaurer la cohérence et réduire le code de plomberie.",
          technologies: [
            { name: "Express", premium: true },
            { name: "Spring Boot", premium: true },
            { name: "Swagger/OpenAPI", premium: false },
            { name: "Postman", premium: true },
          ],
        },
        {
          name: "DevOps",
          description:
            "Bien que je n'aie jamais eu le titre officiel d'ingénieur DevOps dédié, les responsabilités venaient généralement avec le rôle d'ingénierie que je remplissais. Je m'assurais que les exigences étaient claires avant d'ouvrir une branche, d'implémenter mes changements, d'écrire des tests unitaires pour couvrir les cas typiques et les cas limites avant de pousser sur une branche et d'ouvrir une PR. Nous étions habituellement responsables de nous assurer que nos pipelines passaient et que nos pods K*s se lançaient et étaient sains après avoir fusionné notre code et procédé à un rollback en cas d'échec.",
          technologies: [
            { name: "Méthodologies DCUT", premium: true },
            { name: "Docker", premium: true },
            { name: "Jenkins", premium: false },
            { name: "Sonarqube", premium: false },
            { name: "Kubernetes", premium: true },
            { name: "Quality Gating", premium: true },
          ],
        },
        {
          name: "Langages de programmation",
          description:
            "Le premier langage de programmation auquel j'ai été initié était NodeJS en 2016, avant que nous ayons toutes les fonctionnalités sympas d'ES6 et ESNext d'aujourd'hui. J'ai adoré JavaScript et je l'ai poursuivi intensivement sur le frontend et le backend. J'ai également été intrigué par un langage plus fortement typé comme Java, qui supportait des principes clés tels que l'héritage, l'abstraction et l'encapsulation. Je choisis généralement Node pour des applications/scripts de courte durée et gourmands en mémoire, et Java pour des applications de plus longue durée et plus exigeantes en CPU. J'ai trempé dans Python et si l'on me demandait de livrer avec lui, je pourrais, mais ce ne serait pas mon premier choix.",
          technologies: [
            { name: "Java", premium: true },
            { name: "JavaScript/ECMAScript", premium: true },
            { name: "TypeScript", premium: true },
            { name: "Python", premium: false },
            { name: "SQL", premium: false },
          ],
        },
        {
          name: "Développement UI",
          description:
            "J'aime vraiment le développement UI et ma première exposition à cela a été avec ~AngularJS 1.4. Évidemment beaucoup de choses ont changé depuis lors et j'ai vraiment apprécié apprendre de nouvelles techniques et méthodologies. Mon framework frontend de prédilection est VueTS car je pense que c'est un bon hybride entre Angular et React et qu'il offre le meilleur des deux mondes, que ce soit en utilisant composition ou options API. J'ai également une profonde expertise technique avec les technologies vanilla et je les ai utilisées aux côtés de frameworks pour un comportement personnalisé.",
          technologies: [
            { name: "Vue", premium: true },
            { name: "React", premium: true },
            { name: "Angular", premium: true },
            { name: "AngularJS", premium: false },
            { name: "Cordova", premium: false },
            { name: "Vanilla HTML/JS/CSS", premium: true },
          ],
        },
        {
          name: "Compétences fonctionnelles",
          description:
            "Au fur et à mesure que j'ai progressé dans ma carrière, les compétences fonctionnelles sont devenues de plus en plus importantes, surtout lorsque je dirige une équipe de développement et que je communique et documente des solutions potentielles. J'ai appris à être un auditeur plus actif lorsque je communique avec mon client afin de m'assurer de bien comprendre sa situation actuelle. En plus de cela, j'ai commencé à prendre du temps pour rédiger plusieurs diagrammes d'architecture potentiels plutôt que d'essayer de solutionner quelque chose immédiatement.",
          technologies: [
            { name: "Solution technique/Documentation", premium: true },
            { name: "Résolution de problèmes", premium: true },
            { name: "Technical Lead", premium: true },
            { name: "Communication efficace", premium: false },
            { name: "Organisation", premium: false },
          ],
        },
        {
          name: "Outils",
          description:
            "Les outils sont incroyablement importants dans les efforts quotidiens des équipes de développement. Plusieurs IDE proposent des extensions pour accélérer le développement, que ce soit Copilot, Lombok, le formatage de code, etc. En tant qu'ingénieurs, nous devrions être ouverts à l'idée de tirer parti des outils tout en gardant à l'esprit les éventuelles restrictions que le client peut avoir contre quelque chose de relativement nouveau comme Copilot. De plus, je m'assure d'utiliser la suite Atlassian à mon avantage, en liant les commits/PRs aux tickets Jira et à la documentation via Confluence.",
          technologies: [
            { name: "Git", premium: true },
            { name: "VSCode", premium: true },
            { name: "IntelliJ", premium: true },
            { name: "Atlassian Suite", premium: true },
            { name: "ADO", premium: false },
            { name: "Copilot", premium: false },
          ],
        },
      ],
    },
  },
};

export default FrStrings;
