# Nxt Watch - YouTube Clone

A modern YouTube clone application built with React and Vite, featuring video streaming, user authentication, and a responsive design with dark/light theme support.

## 🚀 Live Demo

Check out the live demo: [Nxt Watch](https://akhil07-ctrl.github.io/Youtube-Clone/login)

## ✨ Features

- **User Authentication**: Secure login system with protected routes
- **Video Streaming**: Watch videos with React Player integration
- **Multiple Sections**:
  - Home: Browse all videos
  - Trending: Discover popular content
  - Gaming: Gaming-specific videos
  - Saved Videos: Personal video collection
- **Interactive Features**:
  - Like/Dislike videos
  - Save videos for later
  - Search functionality
- **Theme Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all device sizes
- **Ad Banner**: Dismissible promotional banner

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Styled Components, CSS
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Video Player**: React Player
- **Icons**: React Icons
- **Popup**: ReactJS Popup
- **Date Handling**: date-fns
- **Cookies**: js-cookie
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Akhil07-ctrl/Youtube-Clone.git
cd Youtube-Clone/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
client/
├── public/
│   ├── 404.html
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FailureView/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── GameItemCard/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── Gaming/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── Header/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── Home/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── HomeVideoItemCard/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── Loader/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── Login/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── NavigationMenu/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── NavigationMenuContainer/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── NotFound/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── ProtectedRoute/
│   │   │   └── index.jsx
│   │   ├── SavedVideoItemCard/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── SavedVideos/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── Trending/
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   ├── TrendingVideoItemCard/
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── styledComponents.js
│   │   └── Video/
│   │       ├── index.css
│   │       ├── index.jsx
│   │       └── styledComponents.js
│   ├── context/
│   │   └── NxtWatchContext.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Key Components

- **App.jsx**: Main application component with routing and state management
- **Header**: Navigation bar with search and theme toggle
- **Home**: Main video feed
- **Trending**: Popular videos section
- **Gaming**: Gaming videos collection
- **SavedVideos**: User's saved video collection
- **Video**: Individual video player page
- **Login**: Authentication component

## 🔧 Configuration

The application uses:
- **Vite** for fast development and building
- **ESLint** for code quality
- **React Router** for client-side routing
- **Context API** for state management
- **Styled Components** for component styling

## 🌐 Deployment

The application is configured for deployment on GitHub Pages. Use the following command to deploy:

```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🧑‍💻 Developer

- **Kundena Akhil** - [Portfolio](https://portfolio-nine-flax-29.vercel.app/) - [GitHub](https://github.com/Akhil07-ctrl) - [LinkedIn](https://www.linkedin.com/in/kundena-akhil-4b7073170/)

---

Built with ❤️ using React and Vite
