import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
//import Home from './screens/Home';
import Home_2 from './screens/Home_2';
import Projectos from './screens/Projectos';
import Experiencia from './screens/Experiencia';
import About from './screens/About';
import NotFound from './screens/NotFound';
import Navbar from './components/Nav_bar';
import Contactame from './screens/Contactame';
function App() {
  return (
    <main className='flex flex-row w-screen h-screen  font-roboto'>
      
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Navbar/>
        <section >
          <Routes>
            <Route path='/' element={<Home_2 />} />
            <Route path='/projectos' element={<Projectos />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactame' element={<Contactame />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default App;


