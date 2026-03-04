# 🔴 Pokédex Vue

Aplicación web tipo Pokédex construida con **Vue 3** y **Vite**, consumiendo datos en tiempo real de la [PokéAPI](https://pokeapi.co/).

🌐 **Demo en vivo:** [Gcota1694.github.io/pokedex-vue](https://Gcota1694.github.io/pokedex-vue)

---

## ✨ Funcionalidades

- Lista completa de los primeros 151 Pokémon
- Buscador en tiempo real por nombre
- Tarjetas con imagen oficial, número y tipos
- Vista de detalle por Pokémon con:
  - Sprite animado flotante
  - Descripción en español
  - Estadísticas base con barras de progreso
  - Altura, peso y habilidades
  - Navegación entre Pokémon (anterior / siguiente)
  - Movimientos
- Diseño oscuro con colores dinámicos por tipo

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| Vue 3 | Framework principal |
| Vue Router | Navegación entre páginas |
| Vite | Bundler y servidor de desarrollo |
| PokéAPI | Fuente de datos |
| GitHub Pages | Hosting |

---

## 🚀 Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/pokedex-vue.git

# Entrar a la carpeta
cd pokedex-vue

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📦 Build y deploy

```bash
# Construir para producción
npm run build

# Publicar en GitHub Pages
npm run deploy
```

---

## 📁 Estructura del proyecto

```
pokedex-vue/
├── src/
│   ├── components/
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── Pokemon.vue      ← Lista de Pokémon
│   │   ├── PokeView.vue     ← Detalle de Pokémon
│   │   ├── About.vue
│   │   └── Login.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
├── vite.config.js
└── package.json




## 👤 Autor

Hecho con ❤️ por Gabriel Alejo Cota Ruiz  
Proyecto académico — 9no semestre Web 2