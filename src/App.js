import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Routes>
     <Route exact path="/" element={<ProductListing/>} />
     <Route exact path="/product/:productId" element={<ProductDetail/>}/>
     <Route>404 Not Found!</Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
