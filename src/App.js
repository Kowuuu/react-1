import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

let name = "Dugme"

function klikomnadugme() {

}


function App() {

    let [name, setName] = useState("hellow world");
    let [tax, setTax] = useState(0);

    function promeniime(novoime) {
//name=novoime.target.value;
        setName(novoime.target.value);
    }

    return (<>

            <Products tax={tax}/>
            {/* <button className="btn btn-primary" onClick={klikomnadugme}>{name}</button>
            <input type="text" onChange={(e) => {
                promeniime(e);
                setTax(e.target.value);
            }}/> */}
            <h1>my name is:{name}</h1>
        </>
    );
}

export default App;
