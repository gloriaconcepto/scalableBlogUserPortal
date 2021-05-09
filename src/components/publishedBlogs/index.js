import React, { memo, useEffect,useState } from "react";
import BlogsContent from "./BlogsContent";
import ContentStatistics from "./ContentStatistics";
const ManagedPublishedBlog = memo((props) => {
    const[paramData,setParamData]=useState(null)
    useEffect(() => {
        console.log(props.match.params);
        if(props.match.params){
            setParamData(props.match.params)
        }
    }, []);

    return (
        <div className="row">
            <div className="col-9">
                <BlogsContent title={paramData && paramData.blogName}/>
            </div>
            <div className="col-3">
                <ContentStatistics />
            </div>
        </div>
    );
});

export default ManagedPublishedBlog;
