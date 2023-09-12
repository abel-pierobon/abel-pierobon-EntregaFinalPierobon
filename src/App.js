
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import NavBar from "./components/navbar.js";
import { CartContextProvider } from "./components/CartContext.js";
import "./firebase.js"
import { Toaster } from "sonner";
// import "./db/migraciones.js"

function App() {
    return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Toaster position="top-right" expand={true} autoClose={500} closeOnClick= {true}/>
          <Main />
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    );
}

export default App;
