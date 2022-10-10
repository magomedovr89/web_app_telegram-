import './App.css';
// import {useEffect} from "react";
// import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Categories from "./components/Categories/Categories";

const config = {
    url: 'https://mapi.dodopizza.ru/api/v1/pizzeria?localityId=00000111-0000-0000-0000-000000000000' }

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

export function getAllCards() {
    return fetch(`${config.url}`, {
        headers: config.headers
    })
        .then(onResponce)
}

export function getAllInfo() {
    return Promise.all([getAllCards()])
}


function App() {

    // const {tg} = useTelegram()
    //
    // useEffect(() => {
    //     tg.ready();
    // }, [])



        return (
        <div className='App'>

            <Header />
            <ProductList />
            <Categories />
        </div>
    );
}

export default App;
