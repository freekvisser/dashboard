import './App.css';
import InfoFrame from "./features/InfoFrame"
import { PortInfo } from "./types/PortInfo"
import {useState} from "react";

const date: Date = new Date();


const initialPorts: PortInfo[] = [
    {
        portNumber: 1,
        scannedTickets: 255,
        range: "geel",
        trend: -9,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 2,
        scannedTickets: 483,
        range: "geel",
        trend: 3,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 3,
        scannedTickets: 235,
        range: "oranje",
        trend: -4,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 4,
        scannedTickets: 155,
        range: "oranje",
        trend: -5,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 5,
        scannedTickets: 544,
        range: "blauw",
        trend: -1,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 6,
        scannedTickets: 246,
        range: "blauw",
        trend: -12,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 7,
        scannedTickets: 147,
        range: "groen",
        trend: -15,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    },
    {
        portNumber: 8,
        scannedTickets: 199,
        range: "groen",
        trend: -4,
        high: {
            timestamp: date,
            quantity: 25,
        },
        low: {
            timestamp: date,
            quantity: 1
        },
        hide: false,
    }
];


function App() {
    const [ports, setPorts] = useState<PortInfo[]>(initialPorts);
    const [sides, setSides] = useState<string[]>([]);

    const handleOnChange = (clickedSide) => {

        //create arrays to edit sides and ports
        let updatedSides = sides;
        let updatedPorts = initialPorts;

        //remove the clicked side if already in the list, otherwise add it
        updatedSides = updatedSides.includes(clickedSide) ? updatedSides.filter(side => side !== clickedSide) : [...updatedSides, clickedSide]
        //if at least one side is selected for filtering, filter ports accordingly
        updatedSides.length !== 0 ? updatedPorts.map(port => updatedSides.includes(port.range) ? port.hide = false : port.hide = true) : updatedPorts.map(port => port.hide = false);

        //set the states to updated arrays
        setSides(updatedSides)
        setPorts(updatedPorts)

    };

    return (
        <div id="container">
            <div id="sidebar">
                <div id="port-filter">
                    <input type="checkbox" id="geel" onChange={() => handleOnChange("geel")}/>
                    <label htmlFor="geel">Geel</label><br/>
                    <input type="checkbox" id="oranje" onChange={() => handleOnChange("oranje")}/>
                    <label htmlFor="oranje">Oranje</label><br/>
                    <input type="checkbox" id="blauw" onChange={() => handleOnChange("blauw")}/>
                    <label htmlFor="blauw">Blauw</label><br/>
                    <input type="checkbox" id="groen" onChange={() => handleOnChange("groen")}/>
                    <label htmlFor="groen">Groen</label>
                </div>
            </div>
            <div id="content">
                {ports.map((port, index) => {
                    return <InfoFrame portInfo={port} id={"port" + index} key={"port" + index} className="port" />
                })}
            </div>
        </div>
    );

}

export default App;
