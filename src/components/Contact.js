import { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
    const [copied, setCopied] = useState(false);
    const myEmail = process.env.REACT_APP_EMAIL;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;
    console.log(SERVICE_ID, TEMPLATE_ID, USER_ID);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: form.nombre,
                email: form.email,
                message: form.mensaje,
            },
            USER_ID
        )
        .then(() => {
            alert('¡Mensaje enviado!');
            setForm({ nombre: '', email: '', mensaje: '' });
        })
        .catch(() => {
            alert('Error al enviar el mensaje.');
        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <>  
            <div className='contact-container'>
                <h2>Contáctame</h2>
                <div className='contact-form-container'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <label htmlFor='nombre' className='label'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            value={form.nombre}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor='email' className='label'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor='mensaje' className='label'>Mensaje</label>
                        <textarea
                            id='mensaje'
                            name='mensaje'
                            value={form.mensaje}
                            onChange={handleChange}
                            required
                        />
                        <button type='submit' className='send-btn'>Enviar</button>
                    </form>
                    <div className='copy-email-container'>
                        <span className='my-email'>{myEmail}</span>
                        <button className='copy-btn' onClick={handleCopy} type='button'>
                            {copied ? '¡Copiado!' : 'Copiar email'}
                        </button>
                        <a href={`mailto:${myEmail}`} className='copy-btn' style={{textDecoration: 'none'}}>
                            Escribir mail
                        </a>
                    </div>
                </div>
            </div>
        </>
            
  
    );
}