import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";

export default function App() {
  return (
      <div className="App">
         <NavbarComp />
         <Footer />
      </div>
  );
}
