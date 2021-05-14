import React, { memo } from "react";
import ManagedTextEditor from "../../utilities/textEditor/MangeTextEditor";
const ManagedCreatePost = memo((props) => {
    return (
        <div className="row">
            <div className="col-10">
                <ManagedTextEditor />
            </div>
        </div>
    );
});

export default ManagedCreatePost;
