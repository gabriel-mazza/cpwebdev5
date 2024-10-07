import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    
    document.cookie = `formData=${encodeURIComponent(JSON.stringify(formData))}; path=/; max-age=3600`;

    alert("Dados enviados");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Seu nome" 
          onChange={handleChange} 
          className="block w-full p-2 border border-gray-300 rounded" 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Seu email" 
          onChange={handleChange} 
          className="block w-full p-2 border border-gray-300 rounded" 
        />
        <textarea 
          name="message" 
          placeholder="Sua mensagem" 
          onChange={handleChange} 
          className="block w-full p-2 border border-gray-300 rounded" 
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
