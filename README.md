## Red Social Backend API 🚀
# Introducción
Este proyecto consiste en desarrollar una API RESTful para una red social utilizando Node.js, Express, y MongoDB con Mongoose. El backend incluye funciones básicas como la creación de usuarios, autenticación, CRUD de posts, likes, comentarios y middleware de seguridad.

# Características principales 🛠️
# 🔐 Autenticación y Seguridad
- Registro de usuarios utilizando Bcrypt para el hash de contraseñas.
- Login de usuarios con generación de JWT (JSON Web Token).
- Middleware de autenticación para proteger rutas que requieren permisos.
# 📱 Gestión de Posts
- CRUD de posts: Crear, leer, actualizar y eliminar publicaciones.
- Likes: Los usuarios pueden dar y quitar likes a los posts.
- Paginación de posts (10 posts por página) para una mejor organización.
# 💬 Comentarios
- Los usuarios pueden comentar en los posts existentes.
# Tecnologías utilizadas 🖥️
Este proyecto está construido con las siguientes tecnologías:

- Node.js: Entorno de ejecución de JavaScript en el servidor.
- Express: Framework para la creación de APIs RESTful.
- MongoDB: Base de datos NoSQL.
- Mongoose: Librería ODM para interactuar con MongoDB.
- JWT: Para la autenticación de usuarios.
- Bcrypt: Para el hash y comparación de contraseñas de manera segura.
# Pasos importantes para realizar el proyecto 📋
1. Configuración inicial 🔧
Instalación de dependencias:

bash
Copiar código
npm install express mongoose bcryptjs jsonwebtoken
Configuración de MongoDB:

Si usas MongoDB Atlas, crea una base de datos y obtén la URL de conexión.
Si usas MongoDB local, asegúrate de tener MongoDB corriendo en tu máquina.
Crear archivo .env con las siguientes variables:

bash
Copiar código
DB_URI=mongodb://localhost:27017/red-social
JWT_SECRET=mi-secreto-seguro
2. Creación de Rutas y Controladores 🛤️
Usuarios
Registro de usuario:

- Crea un endpoint POST /users/register que permita a los usuarios registrarse.
Usa Bcrypt para encriptar contraseñas.
Login de usuario:

- Crea un endpoint POST /users/login que permita a los usuarios autenticarse.
Genera un token JWT que será utilizado para autenticar futuras solicitudes.
Posts
- CRUD de posts:
Crea los endpoints para crear (POST), actualizar (PUT), eliminar (DELETE) y obtener (GET) posts.
Asegúrate de que las rutas que requieren modificaciones estén protegidas con middleware para verificar si el usuario está autenticado.
Likes y Comentarios
Likes:

- Crea los endpoints POST /posts/:id/like y DELETE /posts/:id/like para dar y quitar likes a un post.
Comentarios:

- Crea el endpoint POST /comments/:postId para permitir a los usuarios crear comentarios en los posts.

3. Middleware de Autenticación 🔒
Autenticación JWT:

- Crea un middleware que valide el token JWT enviado en los encabezados de las solicitudes para proteger las rutas que requieren un usuario autenticado.
Validación de autoría:

- Implementa un middleware para verificar que el usuario que intenta editar o eliminar un post sea el autor del mismo.
4. Paginación y Búsqueda 📑
Implementa paginación de posts en el endpoint GET /posts (muestra 10 posts por página).
Implementa búsqueda por nombre en el endpoint GET /posts/search para que los usuarios puedan buscar posts fácilmente.

## Estructura del Proyecto 📂

📂Red-social-backend/
- 📂controllers/
- postController.js
- userController.js
- commentController.js
-📂models/
- Post.js
- User.js
- Comment.js
- 📂routes/
- postRoutes.js
- userRoutes.js
- commentRoutes.js
- 📂middlewares/
- authMiddleware.js
- postAuthorizationMiddleware.js
- 📂.env
- index.js
- README.md

# Conclusión 🎯
Este proyecto es una excelente manera de aprender y aplicar Node.js, Express, MongoDB, y la autenticación basada en JWT. A lo largo de este proyecto, tendrás la oportunidad de crear una API RESTful robusta que puede ser utilizada como base para una red social o cualquier aplicación que necesite gestionar usuarios, posts y comentarios.

## Autor: 
- Alberto Santos.
- Karen Salazar.
