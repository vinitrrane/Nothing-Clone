
import './App.css';
import Hero from './UI/Hero';
import NavBar from './UI/NavBar'
import Reviews from './UI/Reviews';
import Footer from './UI/Footer';

const App = () => {

  const heroMain = [{
    id: 'home',
    title1: 'Introducing.',
    title2: 'Phone (1).',
    heading: 'Pure instinct',
    details: 'Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast.',
    button: '( Learn More )',
    heroimg: require('./img/hero2.jpg'),
    herotitle: 'phone (1)',
    titleclass: 'darktitle',
  }, {
    id: 'earstick',
    title1: 'Sublime.',
    title2: '',
    heading: 'Ear (stick)',
    details: 'Tech you can’t feel. Leaving just space for sound to come to life. Powered by custom sound technology. Beautifully authentic, at any frequency.',
    button: '( Learn More )',
    heroimg: require('./img/hero3.jpg'),
    herotitle: 'ear (stick)',
    titleclass: 'darktitle',
  },]

  const hero = [
    {
      id: 'ear1',
      title1: 'Introducing.',
      title2: 'Ear (1).',
      heading: 'Sound of change',
      details: 'Raw beauty with precise engineering and state-of-the-art noise cancellation for a pure sound experience.',
      button: '( Learn More )',
      heroimg: require('./img/hero4.png'),
      herotitle: 'ear (1)',
    },
    {
      id: 'about',
      title1: 'London.',
      title2: 'Nothing.',
      heading: 'About us',
      details: 'It’s easy to make something. Even easier when it’s just like the thing before it. And the one before that. But like all good things, this one starts from scratch. No notes. No blueprints. No map to find our way back.',
      button: '( Learn More )',
      heroimg: require('./img/hero5.png'),
      herotitle: 'about us',
    },
    {
      id: 'store',
      title1: 'About.',
      title2: 'Soho.',
      heading: 'Nothing Store is coming',
      details: 'Our first ever store is coming. In the heart of Soho, London’s cultural hub. While you wait, find Nothing products in our online and offline partner stores.',
      button: '( Find a store )',
      heroimg: require('./img/hero5.jpg'),
      herotitle: 'about us',
    }

  ]

  const heroLast = [{
    id: 'support',
    title1: 'Nothing.',
    title2: 'Support.',
    heading: 'Our new support services',
    details: 'We’ve completely redesigned our support services. More agents, new ways to contact us, device repairs and a brand new support portal. To fully take care of our Phone (1) experience.',
    button: '( Learn More )',
    heroimg: require('./img/hero6.png'),
    herotitle: 'support',
    titleclass: 'darktitle',
  },]


  return (
    <>
      <NavBar />
      <Hero herodata={heroMain} />
      <Hero herodata={hero} />
      <Hero herodata={heroLast} />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
