import "../styles/components/pages/ContactoPage.css"

import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Complete el siguiente formulario</h2>
                
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puedes contactarte con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono: 4444-4444</li>
                    <li>Email: contacto@lasolashotel.com.ar</li>
                    <li>Redes Sociales:
                    <a href="https://www.instagram.com" target="_blank"><img height="25" src="images/Instagram-logo.png" alt=""/></a>
                    <a href="https://www.facebook.com" target="_blank"><img height="25" src="images/facebook-logo.png" alt=""/></a>
                    <a href="https://www.twitter.com" target="_blank"><img height="25" src="images/Twitter-logo.png" alt=""/></a>
                    <a href="https://www.linkedin.com/" target="_blank"><img height="25" src="images/LinkedIn_logo_initials.png" alt=""/></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><img height="25" src="images/logowhatsapp.png" alt=""/></a>
                    <a href="https://web.telegram.org/" target="_blank"><img height="25" src="images/logotelegram.png" alt=""/></a></li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
