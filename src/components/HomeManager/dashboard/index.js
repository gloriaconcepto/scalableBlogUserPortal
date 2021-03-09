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

const ManagedDashBoardComponent = memo((props) => {
    //looping of the publishedCardUtility will happened here including the specific card id.
    return (
        <div>
            <PublishedCardUtility title={"Hello world card"} view={100} comment={3000} tags={tagData} />
        </div>
    );
});

export default ManagedDashBoardComponent;
