import React, { useState } from 'react';

const Formulario = () => {
  // Estados para manejar los valores de los campos y el mensaje de confirmación
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    setMensaje(`Gracias, ${nombre}, por registrar tus comentarios ¡Te contactaremos pronto!`);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        {/* Campo de Nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
        </label>

        {/* Campo de Correo */}
        <label>
          Correo:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </label>

        {/* Campo de Comentarios */}
        <label>
          Comentarios:
          <textarea
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            placeholder="Escribe tus comentarios"
            rows="4"
            required
          />
        </label>

        {/* Botón de Enviar */}
        <button type="submit">Enviar</button>
      </form>

      {/* Mensaje de Confirmación */}
      {mensaje && (
        <div
          style={{
            marginTop: '20px',
            color: 'green',
            fontWeight: 'bold',
            whiteSpace: 'pre-line',
          }}
        >
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default Formulario;
