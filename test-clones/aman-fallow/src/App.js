import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <BlogSection></BlogSection>
    </div>
  );
}

export default App;
