import React, { memo } from "react";
import "./header.css";
const ManagedHeader = memo((props) => {
    return (
        <div className="headerContainer">
            <div className="top_left">
                <h3 style={{ color: "#d3d3d3" }}>Scalable</h3>
            </div>
            <div className="top_right">
                <div className="top_right_Items">Publications</div>
                <div className="top_right_Items">Create</div>
                <div className="top_right_Items">Settings</div>
            </div>
        </div>
    );
});

export default ManagedHeader;
