import "./menu.css";
import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.jpg";
import menu4 from "../../assets/menu4.jpg";
import menu5 from "../../assets/menu5.jpg";
import menu6 from "../../assets/menu6.jpg";

const Menu = () => {
  return (
    <div className="menuContainer" id="menu">
      <div className="headerMenu">
        <h1>Nosso Menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetus adipisicing elit</p>
      </div>
      <div className="gridMenuContent">
        <div className="menuItem">
          <div className="itemImg">
            <img src={menu1} alt="" />
          </div>
          <p>Saladas Especiais</p>
        </div>

        <div className="menuItem">
          <div className="itemImg">
            <img src={menu2} alt="" />
          </div>
          <p>Sopas Especiais</p>
        </div>

        <div className="menuItem">
          <div className="itemImg">
            <img src={menu3} alt="" />
          </div>
          <p>Massas Especiais</p>
        </div>

        <div className="menuItem">
          <div className="itemImg">
            <img src={menu4} alt="" />
          </div>
          <p>Saladas Especiais</p>
        </div>

        <div className="menuItem">
          <div className="itemImg">
            <img src={menu5} alt="" />
          </div>
          <p>Sopas Especiais</p>
        </div>
        <div className="menuItem">
          <div className="itemImg">
            <img src={menu6} alt="" />
          </div>
          <p>Massas Especiais</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
