import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import DataCall from './DataCall'
import AllData from './AllData'
const RightPane = (props) => {
    // console.log("DATA : ", props.data)
    const [key2, setKey2] = useState('All');
    return (
        <div style={{ backgroundColor: 'white', height: 'auto', width: '96%', border: '1px solid gray', borderRadius: '5px' }}>
            <h4 style={{ color: 'blue' }}>Browse Player List : {props.country}</h4>
            <Tabs
                id="controlled-tab-example2"
                activeKey={key2}
                onSelect={(k) => setKey2(k)}
            >
                <Tab eventKey="All" title="All">
                    {props.from == "teams" ? <DataCall /> : <AllData data={props.data} />}
                </Tab>
                <Tab eventKey="Tests" title="Tests">
                    {props.from == "teams" ? <DataCall /> : "players"}
                </Tab>
                <Tab eventKey="ODIs" title="ODIs">
                    {props.from == "teams" ? <DataCall /> : "players"}
                </Tab>
                <Tab eventKey="T20" title="T20">
                    {props.from == "teams" ? <DataCall /> : "players"}
                </Tab>
                <Tab eventKey="Contracted Players" title="Contracted Players">
                    {props.from == "teams" ? <DataCall /> : "players"}
                </Tab>

            </Tabs>
        </div>
    )
};

export default RightPane;