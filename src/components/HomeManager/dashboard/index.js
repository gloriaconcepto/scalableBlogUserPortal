import React, { memo } from "react";
import CardUtility from "../../../utilities/sharesComponents/Card.js";
const ManagedDashBoardComponent = memo((props) => {
    return (
        <div>
            <CardUtility title={"Hello world card"} />
          
        </div>
    );
});

export default ManagedDashBoardComponent;
