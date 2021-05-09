import React, { memo } from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined, CommentOutlined } from "@ant-design/icons";
const ContentStatistics = memo((props) => {
    return (
        <div>
            <section>
                <div className="mb-2">
                    <EyeOutlined />
                    <span>20000</span>
                </div>
                <div className="mb-2">
                    <CommentOutlined />
                    <span>20000</span>
                </div>
            </section>
        </div>
    );
});

export default ContentStatistics;
