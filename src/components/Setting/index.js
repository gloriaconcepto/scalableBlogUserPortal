import React, { memo } from "react";
import { Tabs } from "antd";
import "./setting.css";
import ManagedAccount from "./ManagedAccount";
const ManagedSetting = memo((props) => {
    const { TabPane } = Tabs;
    return (
        <div className="row">
            <div className="col-12">
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Account" key="1">
                            <ManagedAccount />
                        </TabPane>
                        <TabPane tab="Design Your Blog Portal" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
});

export default ManagedSetting;