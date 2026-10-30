import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EmojiGrid from './components/EmojiGrid/EmojiGrid';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmojiGrid />
      </main>
    </>
  );
}

export default App;