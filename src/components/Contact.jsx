import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_your_service_id', // Remplacez par votre Service ID
      'template_your_template_id', // Remplacez par votre Template ID
      form.current,
      'your_public_key' // Remplacez par votre Public Key
    )
    .then((result) => {
      alert('Message envoyé avec succès!');
      form.current.reset();
    }, (error) => {
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-moi</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
              <input 
                type="text" 
                name="user_name" // Important pour EmailJS
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                name="user_email" // Important pour EmailJS
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" // Important pour EmailJS
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre message..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
            >
              Envoyer
            </button>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ou contactez-moi directement</h3>
            <p className="text-gray-600 mb-2">Email: mahamatallatchi74@gmail.com</p>
            <p className="text-gray-600">Téléphone: +237 695 41 05 80</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;