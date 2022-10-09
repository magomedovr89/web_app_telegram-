import './App.css';
// import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ProductItem from "./components/ProductItem/ProductItem";
import ProductList from "./components/ProductList/ProductList";


function App() {
    const {onToogleButton} = useTelegram()

    // useEffect(() => {
    //     tg.ready();
    // }, [])


    return (
        <div className='App'>
            <Header />
            <ProductList />
        </div>
    );
}

export default App;
