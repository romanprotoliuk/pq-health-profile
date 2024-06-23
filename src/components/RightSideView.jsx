import React, { useContext } from "react";

const RightSideView = () => {
  //  const { section } = useContext(SectionContext);

  //   const renderSection = () => {
  //     switch (section) {
  //       case "User Info":
  //         return <UserInfo />;
  //       case "Blood Panel":
  //         return <BloodPanel />;
  //       case "Health Predisposition Report":
  //         return <HealthPredisposition />;
  //       case "Bioresonace Test":
  //         return <BioresonaceTest />;
  //       case "Pharmacognetics Report":
  //         return <PharmacogeneticsReport />;
  //       case "All":
  //         return <AllSections />;
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <React.Fragment>
      {/* {renderSection()} */}
      <div>
        <h1>Right Side</h1>
      </div>
    </React.Fragment>
  );
};

export default RightSideView;
