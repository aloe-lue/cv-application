import { useState } from "react";

const Button = ({
  className = "submit",
  handler = () => "add func",
  stateVar = "add state var",
  btnTxt = "submit",
}) => {
  return (
    <button
      className={className}
      onClick={(event) => {
        event.preventDefault();
        handler(stateVar);
      }}
    >
      {btnTxt}
    </button>
  );
};

const Input = ({
  label,
  labelText,
  name,
  id,
  type,
  stateVar,
  handler,
  editable,
}) => {
  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <input
        required
        type={type}
        name={name}
        id={id}
        value={stateVar}
        disabled={editable}
        onChange={(event) => handler(event.target.value)}
      />
    </>
  );
};

const Education = ({ handleDelete, origKey, values, handleSetEducExp }) => {
  const { titleOfStudy, nameOfStudy, year, school } = values;

  const [titleStudy, setTitleOfStudy] = useState(titleOfStudy);
  const [nameStudy, setNameOfStudy] = useState(nameOfStudy);
  const [schoolYear, setSchoolYear] = useState(year);
  const [schoolName, setSchoolName] = useState(school);
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <form action="" className={origKey}>
      <fieldset>
        <legend>
          <h3 className="educ-exp-h2">Education</h3>
        </legend>
        <ul>
          <li>
            <Input
              label="title-of-study"
              labelText="Title of Study: "
              name="title-of-study"
              id="title-of-study"
              type="text"
              editable={isReadOnly}
              stateVar={titleStudy}
              handler={setTitleOfStudy}
            ></Input>
          </li>
          <li>
            <Input
              label="name-of-study"
              labelText="Name of Study: "
              name="name-of-study"
              id="name-of-study"
              type="text"
              editable={isReadOnly}
              stateVar={nameStudy}
              handler={setNameOfStudy}
            ></Input>
          </li>

          <li>
            <Input
              label="school-year"
              labelText="School Year: "
              name="school-year"
              id="school-year"
              type="text"
              editable={isReadOnly}
              stateVar={schoolYear}
              handler={setSchoolYear}
            ></Input>
          </li>
          <li>
            <Input
              label="school-name"
              labelText="School Name: "
              name="school-name"
              id="school-name"
              type="text"
              editable={isReadOnly}
              stateVar={schoolName}
              handler={setSchoolName}
            ></Input>
          </li>
          <li>
            <button
              className="edit"
              onClick={(e) => {
                e.preventDefault();
                setIsReadOnly(!isReadOnly);
              }}
            >
              {isReadOnly ? "Edit" : "Read Only"}
            </button>
          </li>
          <li>
            <button
              type="submit"
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(origKey);
              }}
            >
              Delete
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSetEducExp(origKey, {
                  year: schoolYear,
                  school: schoolName,
                  nameOfStudy: nameOfStudy,
                  titleOfStudy: titleOfStudy,
                  key: crypto.randomUUID(),
                });
              }}
            >
              Save
            </button>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

const EducationalExperience = ({ educExpArray, handler }) => {
  const [educationExp, setEducationExp] = useState(educExpArray);

  const handleDelete = (key) => {
    setEducationExp(educationExp.filter((element) => element.key !== key));
  };

  const handleSetEducExp = (elementKey, obj) => {
    const educExp = educationExp.map((value) => {
      if (value.key === elementKey) {
        return obj;
      }
      return value;
    });

    setEducationExp(educExp);
  };

  return (
    <section className="educational-experience">
      <div className="educational-experience">
        <h2>Educational Experience</h2>
        <div className="education-forms">
          {educationExp.map((exp) => (
            <Education
              values={exp}
              key={exp.key}
              origKey={exp.key}
              handleDelete={handleDelete}
              handleSetEducExp={handleSetEducExp}
              educationExp={educationExp}
            ></Education>
          ))}
        </div>
        <Button
          type="submit"
          btnTxt="Add Educational Experience + "
          handler={setEducationExp}
          stateVar={educationExp.concat({
            year: "",
            school: "",
            nameOfStudy: "",
            titleOfStudy: "",
            key: crypto.randomUUID(),
          })}
          className={"add"}
        ></Button>

        <button
          className="add"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handler(educationExp);
          }}
        >
          Submit Saved Educational Experience
        </button>
      </div>
    </section>
  );
};

export default EducationalExperience;
