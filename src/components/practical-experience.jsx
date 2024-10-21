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

const MainResponsibility = ({
  origKey,
  handleDeleteResponsibility,
  stateVar,
  handler,
  isReadOnly,
}) => {
  const [value, setValue] = useState(stateVar.responsibility);

  return (
    <li className={origKey}>
      <label htmlFor={origKey}>Responsiblity: </label>
      <textarea
        rows="5"
        name={origKey}
        id={origKey}
        disabled={isReadOnly}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></textarea>
      <Button
        className={"delete"}
        handler={handleDeleteResponsibility}
        btnTxt={"Delete"}
        stateVar={origKey}
      ></Button>

      <button
        className={"save"}
        onClick={(event) => {
          event.preventDefault();
          handler(origKey, {
            ...stateVar,
            responsibility: value,
          });
        }}
      >
        Save
      </button>
    </li>
  );
};

const Input = ({
  type,
  name,
  id,
  label,
  labelText,
  stateVar,
  handler,
  isReadOnly,
}) => {
  return (
    <li>
      <label htmlFor={label}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={id}
        disabled={isReadOnly}
        value={stateVar}
        onChange={(event) => {
          handler(event.target.value);
        }}
      />
    </li>
  );
};

const EmploymentForm = ({
  handleDeleteForm,
  handleSaveForm,
  origKey,
  employmentValue,
}) => {
  const { date, positionTitle, mainResponsibility, companyName } =
    employmentValue;
  const [year, setYear] = useState(date);
  const [company, setCompany] = useState(companyName);
  const [position, setPosition] = useState(positionTitle);
  const [responsibilities, setResponsibilities] = useState(mainResponsibility);
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleResponsibility = (key, obj) => {
    const responsibility = responsibilities.map((element) => {
      if (element.key === key) {
        return obj;
      }
      return element;
    });

    setResponsibilities(responsibility);
  };

  const handleDeleteResponsibility = (key) => {
    const responsibility = responsibilities.filter(
      (element) => element.key !== key
    );
    setResponsibilities(responsibility);
  };

  return (
    <form action="">
      <fieldset>
        <legend>
          <h3>Employment</h3>
        </legend>
        <ul>
          <Input
            type="text"
            name="year-of-employment"
            id="year-of-employment"
            label="year-of-employment"
            labelText="Year of Employment: "
            stateVar={year}
            isReadOnly={isReadOnly}
            handler={setYear}
          ></Input>
          <Input
            type="text"
            name="company-name"
            id="company-name"
            label="company-name"
            labelText="Company Name: "
            stateVar={company}
            isReadOnly={isReadOnly}
            handler={setCompany}
          ></Input>
          <Input
            type="text"
            name="position-title"
            id="position-title"
            label="position-title"
            labelText="Position Title: "
            stateVar={position}
            isReadOnly={isReadOnly}
            handler={setPosition}
          ></Input>
        </ul>

        <h4>Main Responsibility</h4>

        <ul>
          {responsibilities.map((element) => {
            return (
              <MainResponsibility
                key={element.key}
                origKey={element.key}
                stateVar={element}
                handler={handleResponsibility}
                isReadOnly={isReadOnly}
                handleDeleteResponsibility={handleDeleteResponsibility}
              ></MainResponsibility>
            );
          })}

          <li>
            <Button
              className={"add"}
              handler={setResponsibilities}
              stateVar={responsibilities.concat({
                key: crypto.randomUUID(),
                responsibility: "",
              })}
              btnTxt={"Add Main Responsibility + "}
            ></Button>
          </li>
          <li>
            <button
              onClick={(event) => {
                event.preventDefault();
                setIsReadOnly(!isReadOnly);
              }}
              className="edit"
            >
              Edit
            </button>
          </li>
          <li>
            <button
              onClick={(event) => {
                event.preventDefault();
                handleDeleteForm(origKey);
              }}
              className="delete"
            >
              Delete
            </button>
          </li>

          <li>
            <button
              onClick={(event) => {
                event.preventDefault();
                handleSaveForm(origKey, {
                  ...employmentValue,
                  companyName: company,
                  positionTitle: position,
                  date: year,
                  mainResponsibility: responsibilities,
                });
              }}
              className="save"
            >
              Save
            </button>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

const PracticalExperience = ({ practExpArray, handler }) => {
  const [employmentForms, setEmploymentForm] = useState(practExpArray);

  const handleDeleteForm = (key) => {
    setEmploymentForm(employmentForms.filter((element) => element.key !== key));
  };

  const handleSaveForm = (key, replacement) => {
    const keyOfForm = employmentForms.map((element) => {
      if (element.key === key) {
        return replacement;
      }
      return element;
    });
    setEmploymentForm(keyOfForm);
  };

  return (
    <section className="practical-experience">
      <div className="practical-experience">
        <h2>Practical Experience</h2>
        <div className="employment-forms">
          {employmentForms.map((element) => {
            return (
              <EmploymentForm
                key={element.key}
                origKey={element.key}
                handleDeleteForm={handleDeleteForm}
                handleSaveForm={handleSaveForm}
                employmentValue={element}
              ></EmploymentForm>
            );
          })}
        </div>
        <Button
          handler={setEmploymentForm}
          stateVar={employmentForms.concat({
            companyName: "",
            positionTitle: "",
            date: "",
            key: crypto.randomUUID(),
            mainResponsibility: [],
          })}
          className="add"
          btnTxt={"Add Practical Experience + "}
        ></Button>
        <Button
          handler={handler}
          stateVar={employmentForms}
          className="add"
          btnTxt={"Submit saved Practical Experience"}
        ></Button>
      </div>
    </section>
  );
};

export default PracticalExperience;
