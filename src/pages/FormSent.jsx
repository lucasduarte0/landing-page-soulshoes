import React from "react";
import "../css/styleIframe.css";
import Logo from "../images/logo.png";

function FormSent() {
  return (
    <div className='flex flex-col md:px-96 min-h-screen overflow-hidden md:w-full md:justify-center'>
      <h1>FORMULARIO ENVIADO</h1>
      <form name='contact' method='POST' data-netlify='true'>
        <input
          type='hidden'
          name='subject'
          value='Sales inquiry from mysitename.netlify.app'
        />
        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </div>
  );
}

export default FormSent;
