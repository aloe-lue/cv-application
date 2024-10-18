const generalInfoData = {
  firstName: "David",
  LastName: "Gibbons",
  Mobile: "079 3316 8146",
  Email: "David.gibbons@live.co.uk",
  location: "Random Road California Road",
};

const educationalExperience = [
  {
    year: "2009-2013",
    school: "Aston University",
    nameOfStudy: "BSe Computer Science",
    titleOfStudy: "1st Class Degree with Professional Placement",
    key: crypto.randomUUID(),
  },
  {
    year: "2007-2009",
    school: "Hall Green College",
    nameOfStudy: "BTEC National Diploman in IT",
    titleOfStudy: "Grade Achieved: Triple Distinction",
    key: crypto.randomUUID(),
  },
  {
    year: "2000-2007",
    school: "Bournville Secondary School",
    nameOfStudy: "",
    titleOfStudy: "8 GCSEs at grades A*-C",
    key: crypto.randomUUID(),
  },
];

const practicalExperience = [
  {
    key: crypto.randomUUID(),
    companyName: "Maplins",
    positionTitle: "IT Manager",
    date: "Jun 2008 - Present",
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
    companyName: "Ladypool Warehouse Ltd.",
    positionTitle: "IT Support Officer",
    date: "Oct 2003 - Jun 2008",
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
