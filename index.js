const expDiv = document.getElementById("experience");
const edDiv = document.getElementById("education");
const workedRecentlyDiv = document.getElementById("workedOnRecently");
const familiarDiv = document.getElementById("familiarWith");
const printMeDiv = document.getElementById("printMe");

printMeDiv.addEventListener("click", () => {
  printMeDiv.style.display = "none";
  window.print();
  printMeDiv.style.display = "block";
});

function renderExperience() {
  const expData = getExpData();

  const template = expData.reduce((acc, exp) => {
    acc += `
    <article>
    <h2>
      <span class="org-name">${exp.organization},</span>
      <span class="exp-sub__text"> ${exp.location} — ${exp.designation}</span>
    </h2>
    <p class="from-to">${exp.workedFrom} - ${exp.workedTo}</p>

    <ul> 
      ${exp.didWhat.reduce((liAcc, work) => (liAcc += `<li>${work}</li>`), "")}
    </ul>
  </article>
  `;

    return acc;
  }, "");

  expDiv.innerHTML = template;
}

function renderEducation() {
  const edData = getEdData();

  const template = edData.reduce((acc, ed) => {
    acc += `
    <article>
    <h2>
      <span class="org-name">${ed.name},</span>
      <span class="exp-sub__text"> ${ed.location} — ${ed.course}</span>
    </h2>
    <p class="from-to">${ed.fromDate} - ${ed.toDate} - <span class="agreegate">${ed.aggregate}</span></p>
    </article>
    `;

    return acc;
  }, "");

  edDiv.innerHTML = template;
}

function renderSkills() {
  const { workedOnRecently, familiarWith } = getSkillData();

  const workedRecentlyTemplate = workedOnRecently.reduce(
    (acc, skill) =>
      (acc += `
    <p><span class="skill-title">${skill.category} : </span> ${skill.value}</p>
  `),
    ""
  );

  const familiarWithTemplate = familiarWith.reduce(
    (acc, skill) =>
      (acc += `
    <p><span class="skill-title">${skill.category} : </span> ${skill.value}</p>
  `),
    ""
  );

  workedRecentlyDiv.innerHTML = workedRecentlyTemplate;
  familiarDiv.innerHTML = familiarWithTemplate;
}

(function main() {
  renderExperience();
  renderEducation();
  renderSkills();
})();

function getExpData() {
  const experience = [
    {
      organization: "EdgeVerve Systems Ltd",
      location: "Pune",
      designation: "Product Engineer",
      workedFrom: "OCT 2019",
      workedTo: "PRESENT",

      didWhat: [
        `Started working on the frontend part of a product which was using Polymer (1.x) at the frontend side and loopback at backend.`,
        `Quickly learned Angular framework and created a boilerplate with scalable architecture to be used across the org’s different erent projects.`,
        `Took a lead and worked on the migration of a Polymer based application into Angular with UI/UX revamp.`,
        `Used ng-zorro, chart.js, ngx-translate, etc external libraries to achieve functional requirements.`,
        `Implemented some [granular] features like rbac, i18n, token expiration popup, custom reusable ﬁlter, etc.`,
        `Worked on UI responsiveness to accommodate multiple screen sizes. Contributed to multiple releases.`,
      ],
    },

    {
      organization: "CauseCode Technologies",
      location: "Pune",
      designation: "Software Engineer",
      workedFrom: "FEB 2018",
      workedTo: "SEPT 2019",

      didWhat: [
        `Joined as a fullstack developer, explored Typescript, Node.js, AWS lambda, and GraphQL technologies and migrated an entire backend from RESTful to GraphQL.`,
        `Worked on Frontend using React.js, React Native for web and mobile applications, Backend using Node.js, AWS Lambdas with PostgreSQL and MongoDB at the DB layer.`,
        `Used AWS services such as S3, RDS, Cognito, Lightsail, IAM, etc.`,
        `Mentored freshers to get on board, managed releases.`,
      ],
    },

    {
      organization: "Tata Consultancy Services",
      location: "Pune",
      designation: "ASE Trainee",
      workedFrom: "FEB 2017",
      workedTo: "JAN 2018",

      didWhat: [
        `Joined as a Graduate Hire, trained on .NET technologies.`,
        `Worked on Enterprise projects as part of the development team and support.`,
      ],
    },
  ];

  return experience;
}

function getEdData() {
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

  return edData;
}

function getSkillData() {
  const workedOnRecently = [
    {
      category: `Languages`,
      value: `Javascript, Typescript`,
    },
    {
      category: `Frontend`,
      value: `Angular, React.js, HTML[5], CSS[3], Less, Saas, Scss, Ant.design, ng-zorro, Bootstrap, Material UI, chart.js, d3.js, karma, jasmine, jest`,
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

  return { workedOnRecently, familiarWith };
}
