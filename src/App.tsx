import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';
import KeepInTouch from './components/KeepInTouch';
import LatestArticles from './components/LatestArticles';

import styles from './App.module.scss'


function App() {
  return (
    <div >
      <Navbar />
      <main className={styles.container}>
      <Hero />
      <About />
      <Works />
      <LatestArticles />
      <KeepInTouch />
      </main>

      <Footer />
    </div>
  );
}

export default App;
