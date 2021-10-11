import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
