# 📚 Biblioteca CCNBPAF

Sitio web del Centro Cultural de Necochea - Biblioteca Popular Andrés Ferreyra.

---

## 🚀 Requisitos previos

Antes de empezar, necesitas tener instalado en tu computadora:

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

---

## 🛠️ Instalación paso a paso

1. **Descarga o clona este repositorio**

   Si tienes Git, puedes usar:
   ```bash
   git clone https://github.com/Frankmolin/Biblioteca-CCN-BPAF.git
   cd bibloteca
   ```
   O descarga el ZIP y descomprímelo.

2. **Instala las dependencias**

   Abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

   Verás una dirección como `http://localhost:5173/` en la terminal. Ábrela en tu navegador.

---

## 🧩 Tecnologías y librerías usadas

- **React**: para construir la interfaz de usuario.
- **React Router DOM**: para la navegación entre páginas.
- **Tailwind CSS**: para los estilos rápidos y modernos.
- **DaisyUI**: componentes visuales listos para usar.
- **Framer Motion**: animaciones y transiciones suaves.

---

## 📁 Estructura básica del proyecto

```
bibloteca/
├── src/
│   ├── components/    # Componentes reutilizables (Navbar, etc)
│   ├── layouts/       # Layouts generales
│   ├── pages/         # Cada página del sitio
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Punto de entrada
├── public/
├── package.json
└── README.md
```

---

## 💡 Notas

- Si tienes problemas, asegúrate de tener Node.js instalado correctamente.
- Puedes modificar los estilos en los archivos de Tailwind o DaisyUI.
- Para detener el servidor, presiona `Ctrl + C` en la terminal.

---

¡Listo! Ahora puedes empezar a personalizar tu sitio web de la biblioteca. 🚀
