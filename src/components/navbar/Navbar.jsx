import React, { Component, useState } from "react";
import { MenuItems } from "./MenuItems";
import NavBar from "../../Styles/Navbar.module.css";
import buscar from '../../Styles/Buscar.module.css'
import { Button } from "./Button";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className={buscar.container}>
      <form
        action="https://www.google.com/search"
        className={` ${showSearch ? "show-search" : ""}`} class={buscar.search}
      >
        <input
          type="search"
          placeholder="Busca..."
          name="q"
          className={buscar.search__input}
        />

        <div className="search__button" onClick={toggleSearch}>
          <i className={`ri-search-2-li ${buscar.search__iconne}`}></i>
          <i className={`ri-close-line ${buscar.search__close}`}></i>
        </div>
      </form>
    </div>
  );
};

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className={NavBar.NavbarItems}>
        <a href="" className={buscar.logo}>
          <img src={require("../../Images/logoPosada.png")} alt="" 
          className={NavBar.log_img}/>{" "}
        </a>
        <div className={NavBar.menuicon} onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <SearchBar />
        <ul className={NavBar.button}>
          <Button>
            {" "}
            Entra <i class="fa-solid fa-right-to-bracket"></i>
          </Button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
