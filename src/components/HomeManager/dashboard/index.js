import React, { memo } from "react";
import PublishedCardUtility from "../../../utilities/sharesComponents/Card.js";
let tagData = [
    {
        title: "prgramming",
    },
    {
        title: "scala",
    },
    {
        title: "prgramming",
    },
    {
        title: "scala",
    },
    ,
    {
        title: "scala",
    },
    {
        title: "prgramming",
    },
    {
        title: "scala",
    },
    ,
    {
        title: "scala",
    },
    {
        title: "prgramming",
    },
    {
        title: "scala",
    },
];
const publishedMockData = {
    publishedData: [
        { title: "hell world", views: 1000, comments: 500, tags: tagData, id: 23 },
        { title: "love to night world", views: 1000, comments: 500, tags: tagData, id: 455 },
        { title: "is enough vagabond", views: 1000, comments: 500, tags: tagData, id: 4667 },
        { title: "hell world", views: 1000, comments: 500, tags: tagData, id: 23 },
        { title: "love to night world", views: 1000, comments: 500, tags: tagData, id: 455 },
        { title: "is enough vagabond", views: 1000, comments: 500, tags: tagData, id: 4667 },
        { title: "hell world", views: 1000, comments: 500, tags: tagData, id: 23 },
        { title: "love to night world", views: 1000, comments: 500, tags: tagData, id: 455 },
        { title: "is enough vagabond", views: 1000, comments: 500, tags: tagData, id: 4667 },
        { title: "hell world", views: 1000, comments: 500, tags: tagData, id: 23 },
        { title: "love to night world", views: 1000, comments: 500, tags: tagData, id: 455 },
        { title: "is enough vagabond", views: 1000, comments: 500, tags: tagData, id: 4667 },
    ],
};
const ManagedDashBoardComponent = memo((props) => {
    //looping of the publishedCardUtility will happened here including the specific card id.
    return (
        <div className="published-card-container">
            {publishedMockData &&
                publishedMockData.publishedData.map((data) => (
                    <div className="published-card-items" key={data && data.id}>
                        <PublishedCardUtility title={data && data.title} views={data && data.views} comments={data && data.comments} tags={data && data.tags} />
                    </div>
                ))}
        </div>
    );
});

export default ManagedDashBoardComponent;
