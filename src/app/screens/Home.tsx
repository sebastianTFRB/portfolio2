
import { useTranslation } from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();

  

  return (
    <main className='flex flex-col items-center justify-center w-full h-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
    <h1 className='text-3xl font-bold text-blue-600 mb-2'>sebastian</h1>
    <p className='text-lg text-gray-700 mb-8'>{t ('description')}</p> {/* Agrega una descripción sobre ti */}
    <p className='text-gray-600'>Contacto: sebastian.fajardo@campusucc.edu.co</p> {/* Incluye tu información de contacto */}
  </main>
    
  );
};

export default Home;
