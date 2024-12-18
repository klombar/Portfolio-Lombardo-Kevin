import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fdbwt7h", 
        "template_a6hlzrc", 
        e.target,
        "On6KrXoh5DxGaZsuf" 
      )
  };

  return (
   <form onSubmit={handleSubmit}>
     <fieldset>
       <legend>Envoyez-moi un message!</legend>
       
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
       
       <Button onClick={handleSubmit} classname="submit_button">
          Send Message
        </Button>
       {status && <p>{status}</p>}
     </fieldset>
   </form>
 );
}

export default ContactForm;
