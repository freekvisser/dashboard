import './App.css';
import InfoFrame from "./features/InfoFrame"
import {useEffect, useState} from "react";
import Circle from "./features/icons/Circle";

function App() {
    const [ports, setPorts] = useState([]);
    const [sides, setSides] = useState<string[]>([]);

    function getPortData(){
        fetch('/getAllPortData.php')
            .then((response) => response.json())
            .then((data) => {
                data.map((port) => {
                    if(sides.length > 0){
                        port["hide"] = !sides.includes(port.range);
                    }
                    else{
                        port["hide"] = false;
                    }
                })
                setPorts(data)
                return data; // Return the data fetched from the API
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getPortData()
    }, [sides])

    const handleOnChange = (clickedSide) => {

        //create arrays to edit sides and ports
        let updatedSides = sides;
        let updatedPorts = ports;

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
                    <span>Filter op zijde(s)</span>
                    <div className="checkbox-container" onClick={(e: React.MouseEvent<Element>) => {
                        e.currentTarget.classList.toggle('checked');
                        handleOnChange("geel");
                    }}>
                        <label htmlFor="geel">Geel</label>
                        <Circle id="geel"/>
                    </div>
                    <div className="checkbox-container" onClick={(e: React.MouseEvent<Element>) => {
                        e.currentTarget.classList.toggle('checked');
                        handleOnChange("oranje");
                    }}>
                        <label htmlFor="oranje">Oranje</label>
                        <Circle id="oranje"/>
                    </div>
                    <div className="checkbox-container" onClick={(e: React.MouseEvent<Element>) => {
                        e.currentTarget.classList.toggle('checked');
                        handleOnChange("blauw");
                    }}>
                        <label htmlFor="blauw">Blauw</label>
                        <Circle id="blauw"/>
                    </div>
                    <div className="checkbox-container" onClick={(e: React.MouseEvent<Element>) => {
                        e.currentTarget.classList.toggle('checked');
                        handleOnChange("groen");
                    }}>
                        <label htmlFor="groen">Groen</label>
                        <Circle id="groen"/>
                    </div>
                </div>
            </div>
            <div id="content">
                {ports.map((port, index) => {
                    return <InfoFrame portInfo={port} id={"port" + index} key={"port" + index} className="port" />
                })
                }
            </div>
        </div>
    );

}

export default App;
