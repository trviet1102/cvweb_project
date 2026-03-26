import './App.css'
import Hero from './Hero.js';
import Projects from './Projects.js';
import About from './about.tsx';
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  const {t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

return (
  <nav className = 'navbar-container'>
    <div className='navbar-content'>

    <div className='nav-links'>
      <a href='#home' className='nav-home-name'>Trieu Hoang Viet</a>
      <a href='#projects' className='nav-item'>{t('project_app')}</a>
      <a href='#about' className='nav-item'>{t('about_app')}</a>
    </div>

    <div className="language-container">
      <button 
        className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`} 
        onClick={() => changeLanguage('vi')}
      >
        <img src="https://flagcdn.com/w40/vn.png" alt="VN" />
        <span>VI</span>
      </button>

      <div className="divider"></div>

      <button 
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} 
        onClick={() => changeLanguage('en')}
      >
        <img src="https://flagcdn.com/w40/gb.png" alt="EN" />
        <span>EN</span>
      </button>
    </div>

    </div>
  </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
        <Projects />
        <About />
      </div>
  )
}

export default App
