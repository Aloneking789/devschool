import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0faea198-caa8-4090-9821-a97a6028cb98");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className="contact">
      <div className="contact-cols">
        <h3>
          Send Us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to rech out to us at anytime. We beleive in helping each
          other. Your feedback is very essential for us.Feel free to rech out to
          us at anytime. We beleive in helping each other. Your feedback is very
          essential for us.
        </p>
        <ul>
          <li>
            <img src={mail_icon}></img>aloneking0789@gmail.com
          </li>
          <li>
            <img src={phone_icon}></img>+1789456123
          </li>
          <li>
            <img src={location_icon}></img>Hell,After Lyf ,Anavrin
          </li>
        </ul>
      </div>
      <div className="contact-cols message">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" required></input>
          <label>Phone No.</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter Your Number"
          ></input>
          <label>Message</label>
          {/* <input type='String' name='message' placeholder='Write your message'></input> */}
          <label>Write Your Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit now<img src={white_arrow}></img>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
