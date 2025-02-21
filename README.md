# Proyecto Angular: Gestión de Estudiantes

## 📌 Descripción
Este proyecto implementa una aplicación Angular standalone con formularios reactivos y componentes organizados para gestionar estudiantes. Incluye vistas para registro de estudiantes, una lista de estudiantes y un flujo para la aprobación de solicitudes.

## 🚀 Características
- **Standalone Components:** No requiere módulos tradicionales para los componentes.
- **Bootstrap 5:** Utilizado para el diseño y la presentación.
- **Reactive Forms:** Manejo de formularios reactivos para la validación y captura de datos.
- **Integración con servicios:** Uso de servicios para manejar datos de estudiantes y autenticación.
- **Navegación:** Enlace entre diferentes vistas (lista de estudiantes, registro, aprobación).

## 🛠️ Instalación
1. **Instalar Angular CLI**: Asegúrate de tener el CLI de Angular instalado:
   ```bash
   npm install -g @angular/cli
   ```

2. **Crear un nuevo proyecto Angular**:
   ```bash
   ng new students-app --standalone --routing --style=scss
   ```
   Selecciona SCSS como preprocesador CSS.

3. **Navegar al directorio del proyecto**:
   ```bash
   cd students-app
   ```

4. **Instalar Bootstrap 5**:
   ```bash
   npm install bootstrap@5
   ```
   Añade la referencia de estilos en el archivo `angular.json`:
   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.scss"
   ]
   ```

5. **Instalar dependencias adicionales si es necesario**:
   ```bash
   npm install
   ```

## 📂 Estructura de Componentes

- **LoginComponent:** Formulario de inicio de sesión.
- **RegisterStudentComponent:** Formulario de registro de estudiantes con validación.
- **StudentListComponent:** Lista de estudiantes con botones para cerrar sesión y navegar a la página de aprobación.
- **AprobarSolicitudesComponent (opcional):** Maneja la lógica de aprobación de solicitudes.

## 🔑 Principales Vistas

1. **Inicio de Sesión:**
   - Ruta: `/`
   - Componente: `LoginComponent`
   - Formulario reactivo para autenticación.

2. **Registro de Estudiantes:**
   - Ruta: `/university/register-student`
   - Componente: `RegisterStudentComponent`
   - Formulario para ingresar datos como nombre, correo, ID, departamento, rol y más.

3. **Lista de Estudiantes:**
   - Ruta: `/hospital/student-list`
   - Componente: `StudentListComponent`
   - Tabla para mostrar estudiantes con columnas como Nombre, Correo, ID y Departamento.

4. **Aprobar Solicitudes:**
   - Ruta: `/hospital/approve`
   - Componente: `AprobarSolicitudesComponent`
   - Página para gestionar y aprobar o rechazar solicitudes.

## ✨ Servicios
- **AuthService:** Maneja la autenticación de usuarios (login, logout).
- **StudentService:** Provee métodos para registrar estudiantes y obtener la lista de estudiantes.

## 🌐 Navegación
- **Botón de cierre de sesión:**
  Cada componente incluye un botón que permite al usuario cerrar sesión y ser redirigido a la página de inicio de sesión.

- **Botón de navegación a la aprobación:**
  El componente de lista de estudiantes incluye un botón para ir directamente a la vista de aprobación.

## 📜 Notas
Este proyecto está diseñado con Angular standalone components y utiliza las mejores prácticas actuales en la organización de componentes y servicios. El uso de Bootstrap 5 asegura una presentación atractiva y una experiencia de usuario consistente.