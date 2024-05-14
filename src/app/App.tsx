import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './screens/Home';
import Analytics from './screens/Analytics';
import Chat from './screens/Chat';
import NotFound from './screens/NotFound';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header />
        <section className='bg-red-300'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
        
      </section>
    </main>
  );
}

export default App;
