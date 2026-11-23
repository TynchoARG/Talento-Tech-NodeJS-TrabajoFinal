import jwt from 'jsonwebtoken';
import 'dotenv';

export const loginService = (email, password) => {
  // Se validan las credenciales.
  if (email === 'admin@gmail.com' && password === '123456') {
    // Se Genera el token real con una expiración de 1 hora.
    const token = jwt.sign(
      {email, role: 'admin'},
      process.env.JWT_SECRET,
      { expiresIn: '1h'}
    );
    return {
      authenticated: true,
      token
    };
  }
  return { authenticated: false };
};