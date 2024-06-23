import React from "react";

import LeftCategories from "../../components/LeftCategories/LeftCategories";
import LeftSide from "../../components/layout/LeftSide";
import WholeScreen from "../../components/layout/WholeScreen";
import RightSide from "../../components/layout/RightSide";
import RightSideView from "../../components/RightSideView";

const Home = () => {
  return (
    <React.Fragment>
      <WholeScreen>
        <LeftSide>
          <LeftCategories />
        </LeftSide>
        <RightSide>
          <RightSideView />
        </RightSide>
      </WholeScreen>
    </React.Fragment>
  );
};

export default Home;
