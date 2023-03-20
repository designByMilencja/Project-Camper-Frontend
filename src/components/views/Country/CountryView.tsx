import React from "react";
import '../Table.css'
import {ConverterView} from "../../common/Converter/Converter";

export const CountryView = () => {
    return <>
        <h2 className="month">Wydatki w</h2>
        <table>
            <thead>
            <tr>
                <th>Kategoria</th>
                <th>Liczba dni</th>
                <th>Suma</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>
            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>
            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>
            <tr>
                <td>pranie</td>
                <td>10</td>
                <td>30</td>
            </tr>
            </tbody>
        </table>
            <h3> Podsumowanie miesiąca: 200 PLN</h3>
            <div className="underline"/>
        <ConverterView/>
    </>
}
