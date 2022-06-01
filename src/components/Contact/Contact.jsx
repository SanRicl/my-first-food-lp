import "./contact.css";

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <div className="contactInfo">
        <div className="contactHeader">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="formContact">
          <p>Send Message</p>

          <input type="text" placeholder="Text" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Message" rows="3" cols="40" />

          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
