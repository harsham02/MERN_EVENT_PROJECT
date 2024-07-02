import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
const Contact = () => {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
       <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Singasandra, Bengaluru, 577000</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91 8197814691</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>harshaleftys@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.703313846225!2d77.64699485!3d12.88031745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14acd02d06af%3A0xc11f6d1c058b17af!2sSingasandra%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1719499277425!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "430px" }}  
            />
         
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Contact
