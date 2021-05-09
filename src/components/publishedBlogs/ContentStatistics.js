import React, { memo } from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined, CommentOutlined } from "@ant-design/icons";
const ContentStatistics = memo((props) => {
    return (
        <div>
            <section>
                <div className="mb-6" style={{ marginBottom: "2rem" }}>
                    <EyeOutlined className="published_eyeOutlined" style={{ marginRight: "1rem" }} />
                    <span>20000</span>
                </div>
                <div className="mb-2">
                    <CommentOutlined className="published_commentOutlined" style={{ marginRight: "1rem" }} />
                    <span>20000</span>
                </div>
            </section>
        </div>
    );
});

export default ContentStatistics;
