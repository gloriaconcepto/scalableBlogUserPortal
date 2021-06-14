import React, { memo, useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import ColorPicker from "../../utilities/sharesComponents/ColorPicker";

// import { withFirebase } from "../../firebase";
const ManagedPortalDesign = memo((props) => {
    const [showHeaderComponents, setShowHeaderComponents] = useState(false);
    const [color, setColor] = useState("#b32aa9");
    const [rotate, setRotate] = useState(false);
    // const [errorMessage, setErrorMessage] = useState(null);
    const downArrowClick = (name) => {
        console.log(name);
        if (name === "header") {
            if (rotate) {
                setShowHeaderComponents(false);
                setRotate(false);
            } else {
                setShowHeaderComponents(true);
                setRotate(true);
            }
        }
    };

    const captureColor = (color) => {
        console.log(color);
    };
    return (
        <React.Fragment>
            <div className="settingContainer">
                <div className="row">
                    <div className="col">
                        <h4 className="sub-title">HEADER</h4>
                    </div>
                    <div className="col" style={{ paddingLeft: "9rem" }}>
                        <DownOutlined onClick={() => downArrowClick("header")} rotate={rotate ? 180 : 0} />
                    </div>
                </div>
                {showHeaderComponents && (
                    <div style={{ paddingLeft: "3rem" }}>
                        <p>BACKGROUND COLOR</p>
                        <ColorPicker onChange={setColor} color={color} />
                    </div>
                )}
                <hr />
            </div>
        </React.Fragment>
    );
});

export default ManagedPortalDesign;
