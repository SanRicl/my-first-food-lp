import "./about.css";
import foto from "../../assets/img1.jpg";
import React from "react";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutInfos">
        <div className="Left">
          <h1>Sobre Nós</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dicta ratione voluptatem harum incidunt, possimus pariatur minus
            iusto reprehenderit. Porro, quibusdam! Dolores numquam dolore nulla
            repellat doloremque sapiente qui. Magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum ipsa error dicta praesentium
            repellat totam, tempore possimus. Nam assumenda voluptates vitae
            aliquid harum id voluptas aperiam tempora, quasi temporibus quidem!
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex,
            fugiat et voluptatum consequuntur nemo ipsa repellendus praesentium
            illum commodi omnis obcaecati vero. Quibusdam hic atque nobis? Ad,
            optio unde?
          </p>
        </div>
        <div className="Right">
          <img src={foto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
