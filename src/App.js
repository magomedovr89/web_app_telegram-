import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";


function App() {
    const {tg, onToogleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])



    return (
        <div className='App'>
            <button onClick={onToogleButton}>
                toogle
            </button>
        </div>
    );
}

export default App;
