import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </div>
  );
}

export default App;
