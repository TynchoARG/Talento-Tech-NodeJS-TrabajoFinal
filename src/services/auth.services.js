export const loginService = (email, password) => {
  
    // Credenciales de prueba
  if (email === 'admin@gmail.com' && password === '123456') {
    return {
      authenticated: true,
      user: { email, role: 'admin' },
      token: 'token-provisorio-req-5'
    };
  }
  return { authenticated: false };
};