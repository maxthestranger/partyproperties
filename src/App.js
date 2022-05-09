import './assets/fonts/css/font-awesome.css';
import './assets/styles/main.css';
import './assets/styles/custom.css';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import Faq from './components/faq';

function App() {
  return (
    <p>
      <Header />
      <Faq />
      <Contact />
      <Footer />
    </p>
  );
}

export default App;
