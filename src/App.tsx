import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./CustomTable/Table";

const tableHead = [
    "Dessert (100g serving)",
    "Calories",
    "Fat&nbsp;(g)",
    "Carbs&nbsp;(g)",
    "Protein&nbsp;(g)",
];

interface dataType {
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
}

const data: dataType[] = [
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 6.0
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
    },
    {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0
    },
    {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
    },
    {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
    },
];

const getrows = (data: dataType[]): (string | number)[][] => data.map(item =>
    [item.name, item.calories, item.fat, item.carbs, item.protein])


function App() {
    return (
        <div className="App">
            <Table caption={"My awesome table"} data={data} thead={tableHead} getTableRows={getrows}/>
        </div>
    );
}

export default App;
