import jwt from "jsonwebtoken";
import "dotenv";

export const authentication = (req, res, next) => {
  // 1. Leer el encabezado de Authorization
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Token no proporcionado (Error 401)" });
  }
  //2. Separación de la palabra "Bearer" del token real.
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Formato inválido (Error 401)" });
  }

  // 3. Verificación de la vallidez del token con la clave secreta
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token inválido o expirado (Error 403)" });
    }
    req.user = decoded; // Se guardan los datos del usuario en la petición
    next(); // Se deja pasar la petición hacia el controlador
  });
};
