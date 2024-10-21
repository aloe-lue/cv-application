const generalInfoData = {
  firstName: "John",
  LastName: "Doe",
  Mobile: "1234 12345",
  Email: "this-is-not-real-email@yahoo.com",
  location: "Random Street California Road",
};

const educationalExperience = [
  {
    year: "2119-2123",
    school: "Unreal University",
    nameOfStudy: "BSe Computer Science",
    titleOfStudy: "1st Class Degree with Professional Placement",
    key: crypto.randomUUID(),
  },
  {
    year: "2117-2119",
    school: "Random College",
    nameOfStudy: "BTEC National Diploman in IT",
    titleOfStudy: "Grade Achieved: Triple Distinction",
    key: crypto.randomUUID(),
  },
  {
    year: "2111-2117",
    school: "Random Secondary School",
    nameOfStudy: "",
    titleOfStudy: "8 GCSEs at grades A*-C",
    key: crypto.randomUUID(),
  },
];

const practicalExperience = [
  {
    key: crypto.randomUUID(),
    companyName: "Impossible Company",
    positionTitle: "Software Engineer",
    date: "Jun 2118 - Present",
    mainResponsibility: [
      {
        responsibility: "Mentoring and training new IT staff",
        key: crypto.randomUUID(),
      },
      {
        responsibility:
          "Researching, installing and configuring new computer systems",
        key: crypto.randomUUID(),
      },
      {
        responsibility:
          "Ensuring that all relevant licensing laws are adhered to",
        key: crypto.randomUUID(),
      },
      {
        responsibility: "Keeping up to date with the latest technologies",
        key: crypto.randomUUID(),
      },
    ],
  },
  {
    key: crypto.randomUUID(),
    companyName: "Unreal House Ltd.",
    positionTitle: "IT Support Officer",
    date: "Oct 2113 - Jun 2118",
    mainResponsibility: [
      {
        key: crypto.randomUUID(),
        responsibility:
          "Provided extensive IT support to internal and external stakeholders",
      },
      {
        key: crypto.randomUUID(),
        responsibility:
          "Installed and configured hardware operating systems and applications",
      },
      {
        key: crypto.randomUUID(),
        responsibility:
          "Monitored and maintained computer systems and networks",
      },
      {
        key: crypto.randomUUID(),
        responsibility: "Resolved, diagnosed and solved network",
      },
    ],
  },
];

export { generalInfoData, educationalExperience, practicalExperience };
