
import './App.css';
import Hero from './UI/Hero';
import HeroHome from './components/HeroHome';
import HeroLast from './components/HeroLast';
import HeroMain from './components/HeroMain';
import NavBar from './UI/NavBar'
import Reviews from './UI/Reviews';
import Footer from './UI/Footer';

const App = () => {

  const hero = [
    {
      id: 3,
      title1: 'London.',
      title2: 'Soho',
      heading: 'Nothing Store is coming',
      details: 'Our first ever store is coming. In the heart of Soho, London’s cultural hub.While you wait, find Nothing products in our online and offline partner stores.',
      button1: '( Find a store )',
      button2: '( Read More )',
      heroimg: require('./img/hero3.jpg'),
      herotitle: 'where to buy',
    },
    {
      id: 4,
      title1: 'Introducing.',
      title2: 'Ear (1).',
      heading: 'Sound of change',
      details: 'Raw beauty with precise engineering and state-of-the-art noise cancellation for a pure sound experience.',
      button1: '( Learn More )',
      button2: '',
      heroimg: require('./img/hero4.png'),
      herotitle: 'ear (1)',
    },
    {
      id: 5,
      title1: 'About,.',
      title2: 'Nothing.',
      heading: 'About us',
      details: 'It’s easy to make something. Even easier when it’s just like the thing before it. And the one before that. But like all good things, this one starts from scratch. No notes. No blueprints. No map to find our way back.',
      button1: '( Learn More )',
      button2: '',
      heroimg: require('./img/hero5.png'),
      herotitle: 'about us',
    }

  ]


  return (
    <>
      <NavBar />
      <HeroHome />
      <HeroMain />
      <Hero herodata={hero} />
      <HeroLast />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
