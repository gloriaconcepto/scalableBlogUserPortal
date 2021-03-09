import React, { memo } from "react";
import { Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined, CommentOutlined } from "@ant-design/icons";
import "./card.css";

const Tags = ({ data }) => {
    return (
        <div>
            {data.map((value, index) => (
                <div className="badge badge-pill badge-success" key={index}>
                    {value.title}
                </div>
            ))}
        </div>
    );
};

const PublishedCardUtility = memo((props) => {
    const { views, title,comments,tags } = props;
    return (
        <Card
            hoverable
            size="small"
            title={title}
            style={{ width: 300, zIndex: -1, borderRadius: "10px 10px 0px 0px" }}
            headStyle={{ color: "#d3d3d3", fontStyle: "italic", fontFamily: "sans-serif", backgroundColor: "#354147", borderRadius: "10px 10px 0px 0px" }}
            actions={[<Tags key="tags" data={tags} />]}
        >
            <div className="mb-2">
                <EyeOutlined className="eyeOutlined" />
                <span className="padText"> {views}</span>
            </div>
            <div>
                <CommentOutlined className="commentOutlined" />
                <span className="padText">{comments}</span>
                <small className="cardLink">click for more details</small>
            </div>
        </Card>
    );
});

export default PublishedCardUtility;
