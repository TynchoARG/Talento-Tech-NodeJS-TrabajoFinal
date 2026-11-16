import { loginService } from '../services/auth.services.js';

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan credenciales (email y password)' });
  }

  const result = loginService(email, password);

  if (!result.authenticated) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  res.status(200).json({
    message: 'Login exitoso',
    token: `Bearer ${result.token}`
  });
};