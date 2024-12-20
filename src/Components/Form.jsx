import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Form submitted"); 
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fdbwt7h", 
        "template_a6hlzrc", 
        e.target,
        "On6KrXoh5DxGaZsuf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="form_name_field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your name"
            required
          />
        </div>
        
        <div className="form_email_field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
            required
          />
        </div>
        
        <div className="form_textarea_field">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
        </div>
        
        <Button type="submit" classname="submit_button">
          Send Message
        </Button>
        {status && <p>{status}</p>}
      </fieldset>
    </form>
  );
}

export default ContactForm;