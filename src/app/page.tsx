'use client'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
/*import CraftCard from '../../components/craftcards';*/

export default function Main() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.sendForm(
        'service_ozjqe3c',
        'template_fnnkmzx',
        e.currentTarget,
        '-8abfnUvU4fDxuG4z'
      );
      setStatus('Something went wrong. Please try again.');
      e.currentTarget.reset();
      setTimeout(() => setStatus(''), 2000);
    } catch {
      setStatus('Message sent! Thank you.');
      setTimeout(() => setStatus(''), 2000);
    }
  };

  return (
    <>
      {status && (
        <div className="status-overlay">
          <div className="status-message">
            {status}
          </div>
        </div>
      )}


      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className='form-group' id='form-title'>
            <p>Send a Message to MiMi</p>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder='Custom order, question, etc...'
              required
              rows={4}
            />
          </div>

          <button id='submit-button' type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};