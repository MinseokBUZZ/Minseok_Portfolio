import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Mail.css';

import emailjs from '@emailjs/browser';

const Mail = () => {
  const { t } = useTranslation();
  const radio = useRef();
  const [toSend, setToSend] = useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const valid = {
    email: false,
    rest: false
  };
  const error = useRef();
  const formResMsg = useRef();

  const validation = (email, name, message, subject) => {
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      valid.email = true;
    } else {
      valid.email = false;
    }

    if (name !== '' && subject !== '' && message !== '') {
      valid.rest = true;
    } else {
      valid.rest = false;
    }
  };
  const reset = () => {
    setToSend({
        subject: '',
        name: '',
        email: '',
        message: ''
    });
    // Additionally, ensure radio buttons and other input fields are manually reset if needed
    const radios = document.getElementsByName("subject");
    radios.forEach(radio => radio.checked = false); // Uncheck all radios
    // Reset the 'Other' input field directly if not managed by the above state
    const otherInput = document.getElementById('other');
    if (otherInput) {
        otherInput.value = '';
    }
};

  const handleClick = () => {
    validation(toSend.email, toSend.name, toSend.message, toSend.subject);
    const condition = Object.values(valid).every((value) => value === true);
    if (!condition) {
      error.current.style.display = 'block';
      error.current.innerText = t("Error");
    } else {
      const serviceID = 'service_lfczy5a';
      const templateID = 'template_2ooqvd1';
      const publicKey = 'tEokSZpr6kN1yk_af';
      emailjs.send(serviceID, templateID, toSend, publicKey)
        .then((response) => {
          formResMsg.current.innerText = t("Message Sent");
          reset();
          setTimeout(() => {  // Set a timeout to clear the message
            formResMsg.current.innerText = "";
          }, 3000);  // Clear after 5 seconds
        }, (err) => {
          formResMsg.current.innerText = t("Failed") + err.text;
        });
      error.current.style.display = 'none';
    }
};


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const arrayOfSub = ['work', 'chat', 'collaboration'];
    if (toSend.subject === '') {
      setIsDisabled(false);
    } else {
      if (!(arrayOfSub.includes(toSend.subject))) {
        radio.current.checked = false;
        setIsDisabled(true);
      }
    }
  }, [toSend.subject]);

  return (
    <div className='mail' id='mail'>
      <h2>{t("Get In Touch")}</h2>
      <div>
        <div className='entry'>
          <div>
            <label htmlFor="name">{t("Name")}</label>
            <input type="text" name="name" autoComplete='off' value={toSend.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">{t("Email")}</label>
            <input type="email" name="email" autoComplete='off' value={toSend.email} onChange={handleChange} />
          </div>
          <div className='options'>
            {["work", "collaboration", "chat"].map(subject => (
              <div key={subject}>
                <input
                  type="radio"
                  name="subject"
                  value={subject}
                  id={subject}
                  checked={toSend.subject === subject}
                  onChange={handleChange}
                  ref={radio}
                  disabled={isDisabled}
                />
                <label htmlFor={subject}>{t(subject)}</label>
              </div>
            ))}
            <div>
              <input type="text" name="subject" id='other' placeholder={t('Other')} autoComplete='off' onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor="message">{t("Message")}</label>
            <textarea name="message" cols="30" rows="10" value={toSend.message} onChange={handleChange}></textarea>
          </div>
          <p style={{ color: 'red', display: 'none' }} ref={error}></p>
          <p style={{ color: 'red' }} ref={formResMsg}></p>
          <div className='btn' onClick={handleClick}>{t("Send Message")}</div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
