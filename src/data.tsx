import {ReactNode} from "react";

export const tableHead: ReactNode[] = [
    <p>Dessert (100g serving)</p>,
    <p>Calories</p>,
    <p>Fat&nbsp;(g)</p>,
    <p>Carbs&nbsp;(g)</p>,
    <p>Protein&nbsp;(g)</p>,
];

export interface dataType {
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
}

export const data: dataType[] = [
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
        fat: 6.0,
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