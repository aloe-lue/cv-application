import { useState } from "react";
import "../style/style.css";

const GeneralInfo = ({ handler, genInfo }) => {
  const [firstName, setFirstName] = useState(genInfo.firstName);
  const [lastName, setLastName] = useState(genInfo.LastName);
  const [mobile, setMobile] = useState(genInfo.Mobile);
  const [location, setLocation] = useState(genInfo.location);
  const [email, setEmail] = useState(genInfo.Email);
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <section className="general-info">
      <div className="general-info">
        <h2>General Info</h2>
        <form action="">
          <fieldset>
            <legend>
              <h3 className="h2-gen-info">Personal Info</h3>
            </legend>
            <ul>
              <li>
                <label htmlFor="first-name">First Name: </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  disabled={isReadOnly}
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </li>
              <li>
                <label htmlFor="last-name">Last Name: </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  disabled={isReadOnly}
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </li>
              <li>
                <label htmlFor="mobile">Mobile Number: </label>
                <input
                  type="text"
                  name="mobile"
                  disabled={isReadOnly}
                  id="mobile"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                />
              </li>
              <li>
                <label htmlFor="email">Email Address: </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled={isReadOnly}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </li>
              <li>
                <label htmlFor="location">Location: </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  disabled={isReadOnly}
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsReadOnly(!isReadOnly);
                  }}
                  className="edit"
                >
                  {isReadOnly ? "Edit" : "Read Only"}
                </button>
              </li>
            </ul>
          </fieldset>
        </form>

        <button
          type="submit"
          className="submit"
          onClick={(e) => {
            e.preventDefault();
            handler({
              ...genInfo,
              firstName: firstName,
              LastName: lastName,
              Mobile: mobile,
              location: location,
              Email: email,
            });
          }}
        >
          Submit General Information
        </button>
      </div>
    </section>
  );
};

export default GeneralInfo;
