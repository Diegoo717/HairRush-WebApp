# HairRush WebApp

HairRush WebApp es una interfaz frontend desarrollada con React.js, que interactúa con la API RESTful de HairRush. Permite a los usuarios visualizar servicios, gestionar citas de peluquería y acceder a información de contacto, optimizando la experiencia en dispositivos móviles y de escritorio.

## 🔧 Tecnologías Utilizadas

- **Frontend Framework**: React.js
- **Routing**: React Router
- **Estado Global**: Context API / Redux
- **Estilos**: CSS Modules / Styled Components
- **HTTP Client**: Axios/Fetch API
- **Build Tool**: Vite / Create React App
- **Package Manager**: npm/yarn

## 🏗️ Arquitectura

La aplicación está construida siguiendo una arquitectura de componentes modulares que se comunican con el backend a través de endpoints RESTful:

```
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── pages/              # Páginas principales
│   ├── services/           # Servicios para API calls
│   ├── hooks/              # Custom hooks
│   ├── context/            # Context providers
│   ├── utils/              # Utilidades y helpers
│   └── styles/             # Estilos globales
```

## ✨ Características Principales

### 💇‍♀️ Gestión de Servicios
- Visualización del catálogo completo de servicios
- Detalles de precios y duración
- Categorización por tipo de servicio

### 📅 Sistema de Citas
- Calendario interactivo para agendamiento
- Disponibilidad en tiempo real
- Confirmaciones automáticas por email

### 📞 Información de Contacto
- Datos de ubicación y horarios
- Formulario de contacto integrado
- Integración con mapas

### ❤️ Sección Informativa
- Historia y valores del salón
- Testimonios de clientes
- Galería de trabajos realizados

## 🔌 Integración con API

La aplicación consume la **API REST HairRush**, un backend desarrollado con:
- **Backend**: Node.js/Express
- **Base de Datos**: PostgreSQL con Sequelize ORM
- **Autenticación**: JWT y validación por dominio
- **Notificaciones**: Resend API para emails personalizados
- **Validaciones**: Middleware robusto de validación de datos



## 🚀 Instalación y Configuración

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/hairrush-webapp.git
cd hairrush-webapp
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_API_KEY=tu_api_key
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: Experiencia completa con todas las funcionalidades
- **Tablet**: Interfaz adaptada para pantallas medianas
- **Mobile**: UI optimizada para dispositivos móviles con navegación touch-friendly



## 📦 Deployment

```bash
# Build para producción
npm run build

# Preview del build
npm run preview
```



## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

**HairRush WebApp** - Transformando la experiencia de agendamiento en peluquerías a través de la tecnología moderna.
