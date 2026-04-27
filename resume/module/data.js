const webexJsSdkLink = `<a href="https://github.com/webex/webex-js-sdk" target="_blank" rel="noopener noreferrer">webex-js-sdk</a>`;
const ccSDKLink = `<a href="https://github.com/webex/webex-js-sdk/tree/next/packages/%40webex/contact-center" target="_blank" rel="noopener noreferrer">Contact Center SDK</a>`;
const meetingsSDKLink = `<a href="https://github.com/webex/webex-js-sdk/tree/next/packages/%40webex/plugin-meetings" target="_blank" rel="noopener noreferrer">Meetings SDK</a>`;
const callingSDKLink = `<a href="https://github.com/webex/webex-js-sdk/tree/next/packages/calling" target="_blank" rel="noopener noreferrer">Calling SDK</a>`;
const widgetRepoLink = `<a href="https://github.com/webex/widgets" target="_blank" rel="noopener noreferrer">widgets</a>`
const controlHubLink = `<a href="https://admin.webex.com/" target="_blank" rel="noopener noreferrer">Control Hub</a>`;
const developerPortalLink = `<a href="https://developer.webex.com/" target="_blank" rel="noopener noreferrer">Developer Portal</a>`;
const multiStreamQuickStartLink = `<a href="https://developer.webex.com/meeting/docs/sdks/webex-meetings-sdk-web-multistream-quick-start" target="_blank" rel="noopener noreferrer">MultiStream QuickStart</a>`;
const multiStreamComprehensiveLink = `<a href="https://developer.webex.com/meeting/docs/multistream-comprehensive-guide" target="_blank" rel="noopener noreferrer">MultiStream Comprehensive</a>`;
const ccWidgetsDocsLink = `<a href="https://developer.webex.com/webex-contact-center/docs/cc-web-widgets-introduction" target="_blank" rel="noopener noreferrer">Contact Center React Widgets</a>`;
const sipRfcLink = `<a href="https://www.rfc-editor.org/rfc/rfc3261" target="_blank" rel="noopener noreferrer">SIP</a>`;
const webRTCLink = `<a href="https://webrtc.org/" target="_blank" rel="noopener noreferrer">WebRTC</a>`;
const webRtcYoutubeLink = `<a href="https://www.youtube.com/watch?v=twngKzYueIs&list=PL036qz1Cm84kxchs7dVzHIsBN1JxG5Aek" target="_blank" rel="noopener noreferrer">WebRTC Fundamentals Tutorials</a>`;

const experience = [
  {
    organization: 'Cisco Systems | Webex',
    location: 'Bangalore',
    designation: 'Software Engineer III',
    workedFrom: 'MAY 2022',
    workedTo: 'PRESENT',

    didWhat: [
      `Started as a contributor on the javascript ${meetingsSDKLink} on ${webexJsSdkLink} repo.`,
      `Contributed to the ${controlHubLink} to add settings page for shortcut embedded apps. Tech used: Angular, RxJs, NgRx, Nx Workspace (Micro Frontend), etc`,
      `Contributed to the AI assistant UI/UX on ${developerPortalLink}. Lead the development of the frontend feature and made major contributions during the feature release. Tech used: React, Typescript, LLM Proxy, etc`,
      `Contributed to the ${developerPortalLink} for multiple docs. e.g. -- ${multiStreamQuickStartLink}, ${multiStreamComprehensiveLink} and all the docs under ${ccWidgetsDocsLink}`,
      `Self taught realtime technologies such as ${sipRfcLink}, ${webRTCLink}, etc and gave sessions to the team on the same to understand the core foundation of the products being developed. Also, created ${webRtcYoutubeLink} for future reference.`,
      `Contributed to the development of ${ccSDKLink} and ${widgetRepoLink}.`,
      `Contributed to the Webex ${callingSDKLink} for various smaller tasks and to the major refactor of the transport protocol from http to websocket for all sort or request/response and notifications. Tech used: Node.js, Typescript, WebSocket, WebRTC, SIP, etc`,
      `Worked on multiple features and bug fixes across the projects mentioned above.`,
    ],
  },
  {
    organization: 'EdgeVerve Systems Ltd',
    location: 'Pune',
    designation: 'Member Of Technical Staff',
    workedFrom: 'OCT 2019',
    workedTo: 'MAY 2022',

    didWhat: [
      `Started working on the frontend part of a product which was using Polymer (1.x) at the frontend side and loopback at backend.`,
      `Quickly learned Angular framework and created a boilerplate with scalable architecture to be used across the org’s different projects.`,
      `Took a lead in upgrading the Polymer based application into Angular with next generation UI/UX containing many new additional features.`,
      `Used ng-zorro, chart.js, ngx-translate, etc external libraries to achieve functional requirements.`,
      `Implemented some [granular] features like rbac, i18n, token expiration popup, custom reusable ﬁlter, etc.`,
      `Worked on UI responsiveness to accommodate multiple screen sizes. Contributed to multiple releases.`,
    ],
  },

  {
    organization: 'CauseCode Technologies',
    location: 'Pune',
    designation: 'Software Engineer',
    workedFrom: 'FEB 2018',
    workedTo: 'SEPT 2019',

    didWhat: [
      `Joined as a fullstack developer, explored Typescript, Node.js, AWS lambda, and GraphQL technologies and migrated an entire backend from RESTful to GraphQL.`,
      `Worked on Frontend using React.js, React Native for web and mobile applications, Backend using Node.js, AWS Lambdas with PostgreSQL and MongoDB at the DB layer.`,
      `Used AWS services such as S3, RDS, Cognito, Lightsail, IAM, etc.`,
      `Mentored freshers to get on board, managed releases.`,
    ],
  },

  {
    organization: 'Tata Consultancy Services',
    location: 'Pune',
    designation: 'ASE Trainee',
    workedFrom: 'FEB 2017',
    workedTo: 'JAN 2018',

    didWhat: [
      `Joined as a Graduate Hire, trained on .NET technologies.`,
      `Worked on Enterprise projects as part of the development team and support.`,
    ],
  },
];

const edData = [
  {
    name: `Tezpur Central University`,
    location: `Tezpur (Assam)`,
    course: `B. Tech (CSE)`,
    fromDate: `AUGUST 2012`,
    toDate: `JULY 2016`,
    aggregate: `6.99 CGPA`,
  },

  {
    name: `SNNR College`,
    location: `Chamtha (Begusarai)`,
    course: `Intermediate`,
    fromDate: `APRIL 2009`,
    toDate: `MARCH 2011`,
    aggregate: `75% Aggregate`,
  },
];

const workedOnRecently = [
  {
    category: `Languages`,
    value: `Javascript, Typescript`,
  },
  {
    category: `Frontend`,
    value: `Angular, RxJs, NgRx, React.js, HTML[5], CSS[3], Less, Saas, Scss, Ant.design, ng-zorro, Bootstrap, Material UI, chart.js, karma, jasmine, jest`,
  },
  {
    category: `Server Runtime`,
    value: `Node.js, AWS Lambda`,
  },
  {
    category: `Backend`,
    value: `Express.js`,
  },
  {
    category: `API`,
    value: `RESTful and GraphQL`,
  },
  {
    category: `Version control system`,
    value: `Git, TFS`,
  },
  {
    category: `Project management tool`,
    value: `Trello, JIRA, GitHub, Bit Bucket`,
  },
];

const familiarWith = [
  {
    category: `Frontend`,
    value: `React-Native`,
  },
  {
    category: `Databases`,
    value: `PostgreSQL, MongoDB, ElasticSearch`,
  },
  {
    category: `DevOps`,
    value: `CloudFormation, S3, Lambda, RDS, IAM, Cognito, CloudWatch`,
  },
  {
    category: `Releases`,
    value: `Android and iOS`,
  },
  {
    category: `Others`,
    value: `Python, Docker`,
  },
];

export { experience, edData, workedOnRecently, familiarWith };
