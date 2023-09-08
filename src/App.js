
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import NavBar from "./components/navbar.js";
import { CartContextProvider } from "./components/CartContext.js";
import "./firebase.js"
// import "./db/migraciones.js"

function App() {
    return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Main />
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    );
}

export default App;
