import GeneralInfo from "./components/general-info.jsx";
import EducationalExperience from "./components/educational-experience.jsx";
import PracticalExperience from "./components/practical-experience.jsx";
import {
  GenInfoSection,
  EducExpSection,
  PractExpSection,
} from "./components/display.jsx";
import { useState } from "react";
import {
  educationalExperience,
  generalInfoData,
  practicalExperience,
} from "./components/data.js";
import "./style/style.css";

const App = () => {
  const [genInfo, setGenInfo] = useState(generalInfoData);
  const [educExp, setEducExp] = useState(educationalExperience);
  const [practExp, setPractExp] = useState(practicalExperience);
  const [isCvShow, setIsCvShow] = useState(false);

  const { firstName, LastName, Mobile, Email, location } = genInfo;

  const handleShowCv = () => {
    setIsCvShow(!isCvShow);
  };
  const handleGenInfo = (bunch) => {
    setGenInfo(bunch);
  };

  return (
    <>
      <header>
        <h1>CV Application</h1>
        <button onClick={() => handleShowCv()}>
          {isCvShow ? "CV Form" : "Display Cv"}
        </button>
      </header>
      <main>
        <div className="main-content">
          {!isCvShow && (
            <div className="cv-form">
              <GeneralInfo
                genInfo={genInfo}
                handler={handleGenInfo}
              ></GeneralInfo>

              <EducationalExperience
                educExpArray={educExp}
                handler={setEducExp}
              ></EducationalExperience>

              <PracticalExperience
                practExpArray={practExp}
                handler={setPractExp}
              ></PracticalExperience>
            </div>
          )}
          {isCvShow && (
            <div className="CV">
              <div className="cv-output">
                <GenInfoSection
                  firstName={firstName}
                  LastName={LastName}
                  Mobile={Mobile}
                  Email={Email}
                  location={location}
                ></GenInfoSection>

                {educExp.length > 0 && (
                  <EducExpSection array={educExp}></EducExpSection>
                )}
                {practExp.length > 0 && (
                  <PractExpSection array={practExp}></PractExpSection>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
