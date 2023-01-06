import './App.css';
import InfoFrame from "./features/InfoFrame"
import { PortInfo } from "./types/PortInfo"
import {useState} from "react";


const min = 1;
const max = 2;

const initialPorts: PortInfo[] = [
    {
        portNumber: 1,
        scannedTickets: 255,
        range: "geel"
    },
    {
        portNumber: 2,
        scannedTickets: 483,
        range: "geel"
    },
    {
        portNumber: 3,
        scannedTickets: 235,
        range: "oranje"
    },
    {
        portNumber: 4,
        scannedTickets: 155,
        range: "oranje"
    },
    {
        portNumber: 5,
        scannedTickets: 544,
        range: "blauw"
    },
    {
        portNumber: 6,
        scannedTickets: 246,
        range: "blauw"
    },
    {
        portNumber: 7,
        scannedTickets: 147,
        range: "groen"
    },
    {
        portNumber: 8,
        scannedTickets: 199,
        range: "groen"
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
        updatedSides.length !== 0 && (updatedPorts = updatedPorts.filter(port => updatedSides.includes(port.range)));

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
                    return <InfoFrame portInfo={port} key={"port" + index} className={"port"}/>
                })}
                <button onClick={() => setPorts(ports.filter(port => port.portNumber >= min && port.portNumber < max))}></button>
            </div>
        </div>
    );

}

export default App;
