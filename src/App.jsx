import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  // Estado para los campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [favoriteClass, setFavoriteClass] = useState('1');
  
  // Estado para los errores de validación
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validación del correo
  const validateEmail = (email) => {
    if (email === '') return false;
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    return atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1;
  };

  // Validación de la contraseña
  const validatePassword = (password) => {
    if (password.length < 9) return false;
    let hasLetter = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
      if (isNaN(password[i])) {
        hasLetter = true;
      } else {
        hasNumber = true;
      }
    }
    return hasLetter && hasNumber;
  };

  // Manejo de cambio de correo
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(''); // Limpiar el error si el usuario escribe algo
  };

  // Manejo de cambio de contraseña
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Validación de la contraseña
    if (!validatePassword(newPassword)) {
      setPasswordError('La contraseña debe tener al menos 9 caracteres, contener al menos un número y una letra.');
    } else {
      setPasswordError('');
    }
  };

  // Manejo del submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del correo en el submit
    if (!validateEmail(email)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
    
      <Form onSubmit={handleSubmit}>
        {/* Campo para el correo */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
          {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
        </Form.Group>

        {/* Campo para la contraseña */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <Form.Text className="text-muted">
          </Form.Text>
          {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
        </Form.Group>

        {/* Campo para la clase favorita */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select 
            value={favoriteClass} 
            onChange={(e) => setFavoriteClass(e.target.value)}
          >
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
