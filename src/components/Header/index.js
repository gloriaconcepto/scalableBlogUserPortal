import React, { memo } from "react";
import { NavLink } from "react-router-dom";
const ManagedHeader = memo((props) => {
    return (
        <div>
            <div className="top_left">
                <h3 style={{ color: "#d3d3d3" }}>Scalable</h3>
            </div>
            <div className="top_right">
                <NavLink
                    className="top_right_Items"
                    to="/welcome-home-page"
                    activeStyle={{
                        color: "black",
                        borderBottom: "3px solid #d3d3d3",
                    }}
                >
                    Publications
                </NavLink>
                <div className="top_right_Items">
                    <NavLink
                        className="top_right_Items"
                        to="/create-post"
                        activeStyle={{
                            color: "black",
                            borderBottom: "3px solid #d3d3d3",
                        }}
                    >
                        Create
                    </NavLink>
                </div>
                <div className="top_right_Items">
                    <NavLink
                        className="top_right_Items"
                        to="/settings"
                        activeStyle={{
                            color: "black",
                            borderBottom: "3px solid #d3d3d3",
                        }}
                    >
                        Settings
                    </NavLink>
                </div>
            </div>
        </div>
    );
});

export default ManagedHeader;
