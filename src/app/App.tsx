import { Route, Routes } from 'react-router-dom';
//import Navbar from './components/navbar';
import Header from './components/header';
//import Home from './screens/Home';
import Home_2 from './screens/Home_2';
import Projectos from './screens/Projectos';
import Experiencia from './screens/Experiencia';
import NotFound from './screens/NotFound';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen  font-roboto'>
      
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header />
        <section >
          <Routes>
            <Route path='/' element={<Home_2 />} />
            <Route path='/projectos' element={<Projectos />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
        
      </section>
    </main>
  );
}

export default App;

//<Navbar />
