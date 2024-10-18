const GenInfoSection = ({ firstName, LastName, location, Mobile, Email }) => {
  return (
    <>
      <section className="general-info">
        <h1>
          {firstName} {LastName}
        </h1>
        <p className="personal-location">{location}</p>
        <address className="personal-address">
          <a href={"tel:+" + Mobile}>{Mobile}</a>
          <a href={"mailto:" + Email}>{Email}</a>
        </address>
      </section>
    </>
  );
};

const EducExpSection = ({ array }) => {
  return (
    <>
      <section>
        <h2>Educational Experience</h2>
        <hr />
        {array.map(({ year, school, nameOfStudy, titleOfStudy, key }) => {
          return (
            <article key={key}>
              <div className="year-study-school">
                <b>{year}</b>
                <b>{nameOfStudy}</b>
                <b>{school}</b>
              </div>
              <ul className="title-of-studies">
                <li className="title-of-study">{titleOfStudy}</li>
              </ul>
            </article>
          );
        })}
      </section>
    </>
  );
};

const MainResponsibility = ({ mainResponsibility }) => {
  return (
    <ul className="main-responsibility">
      {mainResponsibility.map(({ responsibility, key }) => {
        return <li key={key}>{responsibility}</li>;
      })}
    </ul>
  );
};

const PractExpSection = ({ array }) => {
  return (
    <section className="practical-experience">
      <h2>Practical Experience</h2>
      <hr />
      {array.map(
        ({ positionTitle, companyName, date, mainResponsibility, key }) => {
          return (
            <article key={key}>
              <div className="date-position-company">
                <b>{date}</b>
                <b>{positionTitle}</b>
                <b>{companyName}</b>
              </div>

              <MainResponsibility
                mainResponsibility={mainResponsibility}
              ></MainResponsibility>
            </article>
          );
        }
      )}
    </section>
  );
};

export { GenInfoSection, EducExpSection, PractExpSection };
