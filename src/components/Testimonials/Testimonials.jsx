import "./testimonials.css";
import test1 from "../../assets/testi1.jpg";
import test2 from "../../assets/testi2.jpg";
import test3 from "../../assets/testi3.jpg";

const Testimonials = () => {
  return (
    <div className="testimonialsContainer" id="testimonials">
      <div className="testimonialsHeader">
        <h1>Depoimentos de Clientes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="gridTestimonialsContent">
        <div className="testimonialsItem">
          <div className="testimonialsProfileImg">
            <img src={test1} alt="" />
          </div>
          <div className="testimonialsContent">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae veritatis, at sapiente sed obcaecati quae.
              Necessitatibus tempore tenetur iure nihil nemo deserunt quasi.
              Ipsa voluptates maxime, quod quisquam vitae expedita.
            </p>
            <p>Alguem famoso</p>
          </div>
        </div>
        <div className="testimonialsItem">
          <div className="testimonialsProfileImg">
            <img src={test2} alt="" />
          </div>
          <div className="testimonialsContent">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae veritatis, at sapiente sed obcaecati quae.
              Necessitatibus tempore tenetur iure nihil nemo deserunt quasi.
              Ipsa voluptates maxime, quod quisquam vitae expedita.
            </p>
            <p>Alguem famoso</p>
          </div>
        </div>
        <div className="testimonialsItem">
          <div className="testimonialsProfileImg">
            <img src={test3} alt="" />
          </div>
          <div className="testimonialsContent">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae veritatis, at sapiente sed obcaecati quae.
              Necessitatibus tempore tenetur iure nihil nemo deserunt quasi.
              Ipsa voluptates maxime, quod quisquam vitae expedita.
            </p>
            <p>Alguem famoso</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
