import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',
        hi: 'Hello',
        description: 'Hello, my name is Sebastian, I have experience in developing web applications, software deployment and software architecture, I want to learn more every day and have more experience within this infinite technological world.',
        exp:'full Stack Developer',
        exp_lenguaje:' Languages ​​in my domain',
        sub_exp_lenguaje:' Languages ​​in my domain',
        exp_tecnologies:'Thecnologias en mi dominio',
        sub_exp_tecnologies:'Tecnologias en mi dominio'

        
        
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        hi: 'Hola',
        description: 'hola mi nombre es sebastian ,tengo experiencia en el desarrollo de aplicaciones wep ,despliege de software y arquitectura de software  , quiero aprender cada dia mas y tener mas experiencia dentro de este infinito mundo tecnologico',
        exp:'desarrollador de pila completa',
        exp_lenguaje:'Lenguajes en mi dominio',
        sub_exp_lenguaje:' Languages ​​in my domain',
        exp_tecnologies:'Tecnologias en mi dominio',
        sub_exp_tecnologies:'Tecnologias en mi dominio'
      },
    },
  },
});

export default i18n;
