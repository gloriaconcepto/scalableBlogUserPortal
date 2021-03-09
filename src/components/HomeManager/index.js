import React, { memo } from "react";
import ManagedAdvertComponent from "./advert";
import ManagedDashBoardComponent from "./dashboard";
import './Home.scss';
const ManagedHomeComponent = memo((props) => {
    return (
        
            <div className="row">
                <div className="col-10">
                    <ManagedDashBoardComponent />
                </div>
                <div className="col-2">
                    <ManagedAdvertComponent />
                </div>
            </div>
        
    );
});

export default ManagedHomeComponent;
