import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../Button/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    console.log("Form submitted"); 
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
          setFormData({ name: "", email: "", message: "" });
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
        <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            required
          />
        </div>
        
        <div className="form_email_field">
        <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemple@exemple.com"
            required
          />
        </div>
        
        <div className="form_textarea_field">
        <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ecrivez votre message ici !"
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
