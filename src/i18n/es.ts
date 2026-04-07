import type { ObjectOrString } from "@/interfaces/lib/ILanguagePack";
import IbmLogo from "../../public/img/logos/ibm.png";

/**
 * Lista de todas las experiencias desde que entré en el campo laboral de TI
 */
const EsStrings: ObjectOrString = {
  NAVBAR: {
    PROMOTION: "El profesional que necesitas con las habilidades que deseas",
  },
  PAGES: {
    HOME: {},
    CONTACT: {
      TITLE: "Ponte en contacto",
    },
    EXPERIENCES: {
      timeline: [
        {
          title: "Líder Técnico",
          company: "IBM",
          duration: "Junio 2017 - Presente",
          logo: IbmLogo,
          description:
            "Regresando a IBM un año después, me sentía mucho más confiado ya que había estado trabajando en las habilidades que obtuve durante mi CO-OP para poder usarlas en proyectos del mundo real y ayudar a construir aplicaciones modernas para los negocios de nuestros clientes. Desde el momento de escribir esto, dentro de IBM he trabajado en el sector público y privado en industrias como: Banca, Retail, Gobierno, Viajes y Transporte y Salud. Habiendo comenzado en el nivel de banda más bajo del departamento, después de 9 años de arduo trabajo y dedicación pude aumentar mi eminencia, consultar y ayudar a múltiples clientes en su viaje de modernización, obtener varias certificaciones, hacer crecer nuestro negocio y el número de consultores dentro de nuestro departamento, todo resultando en que me moviera a uno de los roles más senior en nuestro departamento.",
          projects: [
            {
              title: "Aplicación de Transporte Ferroviario",
              description:
                "Este fue mi primer proyecto de cliente 3 meses después de comenzar mi carrera a tiempo completo en IBM. Solo se suponía que estuviera en este proyecto por 3 meses ya que solo necesitaban soporte para algunas características, pero dentro de esos 3 meses pude demostrar mi capacidad para resolver problemas complejos, entender el ecosistema, cómo funciona el negocio, y tener un buen dominio del código base. Trabajé estrechamente con el arquitecto e idearía con él cómo íbamos a resolver nuevas características y mejoras a la aplicación. Lo que se suponía que era un proyecto de 3 meses terminó conmigo convirtiéndome en el desarrollador líder y ayudando a vender al cliente en mover desde un sistema de diseño legacy a Material UI y alejarse de AngularJS a React, y jugué un gran papel en configurar el esqueleto del nuevo código base y construí muchas de las pantallas de material desde cero.",
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
                "Metodología Ágil",
                "Arquitectura MVC",
              ],
              date: "Agosto 2017 - Diciembre 2019",
              icon: "mdi-train",
            },
            {
              title: "Sociedad IBM DeepSense",
              description:
                "Fui uno de los pocos elegidos para tomar parte en un rol que requería que un IBMer trabajara con y asistiera a una de las mayores inversiones de IBM en el Atlántico de Canadá (DeepSense) con base en la Universidad Dalhousie. IBM donó un Centro de Datos masivo con HPCs y parte del acuerdo era que tendrían un Asesor Técnico para apoyarlos con varios proyectos de investigación y colaboraciones de empresa. Este fue un paso alejado de Ingeniería de Software pero me dio la oportunidad de explorar cómo funcionan los proyectos de investigación, construir sociedades con nuevas empresas, hacer networking, y obtener un entendimiento de cómo podemos usar AI responsablemente para resolver algunos de los mayores problemas del sector oceánico.",
              skills: [
                "Modelos AI/ML",
                "Análisis de Datos",
                "Python",
                "Jupyter Notebooks",
                "HPCs",
                "Visualización de Datos",
                "Networking",
                "Sector Oceánico",
              ],
              date: "Diciembre 2019 - Diciembre 2020",
              icon: "mdi-database",
            },
            {
              title: "Dashboard de Investigación Covid-19 IBM/UNB",
              description:
                "Mientras trabajaba en el equipo nacional de Innovación, surgió una oportunidad donde se requería experiencia full-stack y fui seleccionado para ayudar a construir un dashboard que mostraría datos alimentados por modelos de investigación para entender cómo se estaba propagando Covid-19 dentro de las escuelas en Terranova y Labrador y estrategias potenciales de mitigación. Configuré el proyecto en React, Node.js en el backend, y desplegué la aplicación a IBM Cloud vía Pipeline. El proyecto fue reconocido por ACM y terminó siendo publicado.",
              skills: [
                "ReactJS",
                "NodeJS",
                "Visualización de Datos",
                "Git",
                "Metodología Ágil",
                "IBM Cloud",
                "IBM Cloudant",
              ],
              date: "Abril 2020 - Julio 2020",
              icon: "mdi-chart-bar",
            },
            {
              title: "Servicios Financieros",
              description:
                "Este proyecto tomé el rol de Ingeniero de Software enfocado principalmente en el lado backend. Nuestro objetivo era aprovechar Confluent Control Center para crear aplicaciones de streaming, ingerir datos, mapearlos, y empujarlos de vuelta a Control Center. Seguimos el protocolo de mapeo de datos BIAN. Creé varias aplicaciones de microdatos de streaming diferentes aprovechando principalmente Apache Kafka Streams para hacer streaming desde diferentes tópicos, realizar joins, poblar tópicos, y enviar los mensajes. Fuimos capaces de ingerir millones de datos sentados en un servidor MQ y desplegar nuestros streamers a producción y obtener los datos residiendo dentro de Control Center siguiendo protocolos BIAN.",
              skills: [
                "Java",
                "Apache Kafka Streams",
                "Confluent Control Center",
                "Kafka",
                "Git",
                "Metodología Ágil",
                "Spring Boot",
                "OpenShift/Kubernetes",
                "Jenkins",
              ],
              date: "Diciembre 2021 - Noviembre 2022",
              icon: "mdi-bank",
            },
            {
              title: "Servicios de Renovación del Hogar",
              description:
                "Este proyecto fue mi primera experiencia dentro del dominio Retail y me uní a un equipo existente que estaba construyendo aplicaciones para permitir que un profesional certificado venga a tu lugar de residencia e instale varios muebles/electrodomésticos en tu casa. Este fue un equipo ágil en el cual aprovechamos Vue.js como nuestro framework primario y un BFF como nuestro middleware con GCP siendo nuestro proveedor de nube K8s. Muy similar a mi primer proyecto en IBM, demostré la capacidad de aprender rápidamente, entregar código de calidad probado por unidades que mejor se ajustaría a los criterios de la característica que estaba construyendo. En muchas ocasiones fui considerado un activo para el equipo y realmente disfruté este engagement.",
              skills: [
                "VueJS",
                "NodeJS",
                "Git",
                "Metodología Ágil",
                "GCP",
                "Kubernetes",
                "Jenkins",
                "GraphQL",
                "Contentful",
                "SEO",
              ],
              date: "Diciembre 2021 - Octubre 2022",
              icon: "mdi-shovel",
            },
            {
              title: "Proveedor Privado de Servicios Médicos",
              description:
                "Este proyecto fue corto pero el equipo logró entregar en nuestros requerimientos en un pequeño marco de tiempo. El cliente tenía un portal existente que no era mantenible por personas no-técnicas y quería algo que alguien no-técnico pudiera actualizar/cambiar sin tener que contratar ingenieros. Así que nos contrataron para construirles una solución personalizada basada en React en Microsoft Power Apps. El cliente tenía múltiples otros proveedores apoyando así que nuestra parte era construir las pantallas React y permitir que los equipos apropiados se integraran con Power Apps.",
              skills: ["ReactJS", "Microsoft Power Apps", "Azure DevOps", "Metodología Ágil"],
              date: "Octubre 2022 - Enero 2023",
              icon: "mdi-medical-bag",
            },
            {
              title: "Sector Público",
              description:
                "Este proyecto fue la primera vez que fui nombrado como Tech Lead dentro de nuestro equipo Agile. Fuimos encargados de construir una aplicación que permitiría a no-ciudadanos aplicar para renovar su pasaporte en línea. Estuve a cargo de alrededor de 7 devs, mezclados entre backend y frontend, y también trabajé en entrega de código. Logramos construir un sistema complejo que se integra con los servicios SOAP existentes del cliente a través de nuestras aplicaciones Spring Boot y entrega desde/hacia el frontend Angular. La solución fue desplegada a AWS y aprovechamos varios servicios como S3, Dynamo, ECS, ECR, CloudWatch, ALB, etc. Estuve realmente orgulloso de lo que el equipo logró dado cuán diverso era el equipo en términos de habilidades, ubicación, y proficiencia con el stack tecnológico.",
              skills: [
                "Angular",
                "NodeJS",
                "Express",
                "AWS",
                "Spring Boot",
                "Git",
                "Metodología Ágil",
                "Arquitectura MVC",
                "Servicios SOAP",
                "Cron Jobs",
              ],
              date: "Enero 2023 - Enero 2024",
              icon: "mdi-passport",
            },
            {
              title: "Servicios Financieros",
              description:
                "Fui traído de vuelta al equipo IBM pero esta vez en un espacio diferente al equipo de streaming de datos. Esta vez fui Tech Lead para una tripulación de desarrollo full-stack consistiendo de desarrolladores IBM y del Cliente. Logramos construir varias nuevas capacidades para usuarios finales bancarios y para agentes orientados al cliente. Fui responsable de liderar, definir enfoques de solución, asegurar que todos tuvieran lo que necesitan, y revisar el código que entregamos. Trabajamos en varios sistemas diferentes dentro del ecosistema de la empresa y fuimos responsables desde crear la rama inicial hasta el despliegue a producción. Hacia el final de este engagement fui desplegado como Tech Lead a un Tiger team cuyo objetivo principal era abordar algunos de los items de más alta prioridad reportados por clientes en el cual continué asesorando al equipo mientras también contribuía código.",
              skills: [
                "Java",
                "Spring Boot",
                "Angular",
                "RxJS",
                "Git",
                "Metodología Ágil",
                "Material UI",
                "Jenkins",
                "OpenShift/Kubernetes",
                "Logscale",
              ],
              date: "Enero 2024 - Marzo 2025",
              icon: "mdi-credit-card",
            },
            {
              title: "Proveedor de Servicios Financieros",
              description:
                "Me uní a un nuevo cliente dentro del sector bancario como Tech Lead/Scrum Master para un equipo responsable de re-escribir una UI PHP antigua en tecnología moderna como React.js y Material UI. Escribí menos código en este proyecto y trabajé principalmente como scrum master/BSA, trabajando con el product owner para entender los requerimientos y cerrar la brecha entre lo que es posible técnicamente y lo que es realista entregar en términos de fechas y viabilidad técnica. Mientras realmente disfruté con quienes estaba trabajando, encontré que no era capaz de identificar un camino dentro de nuestro programa para convertirme en Arquitecto, así que graciosamente encontré un reemplazo y salí de la cuenta.",
              skills: [
                "React.js",
                "Scrum Master",
                "Análisis de Negocios",
                "Material UI",
                "Git",
                "Metodología Ágil",
              ],
              date: "Marzo 2025 - Enero 2026",
              icon: "mdi-bank-transfer",
            },
            {
              title: "Servicios Financieros",
              description:
                "Este es mi engagement actual en IBM y realmente lo estoy disfrutando. Soy el Tech Lead para mi tripulación pero también proporciono soporte diario a otros individuos en otras tripulaciones. Lidero por ejemplo, aseguro que las cosas se hagan de la manera correcta alineándose a los altos y bien definidos estándares del banco, y estamos entregando en nuestros items de sprint. Este es uno de los proyectos más desafiantes que he tenido que entregar ya que no solo estoy liderando a mi equipo a la victoria, también estoy escribiendo código para asegurar que cumplamos con nuestro deadline. El éxito continuo y resultados que hemos tenido en este banco nos ha permitido seguir regresando, tiempo y tiempo de nuevo para entregar en la próxima gran cosa.",
              skills: [
                "Java",
                "Spring Boot",
                "Angular",
                "RxJS",
                "Git",
                "Metodología Ágil",
                "Material UI",
                "Jenkins",
                "OpenShift/Kubernetes",
              ],
              date: "Enero 2026 - Presente",
              icon: "mdi-headset",
            },
          ].reverse(),
        },
        {
          title: "Especialista IT (CO-OP)",
          company: "IBM",
          duration: "Julio 2016 - Agosto 2016",
          logo: IbmLogo,
          description:
            "Esta fue mi primera experiencia dentro de la industria IT después de completar mi primer año de estudios. Me uní a IBM caminando por las puertas sin saber qué esperar. Las personas que conocí, las habilidades que adquirí, y las experiencias que aún valoro grandemente hasta el día de hoy. Viniendo de un segundo semestre enfocado en base de datos, la programación era nueva para mí. Mi colega y yo fuimos asignados para construir una aplicación web full-stack usando un stack moderno (AngularJS, Node.js), sí, eran modernos en ese momento, y lo teníamos desplegado a Bluemix, que ahora es formalmente IBM Cloud. Esta fue una experiencia increíble para mí, y mi desempeño fue tal que me ofrecieron empleo a tiempo completo pendiente de graduación el siguiente año.",
          projects: [
            {
              title: "Herramienta de Incorporación Welcome Mat",
              description:
                "El proyecto welcome mat fue una idea donde nuestro equipo CO-OP se reuniría y construiría una aplicación que ayudara a rastrear el pipeline de proyectos entrando a nuestro departamento e identificar ingenieros que tenían ese conjunto de habilidades para que pudieran ser alineados a la oportunidad. La aplicación estaba asegurada usando OAuth y aprovechaba SSO para permitir solo que IBMs hicieran login a nuestro sitio. Tenía un frontend AngularJS y estaba impulsado por un backend Node.js Express, y para persistencia de datos, aprovechamos Cloudant. Para el final de ~3 meses teníamos la aplicación desplegada y funcionando en Bluemix que ahora se conoce como IBM Cloud. Los stakeholders estaban muy impresionados con el trabajo que habíamos hecho en tal corto timeline.",
              skills: [
                "AngularJS",
                "NodeJS",
                "Bootstrap",
                "Bluemix",
                "Git",
                "Metodología Ágil",
                "Arquitectura MVC",
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

export default EsStrings;
