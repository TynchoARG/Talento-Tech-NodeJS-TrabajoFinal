# API REST - Gestión de Catálogo de Productos

Proyecto Final Integrador desarrollado con **Node.js** y **Express**, conectado a **Cloud Firestore (Firebase)** para persistencia de datos NoSQL y protegido mediante autenticación con **JSON Web Tokens (JWT)**.

## Tecnologías Utilizadas

* **Node.js** (ES Modules)
* **Express.js**
* **Firebase / Cloud Firestore**
* **JSON Web Token (`jsonwebtoken`)**
* **Dotenv** & **CORS**

## Estructura del Proyecto

* `src/controllers/` — Manejo de peticiones y respuestas HTTP
* `src/data/` — Configuración y conexión con Firebase
* `src/middlewares/` — Verificación de JWT y manejo de rutas no encontradas (404)
* `src/models/` — Consultas CRUD a Cloud Firestore
* `src/routes/` — Definición de endpoints (productos y autenticación)
* `src/services/` — Lógica de negocio
* `.env` — Variables de entorno (no incluido en el repositorio)
* `.gitignore` — Archivos excluidos del control de versiones
* `index.js` — Punto de entrada del servidor
* `package.json` — Dependencias y scripts del proyecto

## Instalación y Configuración

1. **Clonar el repositorio:**
   `git clone <URL_DE_TU_REPOSITORIO>`
   `cd <NOMBRE_DE_LA_CARPETA>`

2. **Instalar las dependencias:**
   `npm install`

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes claves (sin comillas):
   - `PORT=3000`
   - `JWT_SECRET=tu_clave_secreta`
   - `FIREBASE_API_KEY=tu_api_key`
   - `FIREBASE_AUTH_DOMAIN=tu_auth_domain`
   - `FIREBASE_PROJECT_ID=tu_project_id`
   - `FIREBASE_STORAGE_BUCKET=tu_storage_bucket`
   - `FIREBASE_MESSAGING_SENDER_ID=tu_sender_id`
   - `FIREBASE_APP_ID=tu_app_id`

4. **Ejecutar el servidor:**
   `npm start`

## Endpoints de la API

### Autenticación (`/auth`)

| Método | Ruta | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Valida credenciales y devuelve un `Bearer Token` JWT | Público |

Ejemplo de Body (`POST /auth/login`):
`{ "email": "admin@tienda.com", "password": "123456" }`

### Productos (`/api/products`)

| Método | Ruta | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Obtiene el listado completo de productos | Público |
| `GET` | `/api/products/:id` | Obtiene el detalle de un producto por su ID | Público |
| `POST` | `/api/products/create` | Crea un nuevo producto en Firestore | Protegido (JWT) |
| `DELETE` | `/api/products/:id` | Elimina un producto existente por su ID | Protegido (JWT) |

Ejemplo de Body (`POST /api/products/create`):
`{ "categoria": "perifericos", "nombre": "Teclado Mecánico RGB", "precio": 45000, "stock": 15 }`

> **Nota sobre rutas protegidas:** Para ejecutar `POST` y `DELETE`, se debe enviar el token obtenido en el login dentro de la cabecera `Authorization` con el formato: `Bearer <tu_token>`.

## Códigos de Estado HTTP Manejados

* `200 OK` / `201 Created`: Operación exitosa.
* `400 Bad Request`: Faltan campos obligatorios en el cuerpo de la petición.
* `401 Unauthorized`: Credenciales inválidas o token no proporcionado.
* `403 Forbidden`: Token inválido o expirado.
* `404 Not Found`: Producto o ruta inexistente.
* `500 Internal Server Error`: Error inesperado en el servidor o en la conexión con la base de datos.

## Autor

* **Martín Zabala** - Proyecto Final Backend Node.js
