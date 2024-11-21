import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Initialize EmailJS with your public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <div className="contact-container">
      
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Form Fields */}
        <div>
          <label className="block">Name</label>
          <input type="text" name="user_name" required className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Email</label>
          <input type="email" name="user_email" required className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Message</label>
          <textarea name="message" required className="border p-2 w-full" rows="4" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;