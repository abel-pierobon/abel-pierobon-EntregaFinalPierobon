
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
          <Toaster position="top-left" expand={false} autoClose={500} duration={2000} closeOnClick= {true} richColors/>
          <Main />
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    );
}

export default App;
