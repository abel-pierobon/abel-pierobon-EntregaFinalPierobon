
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import NavBar from "./components/navbar.js";
import { CartContextProvider } from "./components/CartContext.js";
import "./firebase.js"
import { Toaster } from "sonner";


function App() {
    return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Toaster position="bottom-right" expand={false} autoClose={200} duration={1500} closeOnClick= {true} richColors/>
          <Main />
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    );
}

export default App;
