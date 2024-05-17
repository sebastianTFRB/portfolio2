import { useTranslation } from 'react-i18next';
import { TECHS } from './../constants';
import { LENGUAGES } from './../constants';

const Experience = () => {

  const {t} = useTranslation();
  return (
    <div>
      {/* Primer bloque de experiencia */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='text-center'>
          <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 bg-clip-text text-4xl font-bold border-b-4 border-gray-500 p-2 inline tracking-tight text-transparent">
            {t('exp_lenguaje')}
          </span>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
  
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {TECHS.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
  
      {/* Segundo bloque de experiencia (duplicado) */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='text-center'>
          <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl font-bold border-b-4 border-gray-500 p-2 inline tracking-tight text-transparent'>
          {t('exp_tecnologies')}
          </span>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
  
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {LENGUAGES.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
}

export default Experience;
