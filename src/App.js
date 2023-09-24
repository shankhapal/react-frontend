import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Cart from "./components/cart";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div className="navbar-nav mr-auto">
          <li>
            <Link to={"/"} className="nav-link">Home</Link>
          </li>
         
           <li>
            <Link to={"/certificate"} className="nav-link">Certificate of Authorisation</Link>
          </li>
           <li>
            <Link to={"/create"} className="nav-link">Create</Link>
          </li>
        </div>
      </nav>
      <div className="container">
        
        <div className="d-flex flex-row">
          {/* <Cart name={"DMI Login"} imageSrc="/images/login-img.jpg" />
          <Cart name={"Certificate Of Authorisation"} imageSrc="/images/login-img2.jpg" />
          <Cart name={"Printing Permission"} imageSrc="/images/login-img3.jpg" />
          <Cart name={"Approval Of Laboratory"} imageSrc="/images/login-img4.jpg" />
          <Cart name={"LIMS Login"} imageSrc="/images/login-img5.jpg"/> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} /> {/* Add this route */}
          <Route path="/edit/:id" element={<Edit />} />
          {/* <Route path="/dmilogin" element={<DmiLogin />} /> */}
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
