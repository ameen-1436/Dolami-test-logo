import React from "react";
import styled from "styled-components";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./../app/globals.css";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SearchBar = styled.div`
  input {
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin: 0 10px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

const Breadcrumb = styled.div`
  margin: 20px;
  font-size: 14px;
  color: #888;
`;

const Main = styled.main`
  padding: 20px;
`;

const App = () => (
  <>
    {" "}
    <Navbar />
    <div className="AppContainer">
      <div className="Main">
        <div className="Breadcrumb">Parent category &gt; Child category</div>
        <ProductGrid />
      </div>
    </div>
  </>
);

export default App;
