# Athenea Project

¡Bienvenido a **Athenea**, pequeña app en Angular para gestionar usuarios con JSON Server!

## 🚀 ¿Qué hace esta app?

1. **Frontend en Angular** Una interfaz moderna y adaptable, lista para funcionar en móvil y escritorio.
2. **Backend con JSON Server** Un API REST ligera guardando los usuarios en un fichero local.
3. **Filtrado en tiempo real** Busca por nombre, apellido, email o id y mira resultados al instante.
4. **Docker Compose** Con un solo comando `docker compose up --build` tendrás todo en marcha, sin quebraderos de cabeza, que ya sabemos que a nadie le gusta.

---

## 📦 Antes de empezar

Vas a necesitar:

- **Docker Desktop** (v20.10+).
- **Docker Compose** (ya incluido con Docker Desktop).

¿Cómo comprobarlo?:

```bash
docker --version
docker compose --version
```

---

## 🏃‍♂️ Arranque rápido (recomendado)

1. Clona este repositorio y entra en la carpeta:
   ```bash
   ```

git clone [athenea-project](https://github.com/SrBlumTorres/athenea-project.git)

````
2. Levanta Angular y JSON Server:
```bash
docker compose up --build
````

3. Abre tu navegador:
   - **App Angular** → [http://localhost:4200](http://localhost:4200)
   - **API JSON Server** → [http://localhost:3000/users](http://localhost:3000/users)

¡Y listo! 🎉

---

## 🛠️ Modo desarrollo

Si prefieres hot‑reload y logs al vuelo, personalmente lo uso:

```bash
docker compose up -d --build
docker compose logs -f angular-app
```

---

## 📋 Endpoints disponibles

El backend simulado (JSON Server) te ofrece:

| Método | Ruta         | Descripción               |
| ------ | ------------ | ------------------------- |
| GET    | `/users`     | Lista todos los usuarios  |
| GET    | `/users/:id` | Obtiene un usuario por ID |

Ejemplo de usuario en `db.json`:

```json
{
  "id": "4782938L",
  "email": "juan@example.com",
  "name": "Juan",
  "surname": "Pérez"
}
```

---

## 🚩 Funcionalidad clave: filtros

- **Nombre**
- **Apellido**
- **Email**
- **Id**

Teclea lo que quieras en el buscador y verás cómo la lista se ajusta al momento. Si el servidor no está arriba, los filtros no encontrarán nada, ¡así que asegúrate de tener la API corriendo!

---

## 💡 Comandos útiles

```bash
# Parar todo
docker compose down

# Ver logs
docker compose logs angular-app
docker compose logs json-server

# Reconstruir solo Angular
docker compose build angular-app

# Levantar en background
docker compose up -d

# Ver estado de contenedores
docker compose ps
```

---

## 🐞 Solución de problemas

1. **Puerto ocupado**\
   Si 4200 o 3000 están en uso, edita `docker-compose.yml` y cambia la asignación:
   ```yaml
   ports:
     - "4201:4200"
   ```
2. **Cambios no se ven**\
   Fuerza rebuild:
   ```bash
   ```

docker compose up --build --force-recreate

````
3. **Permisos (Linux/Mac)**  
   ```bash
sudo docker compose up --build
````

---

## 📁 Estructura del proyecto

```
athenea-project/
├── src/                  # Código Angular
├── db.json               # Datos de JSON Server
├── docker-compose.yml    # Orquesta containers
├── Dockerfile            # Convierte Angular en imagen Docker
├── package.json          # Dependencias y scripts
└── README.md             # Este documento
```

---

## 🌟 Tecnologías

- **Angular 17**
- **TypeScript**
- **JSON Server**
- **Docker & Docker Compose**
- **Node.js**

---

## 📞 Soporte

En caso de duda no dudéis en escribirme o contáctarme. 🚀

