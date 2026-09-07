import React, {useState} from "react";
/*interface ProductInterface{
    [phonekey:string]:number
}
const products:ProductInterface= {
    'iphone':1000,
    'samsung':1250,
    'xiaomi':1100,
}; */

function Products(props){

    let [products,setProducts]= useState({
        'iphone':1000,
        'samsung':1250,
        'xiaomi':1100,
    });

    let [newProductName, setNewProductName]=useState("");
    let [newProductPrice, setNewProductPrice]=useState("");
    let [pronasliname,setpronasliname]=useState();
    function addProduct(){
        if (newProductName === "") {
            console.log("ime nije uneto")

        }

        let newProduct={[newProductName]:parseInt(newProductPrice)}

        setProducts(currentProducts=>({
            ...currentProducts,
            ...newProduct
        }));
    }
    function Search(e){
        const searchterm=e.currentTarget.value.toLocaleLowerCase();
        const productNames=Object.keys(products);
        for (let product in productNames){
            let productName=productNames[product].toLowerCase();
            if(searchterm===productName){
                console.log("nasli smo proizvod");
                setpronasliname("Uspesno ste nasli proizvod");
                break;
            }else{
                setpronasliname("Nismo nasli proizvod");
            }
        }
    }
    return (
        <>
            <button onClick={() => setProducts({})}>Delete</button>
            <p> "Hello World"</p>
            <div className="d-flex justify-content-center">
            {Object.entries(products).map(([phone, price]) => (
                <div>
                    <h5> {phone}</h5>
                    <p>{price - price * (props.tax / 100)}</p>
                </div>
            ))}
            </div>
            {/*// {products.map(phone=>{return <p>{phone}, tax:{props.tax}</p>})}*/}
            <div>
                <p>{pronasliname}</p>
                <input onInput={(e) => Search(e)} placeholder={"unesi"}/>
            </div>
            <div >
                <h3>Dodavanje proizvoda</h3>
                <div >
                <input onInput={(e) => setNewProductName(e.target.value)} type="text"
                       placeholder="unesite ime proizvoda"/>
                </div>
                <input onInput={(e) => setNewProductPrice(e.target.value)} type="number"
                       placeholder="unesite cenu proizvoda"/>
                <button onClick={addProduct}> Add new product</button>

            </div>
        </>
    )
}

export default Products;











