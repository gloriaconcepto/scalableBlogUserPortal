import React, { memo } from "react";
import { HexColorPicker } from "react-colorful";
import "./colorPicker.css";

const ColorPicker = memo((props) => {
    const { onChange, color } = props;

    return (
        <div>
            <HexColorPicker color={color} onChange={onChange} />
        </div>
    );
});

export default ColorPicker;
