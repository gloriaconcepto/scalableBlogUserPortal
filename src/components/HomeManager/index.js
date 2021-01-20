import React, { memo } from "react";
import ManagedAdvertComponent from "./advert";
import ManagedDashBoardComponent from "./dashboard";
const ManagedHomeComponent = memo((props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <ManagedDashBoardComponent />
                </div>
                <div className="col-2">
                    <ManagedAdvertComponent />
                </div>
            </div>
        </React.Fragment>
    );
});

export default ManagedHomeComponent;
