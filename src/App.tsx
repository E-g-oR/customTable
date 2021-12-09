import React from 'react';
import './App.css';
import Table from "./CustomTable/Table";
import {data, dataType, tableHead} from "./data";


const getrows = (data: dataType[]): (string | number)[][] => data.map(item =>
    [item.name, item.calories, item.fat, item.carbs, item.protein]);


function App() {
    return (
        <div className="App">
            <Table caption={"My awesome table"} data={data} thead={tableHead} getTableRows={getrows}/>
        </div>
    );
}

export default App;
