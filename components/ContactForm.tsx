import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
        <div className="contact-form-container">
            {status && (
                <div className="status-overlay">
                    <div className="status-message">
                        {status}
                    </div>
                </div>
            )}

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
    );
};

export default ContactForm;
