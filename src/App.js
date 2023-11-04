import NavBar from "./components/navbar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css";
//import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logIn from "./components/contacto.js";
import { CartProvider } from "./context/cartContext.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path="cart" element= {<cart/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/contacto" element={ <logIn/> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>   
      </BrowserRouter>     

    </div>
    
  );
}

export default App;