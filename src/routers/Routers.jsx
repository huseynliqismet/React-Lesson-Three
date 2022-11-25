import Home from "../pages/Home";
import Aboutme from "../pages/Aboutme";
import  Pages from "../pages/Pages";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import About from "../pages/About";
const Routers = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="./about" element={<About />}/>
      </Routes>
    </Layout>
  );
};

export default Routers;
