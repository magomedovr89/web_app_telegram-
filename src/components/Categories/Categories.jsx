import React, {useState} from 'react';
import './Categories.css'
import axios from "axios";

const Categories = () => {
const [menus, fullData] = useState(null);
const apiURL = 'https://mapi.dodopizza.ru/api/v4/menu/restaurant/643/00000140-0000-0000-0000-000000000000';

const fetchData = async () => {
    const response = await axios.get(apiURL,  {
        'User-Agent': 'PostmanRuntime/7.29.2',
        'LanguageCode': 'ru',
        'CountryCode': '643',
        'ApiVersion': '1'})
    fullData(response.data)
}

return (
    <div className="list_cat">
        <div>
            <button className="button" onClick={fetchData}>
                Fetch Data
            </button>
        </div>
        {menus &&
            menus.map((cat, index) => {
                const categData = new Date(cat.id).toString();
                const nameCateg = cat.name.join(", ");
                return (
                    <div className="list_cat" key={index}>
                        <h3>cat {index + 1}</h3>
                        <h2>{cat.name}</h2>
                        <div className="list_cat">
                            <p>{nameCateg}</p>
                            <p>{cat.showHeroProduct} pages</p>
                            <p>{categData}</p>
                        </div>
                    </div>)})} </div>);
}

export default Categories;
