import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
    const [copied, setCopied] = useState(false);
    const myEmail = 'banda2609@gmail.com'; // Cambia por tu email real

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para enviar el formulario (por ejemplo, a un backend o servicio de email)
        alert('¡Mensaje enviado!');
        setForm({ nombre: '', email: '', mensaje: '' });
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
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            value={form.nombre}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor='mensaje'>Mensaje</label>
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
                        <span>{myEmail}</span>
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