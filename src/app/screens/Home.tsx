
import { useTranslation } from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();

  

  return (
    <main className='flex flex-col items-center justify-center w-full h-full'>
      
    <h1 className='text-3xl font-bold text-blue-600 mb-2'>sebastian</h1>
    <p className='text-lg text-gray-700 mb-8'>{t ('description')}</p> {/* Agrega una descripción sobre ti */}
    <p className='text-gray-600'>Contacto: sebastian.fajardo@campusucc.edu.co</p> {/* Incluye tu información de contacto */}
  </main>
    
  );
};

export default Home;
