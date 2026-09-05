import { Product } from './types';
// @ts-ignore
import poloMarino from './assets/images/polo_marino.webp';
// @ts-ignore
import poloBlanco from './assets/images/polo_blanco.webp';
// @ts-ignore
import poloCarbon from './assets/images/polo_carbon.webp';
// @ts-ignore
import poloLimon from './assets/images/polo_limon.webp';
// @ts-ignore
import poloNaranja from './assets/images/polo_naranja.webp';
// @ts-ignore
import poloRojo from './assets/images/polo_rojo.webp';
// @ts-ignore
import poloTurquesa from './assets/images/polo_turquesa.webp';

export const CATEGORIES = [
  { id: 'todos', name: 'Todos', icon: 'Sparkles' },
  { id: 'restaurante', name: 'Restaurante', icon: 'Utensils' },
  { id: 'hoteleria', name: 'Hotelería', icon: 'Sparkles' },
  { id: 'medico', name: 'Médico', icon: 'Stethoscope' },
  { id: 'ejecutivo', name: 'Ejecutivo', icon: 'Briefcase' },
  { id: 'industrial', name: 'Industria', icon: 'ShieldAlert' },
];

export const getCategoryName = (catId: string): string => {
  const names: Record<string, string> = {
    'restaurante': 'Restaurante',
    'hoteleria': 'Hotelería',
    'medico': 'Médico',
    'ejecutivo': 'Ejecutivo',
    'industrial': 'Industria',
    'todos': 'Todos'
  };
  return names[catId] || catId;
};

export const PRODUCTS: Product[] = [
  // 1. PLAYERA POLO DRY-FIT CABALLERO / DAMA
  {
    id: 'polo-dryfit-caballero-dama',
    code: 'PL001',
    name: 'Playera Polo Dry-Fit Caballero/Dama',
    price: 240.00,
    category: 'hoteleria',
    image: poloMarino,
    isBestSeller: true,
    isNew: true,
    rating: 4.9,
    description: 'Playera Polo Dry-Fit manga corta disponible en silueta Dama o Caballero. Confeccionada en micro-piqué transpirable de secado ultra rápido, ideal para uniformes corporativos, recepciones, hotelería y empresas.',
    composition: 'DRY-FIT 100% Poliéster (150 g/m2)',
    features: [
      'Disponible en silueta Dama o corte recto Caballero',
      'Botones al tono de alta resistencia cosidos en cruz',
      'Tecnología Dry-Fit de secado ultra rápido y termorregulación',
      'Cuello tejido que conserva su forma lavado tras lavado',
      'Costuras reforzadas en cuello, hombros y sisas'
    ],
    hasCorteSelection: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Azul Marino', hex: '#1e3a8a', code: '343', image: poloMarino },
      { name: 'Blanco', hex: '#ffffff', code: '332', image: poloBlanco },
      { name: 'Naranja', hex: '#f97316', code: '312', image: poloNaranja },
      { name: 'Gris Carbón', hex: '#374151', code: '338', image: poloCarbon },
      { name: 'Rojo', hex: '#b91c1c', code: '322', image: poloRojo },
      { name: 'Turquesa', hex: '#06b6d4', code: '317', image: poloTurquesa },
      { name: 'Verde Limón', hex: '#84cc16', code: '327', image: poloLimon }
    ],
    priceTiers: {
      '1-12': 240.00,
      '13-50': 230.00,
      '51+': 220.00
    }
  },

  // 3. PLAYERA C/REDONDO M/C
  {
    id: 'playera-cuello-redondo-m-c',
    code: 'PL002MC',
    name: 'Playera Cuello Redondo Manga Corta',
    price: 190.00,
    category: 'hoteleria',
    image: '',
    rating: 4.8,
    description: 'Playera clásica de cuello redondo manga corta. Confección en algodón peinado / poliéster de tacto suave y alta frescura, ideal para staff dinámico, eventos, promociones y personal operativo.',
    composition: '50% Algodón / 50% Poliéster o 100% Algodón',
    features: [
      'Cuello redondo con cárdigan acanalado reforzado',
      'Costura doble en mangas y dobladillo inferior',
      'Superficie óptima para bordado o serigrafía de alta definición',
      'Gran durabilidad y resistencia al uso continuo'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Negro', hex: '#000000' },
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Gris Jaspe', hex: '#9ca3af' },
      { name: 'Rojo', hex: '#b91c1c' }
    ],
    priceTiers: {
      '1-12': 190.00,
      '13-50': 180.00,
      '51+': 170.00
    }
  },

  // 4. PLAYERA C/REDONDO M/L (Playera Manga Larga Dry Fit)
  {
    id: 'polo-manga-larga-dry-fit',
    code: 'PL001ML',
    name: 'Playera Manga Larga Dry Fit',
    price: 210.00,
    category: 'hoteleria',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430967/3.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430967/3.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430963/8.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430960/1.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430961/5.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430965/2.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430956/6.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788581147/Dise%C3%B1o_Sin_T%C3%ADtulo_-_4.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430958/7.png'
    ],
    isBestSeller: true,
    isNew: true,
    rating: 4.9,
    description: 'Playera de alto rendimiento con mangas largas confeccionada en tecnología Dry-Fit micro-perforada. Máxima protección solar UV, ligereza y frescura en climas tropicales y exteriores.',
    composition: 'DRY-FIT 100% Poliéster (150 g/m2)',
    features: [
      'Protección solar UPF y confort térmico en exteriores',
      'Manga larga con puño anatómico cómodo',
      'Tela fresca y ligera de secado ultra rápido',
      'Costuras reforzadas de alta resistencia para uso continuo',
      'Excelente retención de forma y color'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Azul Fuerte',
        hex: '#1e3a8a',
        code: '343',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430967/3.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430967/3.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430963/8.png'
        ]
      },
      {
        name: 'Azul Claro',
        hex: '#7dd3fc',
        code: '317',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430960/1.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430960/1.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430961/5.png'
        ]
      },
      {
        name: 'Blanco',
        hex: '#ffffff',
        code: '332',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430965/2.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430965/2.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430956/6.png'
        ]
      },
      {
        name: 'Gris',
        hex: '#9ca3af',
        code: '338',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788581147/Dise%C3%B1o_Sin_T%C3%ADtulo_-_4.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788581147/Dise%C3%B1o_Sin_T%C3%ADtulo_-_4.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787430958/7.png'
        ]
      }
    ],
    priceTiers: {
      '1-12': 210.00,
      '13-50': 203.00,
      '51+': 195.00
    }
  },

  // 5. CAZADORA M/C CAB.
  {
    id: 'cazadora-manga-corta',
    code: 'CZ001MC',
    name: 'Cazadora Manga Corta Caballero',
    price: 650.00,
    category: 'restaurante',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194431/MARINOFRENTE.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194431/MARINOFRENTE.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195977/MARINOPECHO_1.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195981/AZULMARINO_1.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194436/FRENTEB.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195947/PECHO.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195950/FRENTE2.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194421/CAZADORA_NEGRA.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788196026/NEGROFRENTE_1.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788196036/NEGRO_1.png'
    ],
    isBestSeller: true,
    isNew: true,
    rating: 4.9,
    description: 'Cazadora ejecutiva de cocina y servicio manga corta para caballero. Corte moderno de alta presencia con canesú y respiradero en la espalda para garantizar ventilación continua en ambientes calurosos.',
    composition: '100% Poliéster / Gabardina Liviana',
    features: [
      'Cuello camisero formal estructurado',
      'Canesú y respiradero posterior en espalda (ventilación activa)',
      'Manga corta con dobladillo reforzado',
      'Fresca, transpirable y de secado rápido',
      'Ideal para hotelería, cocina de autor y supervisores de campo'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Azul Marino',
        hex: '#0f172a',
        code: '343',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194431/MARINOFRENTE.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194431/MARINOFRENTE.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195977/MARINOPECHO_1.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195981/AZULMARINO_1.png'
        ]
      },
      {
        name: 'Blanco',
        hex: '#ffffff',
        code: '332',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194436/FRENTEB.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194436/FRENTEB.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195947/PECHO.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788195950/FRENTE2.png'
        ]
      },
      {
        name: 'Negro',
        hex: '#000000',
        code: '001',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194421/CAZADORA_NEGRA.png',
        gallery: [
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788194421/CAZADORA_NEGRA.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788196026/NEGROFRENTE_1.png',
          'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788196036/NEGRO_1.png'
        ]
      }
    ],
    priceTiers: {
      '1-12': 650.00,
      '13-50': 585.00,
      '51+': 535.00
    }
  },

  // 6. CAZADORA M/L, CAB.
  {
    id: 'cazadora-manga-larga',
    code: 'CZ001ML',
    name: 'Cazadora Manga Larga Caballero',
    price: 750.00,
    category: 'restaurante',
    image: '',
    rating: 4.9,
    description: 'Cazadora de chef y cocina manga larga para caballero. Acabados premium de alta resistencia térmica y cortes ergonómicos con ventilación en espalda para chefs ejecutivos.',
    composition: '100% Poliéster / Gabardina Liviana',
    features: [
      'Manga larga con puños ajustables para doblar',
      'Canesú ventilado en espalda',
      'Bolsa portalápiz / termómetro en manga izquierda',
      'Tejido repelente a salpicaduras ligeras',
      'Excelente caída y presencia profesional'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Azul Marino',
        hex: '#0f172a'
      },
      {
        name: 'Blanco',
        hex: '#ffffff'
      },
      {
        name: 'Negro',
        hex: '#000000'
      }
    ],
    priceTiers: {
      '1-12': 750.00,
      '13-50': 675.00,
      '51+': 620.00
    }
  },

  // 7. BLUSA MANGA CORTA OXFORD
  {
    id: 'blusa-manga-corta-oxford',
    code: 'B004D',
    name: 'Blusa Manga Corta Oxford',
    price: 350.00,
    category: 'ejecutivo',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788577305/BLUSA_BLANCA.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788577305/BLUSA_BLANCA.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576797/AZUL_CIELO.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788577302/BLUSA_BLANCA_FRENTE.png'
    ],
    rating: 4.8,
    description: 'Blusa ejecutiva manga corta confeccionada en tela Oxford suave de alta resistencia. Corte princesa con pinzas que definen la silueta femenina y cuello estructurado para corbatín o abierto.',
    composition: '60% Algodón / 40% Poliéster (Tela Oxford)',
    features: [
      'Corte princesa con pinzas anatómicas en delantero y espalda',
      'Cuello formal rígido que conserva la forma',
      'Manga corta con dobladillo fino',
      'Tratamiento fácil planchado (Easy Care)',
      'Excelente transpiración y frescura'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Blanco',
        hex: '#ffffff',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788577305/BLUSA_BLANCA.png'
      },
      {
        name: 'Azul Cielo',
        hex: '#7dd3fc',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576797/AZUL_CIELO.png'
      }
    ],
    priceTiers: {
      '1-12': 350.00,
      '13-50': 330.00,
      '51+': 320.00
    }
  },

  // 8. BLUSA MANGA 3/4 OXFORD
  {
    id: 'blusa-manga-3-4-oxford',
    code: 'B001D-13',
    name: 'Blusa Manga 3/4 Oxford',
    price: 370.00,
    category: 'ejecutivo',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576783/BLUSA_MANGA_3_1.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576783/BLUSA_MANGA_3_1.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576771/blusabca3_1.png'
    ],
    rating: 4.8,
    description: 'Blusa corporativa manga 3/4 en tela Oxford premium. Diseño distinguido de fácil planchado, perfecto para oficinas y atención a clientes con balance entre elegancia y dinamismo.',
    composition: '60% Algodón / 40% Poliéster (Oxford)',
    features: [
      'Manga 3/4 con puño abierto decorativo',
      'Pinzas de entalle delantero y trasero',
      'Tela fresca de fácil lavado y planchado',
      'Cuello camisero estructurado para uso formal'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Azul Cielo',
        hex: '#7dd3fc',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576783/BLUSA_MANGA_3_1.png'
      },
      {
        name: 'Blanco',
        hex: '#ffffff',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788576771/blusabca3_1.png'
      }
    ],
    priceTiers: {
      '1-12': 370.00,
      '13-50': 350.00,
      '51+': 345.00
    }
  },

  // 9. BLUSA MANGA LARGA OXFORD
  {
    id: 'blusa-manga-larga-oxford',
    code: 'B001D',
    name: 'Blusa Manga Larga Oxford',
    price: 390.00,
    category: 'ejecutivo',
    image: '',
    rating: 4.8,
    description: 'Blusa ejecutiva formal manga larga con puño ajustable en tela Oxford institucional. Estilizada con pinzas para un porte distinguido y profesional en eventos corporativos y banca.',
    composition: '60% Algodón / 40% Poliéster (Oxford)',
    features: [
      'Puño ajustable con doble botón',
      'Corte princesa para dama',
      'Tejido transpirable de alta densidad',
      'Acabado resistente a arrugas (Easy Care)'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Azul Cielo', hex: '#7dd3fc' },
      { name: 'Rosa Pastel', hex: '#fbcfe8' }
    ],
    priceTiers: {
      '1-12': 390.00,
      '13-50': 370.00,
      '51+': 365.00
    }
  },

  // 10. CAMISA MANGA CORTA OXFORD
  {
    id: 'camisa-manga-corta-oxford',
    code: 'C006C',
    name: 'Camisa Manga Corta Oxford',
    price: 370.00,
    category: 'ejecutivo',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788575136/Dise%C3%B1o_Sin_T%C3%ADtulo_-_1_2.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788575136/Dise%C3%B1o_Sin_T%C3%ADtulo_-_1_2.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788575148/Dise%C3%B1o_Sin_T%C3%ADtulo_-_2_2.png'
    ],
    rating: 4.8,
    description: 'Camisa ejecutiva manga corta confeccionada en tela Oxford 60/40 de alta durabilidad. Corte regular cómodo con cuello firme con botones y bolsa frontal reforzada.',
    composition: '60% Algodón / 40% Poliéster',
    features: [
      'Cuello con botones down para mantener alineación',
      'Bolsillo en pecho izquierdo reforzado',
      'Manga corta con dobladillo de calidad industrial',
      'Tejido Oxford fresco y de fácil planchado'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Celeste / Azul Cielo',
        hex: '#93c5fd',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788575136/Dise%C3%B1o_Sin_T%C3%ADtulo_-_1_2.png'
      },
      { name: 'Blanco', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 370.00,
      '13-50': 350.00,
      '51+': 345.00
    }
  },

  // 11. CAMISA MANGA LARGA OXFORD
  {
    id: 'camisa-manga-larga-oxford',
    code: 'C007C',
    name: 'Camisa Manga Larga Oxford',
    price: 390.00,
    category: 'ejecutivo',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788574414/Dise%C3%B1o_Sin_T%C3%ADtulo_-_1_1.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788574414/Dise%C3%B1o_Sin_T%C3%ADtulo_-_1_1.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788574419/Dise%C3%B1o_Sin_T%C3%ADtulo_-_2_1.png'
    ],
    rating: 4.9,
    description: 'Camisa corporativa manga larga en tejido Oxford institucional. Gran caída, resistencia al desgarro y cuello rígido que garantiza porte sobrio e impecable.',
    composition: '60% Algodón / 40% Poliéster',
    features: [
      'Puño con dos botones para ajuste de muñeca',
      'Canesú con doble pliegue en espalda para amplitud de movimiento',
      'Bolsa en pecho izquierdo',
      'Tela resistente a lavados continuos'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Celeste / Azul Cielo',
        hex: '#93c5fd',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788574414/Dise%C3%B1o_Sin_T%C3%ADtulo_-_1_1.png'
      },
      { name: 'Blanco', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 390.00,
      '13-50': 370.00,
      '51+': 365.00
    }
  },

  // 12. FILIPINAS DE COCINA M/L GAB.
  {
    id: 'filipina-cocina-ml-gab',
    code: 'FI001ML-G',
    name: 'Filipinas de Cocina M/L Gabardina',
    price: 410.00,
    category: 'restaurante',
    image: '',
    rating: 4.9,
    description: 'Filipina clásica de cocina manga larga confeccionada en gabardina de uso rudo. Protección térmica superior contra calor y salpicaduras con doble cruce de botonadura.',
    composition: '65% Poliéster / 35% Algodón (Gabardina de alta resistencia)',
    features: [
      'Doble cruce de botonadura frontal desmontable / intercambiable',
      'Bolsa portatermómetro en manga izquierda',
      'Cuello mao tradicional cómodo',
      'Manga larga con puño doblable de seguridad'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Blanco',
        hex: '#ffffff'
      },
      {
        name: 'Negro',
        hex: '#000000'
      }
    ],
    priceTiers: {
      '1-12': 410.00,
      '13-50': 405.00,
      '51+': 395.00
    }
  },

  // 13. FILIPINAS DE COCINA M/C GAB.
  {
    id: 'filipina-cocina-mc-gab',
    code: 'FI001MC-G',
    name: 'Filipinas de Cocina M/C Gabardina',
    price: 390.00,
    category: 'restaurante',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788571992/Dise%C3%B1o_Sin_T%C3%ADtulo_-_11.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788571992/Dise%C3%B1o_Sin_T%C3%ADtulo_-_11.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788572851/UNIFROMES-29_3.png'
    ],
    rating: 4.8,
    description: 'Filipina de cocina manga corta en gabardina de alto gramaje. Máxima frescura y agilidad para parrilleros, cocineros de línea y personal en ambientes de alta temperatura.',
    composition: '65% Poliéster / 35% Algodón (Gabardina)',
    features: [
      'Manga corta con dobladillo reforzado',
      'Doble cruce frontal de botones durables',
      'Bolsa en manga para lápiz o pinzas',
      'Resistente a lavados industriales intensivos'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Blanco',
        hex: '#ffffff',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788571992/Dise%C3%B1o_Sin_T%C3%ADtulo_-_11.png'
      },
      {
        name: 'Negro',
        hex: '#000000',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788572851/UNIFROMES-29_3.png'
      }
    ],
    priceTiers: {
      '1-12': 390.00,
      '13-50': 380.00,
      '51+': 370.00
    }
  },

  // 14. FILIPINAS DE COCINA M/L BROOKLYN
  {
    id: 'filipina-cocina-ml-brooklyn',
    code: 'FI002ML-B',
    name: 'Filipinas de Cocina M/L Brooklyn',
    price: 580.00,
    category: 'restaurante',
    image: '',
    rating: 4.9,
    description: 'Filipina de chef moderna estilo Brooklyn manga larga. Tejido repelente con tecnología anti-manchas, vivos de contraste y paneles de aireación lateral para alta gastronomía.',
    composition: 'Tejido Técnico Repelente de Alto Desempeño',
    features: [
      'Corte vanguardista Brooklyn entallado',
      'Tejido repelente a salpicaduras de grasa y agua',
      'Paneles de malla transpirable bajo brazos',
      'Broches de presión ocultos inoxidables'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro con Vivos Grises', hex: '#1f2937' },
      { name: 'Blanco con Vivos Negros', hex: '#f3f4f6' }
    ],
    priceTiers: {
      '1-12': 580.00,
      '13-50': 550.00,
      '51+': 520.00
    }
  },

  // 15. FILIPINAS DE COCINA M/C BROOKLYN
  {
    id: 'filipina-cocina-mc-brooklyn',
    code: 'FI002MC-B',
    name: 'Filipinas de Cocina M/C Brooklyn',
    price: 560.00,
    category: 'restaurante',
    image: '',
    rating: 4.9,
    description: 'Filipina de cocina estilo Brooklyn manga corta. Diseño contemporáneo repelente a fluidos con máxima ventilación para chefs que buscan confort sin perder estética.',
    composition: 'Tejido Técnico Repelente de Alto Desempeño',
    features: [
      'Manga corta ergonométrica',
      'Acabado repelente que repele líquidos y manchas',
      'Respaldo transpirable y ligero',
      'Broches frontales ocultos'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro con Vivos', hex: '#111827' },
      { name: 'Blanco con Vivos', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 560.00,
      '13-50': 540.00,
      '51+': 510.00
    }
  },

  // 16. PANTALON DE VESTIR EN SUPREMO
  {
    id: 'pantalon-vestir-supremo',
    code: 'PV001S',
    name: 'Pantalón de Vestir en Supremo',
    price: 390.00,
    category: 'ejecutivo',
    image: '',
    rating: 4.8,
    description: 'Pantalón formal de vestir confeccionado en tela Supremo de calidad premium. Caída elegante, resistencia al roce y acabado que conserva el planchado impecable todo el día.',
    composition: 'Tela Supremo 100% Microfibra de Poliéster Peinado',
    features: [
      'Corte recto con pretina reforzada',
      'Bolsillos laterales sesgados y bolsas traseras de ojal',
      'Cierre y botón de alta seguridad',
      'Planchado permanente y fácil cuidado'
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Gris Oxford', hex: '#374151' },
      { name: 'Kaki', hex: '#d4b996' }
    ],
    priceTiers: {
      '1-12': 390.00,
      '13-50': 370.00,
      '51+': 350.00
    }
  },

  // 17. PANTALON DE VESTIR EN TERGAL
  {
    id: 'pantalon-vestir-tergal',
    code: 'PV002T',
    name: 'Pantalón de Vestir en Tergal',
    price: 370.00,
    category: 'ejecutivo',
    image: '',
    rating: 4.7,
    description: 'Pantalón de vestir en tela Tergal de uso rudo institucional. Excelente balance entre durabilidad, resistencia a la decoloración y facilidad de planchado.',
    composition: 'Tergal Poliéster / Viscosa',
    features: [
      'Pretina con entretela que no se dobla',
      'Corte clásico institucional',
      'Costuras de seguridad reforzadas',
      'Resistente a lavados frecuentes'
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42'],
    colors: [
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Negro', hex: '#000000' },
      { name: 'Gris Plomo', hex: '#4b5563' }
    ],
    priceTiers: {
      '1-12': 370.00,
      '13-50': 355.00,
      '51+': 345.00
    }
  },

  // 18. PANTALON PIJAMA UNISEX SUPREMO
  {
    id: 'pantalon-pijama-unisex-supremo',
    code: 'PU001S',
    name: 'Pantalón Pijama Unisex Supremo',
    price: 360.00,
    category: 'restaurante',
    image: '',
    rating: 4.8,
    description: 'Pantalón holgado estilo pijama unisex en tela Supremo. Cintura elástica con jareta para un ajuste personalizado y máxima comodidad para chefs, cocineros y personal clínico.',
    composition: 'Tela Supremo Suave y Resistente',
    features: [
      'Cintura completa elástica con cordón de ajuste interno',
      'Bolsas laterales profundas y bolsa trasera',
      'Corte amplio que facilita el movimiento constante',
      'Secado rápido y mínima absorción de olores'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Pata de Gallo / Cuadros', hex: '#4b5563' },
      { name: 'Azul Marino', hex: '#1e3a8a' }
    ],
    priceTiers: {
      '1-12': 360.00,
      '13-50': 350.00,
      '51+': 340.00
    }
  },

  // 19. PANTALON CARGO EN GAB.
  {
    id: 'pantalon-cargo-gabardina',
    code: 'PC001G',
    name: 'Pantalón Cargo en Gabardina',
    price: 450.00,
    category: 'industrial',
    image: '',
    rating: 4.9,
    description: 'Pantalón táctico tipo cargo en gabardina de uso rudo. Dotado de 6 bolsas amplias con fuelle y tapas de seguridad, refuerzos en rodillas y tiro reforzado para mantenimiento y seguridad.',
    composition: 'Gabardina 100% Algodón o 65/35 Poliéster-Algodón',
    features: [
      '6 bolsillos estratégicos (2 laterales, 2 tipo cargo en muslos, 2 traseros)',
      'Tapas de velcro o botón de alta resistencia',
      'Remaches en puntos de mayor tensión',
      'Trabillas anchas para cinturón táctico'
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42'],
    colors: [
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Negro', hex: '#000000' },
      { name: 'Kaki', hex: '#d4b996' },
      { name: 'Verde Militar', hex: '#3f6212' }
    ],
    priceTiers: {
      '1-12': 450.00,
      '13-50': 430.00,
      '51+': 420.00
    }
  },

  // 20. CAMISOLA MANTTO EN GAB.
  {
    id: 'camisola-mantenimiento-gabardina',
    code: 'CM001G',
    name: 'Camisola Mantenimiento en Gabardina',
    price: 450.00,
    category: 'industrial',
    image: '',
    rating: 4.8,
    description: 'Camisola industrial para mantenimiento y servicios generales en gabardina de alta resistencia. Confeccionada para proteger contra fricción, polvo y suciedad con solapa frontal y bolsas con fuelle.',
    composition: 'Gabardina 100% Algodón / Poliéster Reforzado',
    features: [
      'Dos bolsas superiores con tapa y botón',
      'Ranura portalápiz en bolsa izquierda',
      'Espalda con fuelles de acción para libertad motriz',
      'Costuras triples reforzadas en hombros y sisas'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Gris Rata', hex: '#4b5563' },
      { name: 'Kaki', hex: '#d4b996' }
    ],
    priceTiers: {
      '1-12': 450.00,
      '13-50': 430.00,
      '51+': 420.00
    }
  },

  // 21. MANDILES DE PETO
  {
    id: 'mandiles-de-peto',
    code: 'MP001',
    name: 'Mandiles de Peto',
    price: 290.00,
    category: 'restaurante',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787421851/8.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787421851/8.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787421851/9.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787421850/10.png'
    ],
    isBestSeller: true,
    rating: 4.9,
    description: 'Mandil de peto completo con cinta ajustable al cuello y cintas laterales para amarrar al frente o atrás. Cuenta con amplia bolsa frontal con división para comandera y bolígrafo.',
    composition: 'Gabardina 65% Poliéster / 35% Algodón',
    features: [
      'Cinta de cuello regulable',
      'Bolsa frontal central dividida para comandas y accesorios',
      'Largo adecuado para protección integral del uniforme',
      'Cintas de cintura extra largas de amarre frontal'
    ],
    sizes: ['Unitalla'],
    colors: [
      {
        name: 'Negro',
        hex: '#000000',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787421851/8.png'
      },
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Rojo Vino', hex: '#7f1d1d' }
    ],
    priceTiers: {
      '1-12': 290.00,
      '13-50': 270.00,
      '51+': 250.00
    }
  },

  // 22. MANDILES LARGOS
  {
    id: 'mandiles-largos',
    code: 'ML001',
    name: 'Mandiles Largos',
    price: 250.00,
    category: 'restaurante',
    image: '',
    rating: 4.8,
    description: 'Mandil largo tipo francés a la cintura. Estilo distinguido para meseros, sommeliers, baristas y cocina de servicio con caída formal bajo la rodilla.',
    composition: 'Gabardina de Poliéster / Algodón',
    features: [
      'Abertura frontal o lateral para facilitar el paso al caminar',
      'Cintas reforzadas en pretina para amarre cómodo',
      'Resistente a manchas y fácil desmanchado',
      'Acabado elegante para servicio a comensales'
    ],
    sizes: ['Unitalla'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Azul Marino', hex: '#1e3a8a' }
    ],
    priceTiers: {
      '1-12': 250.00,
      '13-50': 230.00,
      '51+': 210.00
    }
  },

  // 23. MANDIL CORTO
  {
    id: 'mandil-corto',
    code: 'MC001',
    name: 'Mandil Corto',
    price: 150.00,
    category: 'restaurante',
    image: '',
    rating: 4.8,
    description: 'Mandil corto de cintura para meseros, cajeros y baristas. Compacto, ligero y práctico con tres compartimentos frontales para notas, propinas y terminal.',
    composition: 'Gabardina 65/35 Poliéster-Algodón',
    features: [
      'Tres divisiones frontales de fácil acceso',
      'Largo ideal para agilidad de servicio (medio muslo)',
      'Cintas largas para ajuste frontal',
      'Refuerzo en costuras de bolsillos'
    ],
    sizes: ['Unitalla'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Vino', hex: '#7f1d1d' },
      { name: 'Azul Marino', hex: '#1e3a8a' }
    ],
    priceTiers: {
      '1-12': 150.00,
      '13-50': 140.00,
      '51+': 132.00
    }
  },

  // 24. GORROS DE COCINA
  {
    id: 'gorros-de-cocina',
    code: 'GC001',
    name: 'Gorros de Cocina',
    price: 110.00,
    category: 'restaurante',
    image: '',
    rating: 4.8,
    description: 'Gorro higiénico de cocina tipo boina / champiñón. Fabricado en tejido ligero y fresco con elástico posterior autoajustable que garantiza contención capilar conforme a normas sanitarias.',
    composition: 'Poliéster / Algodón Transpirable',
    features: [
      'Elástico posterior para ajuste universal confortable',
      'Banda frontal antitranspirante interna',
      'Cumple con normativas de higiene alimentaria',
      'Lavado rápido y secado ágil'
    ],
    sizes: ['Unitalla Universal'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Blanco', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 110.00,
      '13-50': 103.00,
      '51+': 95.00
    }
  },

  // 25. ZAPATOS DE COCINA ALINA NEGRO
  {
    id: 'zapatos-alina',
    code: 'ALINA-N',
    name: 'Zapatos de Cocina Alina Negro',
    price: 840.00,
    category: 'restaurante',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426610/model_4.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426610/model_4.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426608/model_por.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426605/model_1.png'
    ],
    isBestSeller: true,
    rating: 4.9,
    description: 'Calzado ergonómico de trabajo Modelo Alina en color negro. Suela antideslizante con dibujo de alta fricción para suelos grasos o húmedos de cocina y plantilla con soporte de arco.',
    composition: 'Polímero EVA ultraligero y antibacteriano / Suela de caucho antiderrapante',
    features: [
      'Suela con certificación de tracción en piso húmedo y grasoso',
      'Diseño anatómico cerrado que previene ingreso de líquidos calientes',
      'Plantilla interna acolchada antifatiga removible',
      'Fácil de limpiar y desinfectar'
    ],
    sizes: ['22 MX', '23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX'],
    colors: [
      {
        name: 'Negro',
        hex: '#000000',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426610/model_4.png'
      }
    ],
    priceTiers: {
      '1-12': 840.00,
      '13-50': 756.00,
      '51+': 690.00
    }
  },

  // 26. ZAPATOS DE COCINA PEGASO NEGRO
  {
    id: 'zapatos-pegaso',
    code: 'PEGASO-N',
    name: 'Zapatos de Cocina Pegaso Negro',
    price: 940.00,
    category: 'restaurante',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426597/modelo_2.3.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426597/modelo_2.3.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426595/modelo_2.2.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426593/modelo_2.png'
    ],
    isBestSeller: true,
    rating: 4.9,
    description: 'Calzado profesional reforzado Modelo Pegaso en color negro para jornadas prolongadas de pie. Máxima amortiguación en talón, suela de adherencia superior en agua/aceite y tratamiento antibacterial.',
    composition: 'Material hidrófugo antideslizante de alta tecnología',
    features: [
      'Suela de goma de alta densidad contra resbalones en azulejo y epóxico',
      'Talón con cámara de absorción de impacto',
      'Material impermeable a grasas, agua y detergentes',
      'Diseño ergonómico que evita el cansancio de piernas y columna'
    ],
    sizes: ['23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX', '30 MX'],
    colors: [
      {
        name: 'Negro',
        hex: '#000000',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1787426597/modelo_2.3.png'
      }
    ],
    priceTiers: {
      '1-12': 940.00,
      '13-50': 846.00,
      '51+': 790.00
    }
  },

  // 27. ZAPATO DE COCINA BIGAPPLE NEGRO
  {
    id: 'zapato-cocina-bigapple-negro',
    code: 'BIGAPPLE-N',
    name: 'Zapato de Cocina Bigapple Negro',
    price: 1200.00,
    category: 'restaurante',
    image: '',
    rating: 5.0,
    description: 'Calzado de cocina de alta gama Modelo Bigapple en color negro. Diseñado para chefs ejecutivos y personal de alto rendimiento, con tecnología alemana de suela antideslizante y soporte postural avanzado.',
    composition: 'Compuesto Polimérico Premium / Suela con certificación antideslizante ISO',
    features: [
      'Suela de máxima tracción en superficies con grasa y agua jabonosa',
      'Puntera reforzada para protección contra caídas de utensilios',
      'Plantilla ortopédica intercambiable con memoria ergonómica',
      'Estructura ultraligera que reduce hasta un 40% la fatiga muscular'
    ],
    sizes: ['23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX', '30 MX'],
    colors: [
      { name: 'Negro', hex: '#000000' }
    ],
    priceTiers: {
      '1-12': 1200.00,
      '13-50': 1100.00,
      '51+': 1020.00
    }
  },

  // 28. ZAPATO DE COCINA BIGAPPLE BLANCA
  {
    id: 'zapato-cocina-bigapple-blanco',
    code: 'BIGAPPLE-B',
    name: 'Zapato de Cocina Bigapple Blanca',
    price: 1200.00,
    category: 'restaurante',
    image: '',
    rating: 5.0,
    description: 'Calzado de alta gama Modelo Bigapple en color blanco para cocina fría, repostería y comedores industriales de máxima pulcritud. Tratamiento antimicrobiano y fácil lavado.',
    composition: 'Polímero Sanitario Blanco / Suela Antideslizante',
    features: [
      'Color blanco sanitario de acabado impermeable liso',
      'Suela de tracción grado superior que no deja huellas',
      'Plantilla anatómica con absorción de sudor',
      'Aprobado para plantas de alimentos y laboratorios'
    ],
    sizes: ['22 MX', '23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX'],
    colors: [
      { name: 'Blanco Sanitario', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 1200.00,
      '13-50': 1100.00,
      '51+': 1020.00
    }
  },

  // 29. PIJAMA MEDICA CON STRECH
  {
    id: 'pijama-medica-con-strech',
    code: 'PM001-S',
    name: 'Pijama Médica con Strech',
    price: 820.00,
    category: 'medico',
    image: '',
    rating: 4.9,
    description: 'Conjunto quirúrgico de filipina y pantalón clínico con elasticidad 4-way stretch. Repele fluidos, no se arruga y otorga completa libertad de movimiento para médicos, enfermeros y odontólogos.',
    composition: '93% Poliéster / 7% Spandex (Tejido Antifluidos Stretch)',
    features: [
      'Elasticidad en 4 direcciones que acompaña cada movimiento',
      'Tecnología antifluidos y repelencia a microgotas',
      'Pantalón jogger o recto con cintura elástica y múltiples bolsas',
      'Filipina con cuello en V ergonómico y bolsa de pecho con portacredencial'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Azul Quirúrgico', hex: '#0284c7' },
      { name: 'Verde Médico', hex: '#059669' },
      { name: 'Gris Carbón', hex: '#374151' },
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Vino Clínico', hex: '#881337' }
    ],
    priceTiers: {
      '1-12': 820.00,
      '13-50': 790.00,
      '51+': 750.00
    }
  },

  // 30. BATAS MEDICAS M/L
  {
    id: 'batas-medicas-m-l',
    code: 'BM001-ML',
    name: 'Batas Médicas M/L',
    price: 390.00,
    category: 'medico',
    image: '',
    rating: 4.8,
    description: 'Bata clínica y de laboratorio manga larga para médicos, farmacéuticos y estudiantes. Corte profesional de longitud óptima, solapa clásica, botonadura frontal y tres bolsas de carga reforzadas.',
    composition: 'Gabardina Médica 65% Poliéster / 35% Algodón',
    features: [
      'Manga larga con dobladillo amplio',
      'Tres bolsillos exteriores (uno de pecho, dos laterales amplios)',
      'Aberturas laterales para acceso a bolsas del pantalón',
      'Tratamiento antimanchas y blanqueado durable'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco Médico', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 390.00,
      '13-50': 370.00,
      '51+': 350.00
    }
  },

  // 31. CALZADO CLINICO MOD. 363 BLANCO
  {
    id: 'calzado-clinico-mod-363-blanco',
    code: 'MOD-363',
    name: 'Calzado Clínico Mod. 363 Blanco',
    price: 882.00,
    category: 'medico',
    image: '',
    rating: 4.9,
    description: 'Calzado clínico profesional Modelo 363 en color blanco. Estructura ergonómica con soporte de arco plantar, horma ancha para evitar puntos de presión y suela antiderrapante en suelos de hospital.',
    composition: 'Piel genuina suave tratada / Suela de poliuretano inyectado',
    features: [
      'Piel genuina blanca fácil de limpiar y desinfectar',
      'Suela antiderrapante ligera que no genera ruido al caminar',
      'Forro interno transpirable que evita la humedad',
      'Plantilla acolchada con memory foam'
    ],
    sizes: ['22 MX', '23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX'],
    colors: [
      { name: 'Blanco Clínico', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 882.00,
      '13-50': 832.00,
      '51+': 790.00
    }
  },

  // 32. CALZADO CLINICO MOD. 920 BLANCO
  {
    id: 'calzado-clinico-mod-920-blanco',
    code: 'MOD-920-B',
    name: 'Calzado Clínico Mod. 920 Blanco',
    price: 1025.00,
    category: 'medico',
    image: '',
    rating: 4.9,
    description: 'Calzado médico de confort superior Modelo 920 en color blanco. Amortiguación de alto impacto en talón, piel suave flor entera y diseño sin cordones de ajuste elástico lateral.',
    composition: '100% Piel Flor Entera Blanca / Suela Antifatiga',
    features: [
      'Elásticos laterales para calce inmediato y sujeción segura',
      'Suela de alta flexibilidad que amortigua cada paso',
      'Plantilla ergonómica antibacterial extraíble',
      'Excelente soporte para turnos de guardia médica prolongados'
    ],
    sizes: ['23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX', '30 MX'],
    colors: [
      { name: 'Blanco Clínico', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 1025.00,
      '13-50': 975.00,
      '51+': 925.00
    }
  },

  // 33. CALZADO CLINICO MOD. 920 CAFÉ
  {
    id: 'calzado-clinico-mod-920-cafe',
    code: 'MOD-920-C',
    name: 'Calzado Clínico Mod. 920 Café',
    price: 1025.00,
    category: 'medico',
    image: '',
    rating: 4.9,
    description: 'Calzado médico de confort Modelo 920 en color café. Ideal para consultorios, directivos de salud y personal administrativo que busca confort ortopédico con elegancia formal.',
    composition: '100% Piel Genuina Vacuna Café / Suela Antifatiga',
    features: [
      'Acabado en piel café elegante y duradera',
      'Suela antideslizante con absorción de impacto en talón',
      'Ajuste con elásticos laterales',
      'Plantilla anatómica de máximo confort'
    ],
    sizes: ['24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX', '30 MX'],
    colors: [
      { name: 'Café Ejecutivo', hex: '#78350f' }
    ],
    priceTiers: {
      '1-12': 1025.00,
      '13-50': 975.00,
      '51+': 925.00
    }
  },

  // 34. CALZADO CLINICO MOD. 1042 BLANCO
  {
    id: 'calzado-clinico-mod-1042-blanco',
    code: 'MOD-1042-B',
    name: 'Calzado Clínico Mod. 1042 Blanco',
    price: 1025.00,
    category: 'medico',
    image: '',
    rating: 4.9,
    description: 'Calzado ortopédico clínico Modelo 1042 en color blanco. Máxima amortiguación, suela de doble densidad y diseño cerrado con perforaciones laterales respirables para control térmico.',
    composition: 'Piel Selecta Tratada / Suela Dieléctrica Antiderrapante',
    features: [
      'Suela ligera de doble densidad que previene calambres y fatiga',
      'Diseño con perforaciones laterales que disipan calor',
      'Piel suave repelente a líquidos',
      'Recomendado para enfermería, quirófano y laboratorio'
    ],
    sizes: ['22 MX', '23 MX', '24 MX', '25 MX', '26 MX', '27 MX', '28 MX', '29 MX'],
    colors: [
      { name: 'Blanco Hospitalario', hex: '#ffffff' }
    ],
    priceTiers: {
      '1-12': 1025.00,
      '13-50': 975.00,
      '51+': 925.00
    }
  },

  // 35. RASH MANGA LARGA EN LICRA
  {
    id: 'rash-guardavidas',
    code: 'RS001L',
    name: 'Rash Manga Larga en Licra',
    price: 490.00,
    category: 'hoteleria',
    image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788580772/Dise%C3%B1o_Sin_T%C3%ADtulo_-_3_2.png',
    gallery: [
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788580772/Dise%C3%B1o_Sin_T%C3%ADtulo_-_3_2.png',
      'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788580844/Dise%C3%B1o_Sin_T%C3%ADtulo_-_2_3.png'
    ],
    isBestSeller: true,
    rating: 4.9,
    description: 'Playera acuática de protección solar UPF 50+ manga larga en licra técnica de alta densidad. Diseñada para guardavidas, salvavidas e instructores náuticos en playas y albercas.',
    composition: '82% Poliéster / 18% Elastano (Licra Náutica con Filtro UV)',
    features: [
      'Protección solar certificada UPF 50+ contra radiación UVA y UVB',
      'Tejido con compresión ligera que no absorbe agua',
      'Costuras planas flatlock para cero rozaduras en la piel',
      'Colores de alta visibilidad para identificación inmediata en rescates'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Rojo Guardavidas',
        hex: '#dc2626',
        image: 'https://res.cloudinary.com/boofzznx/image/upload/f_auto,q_auto/v1788580772/Dise%C3%B1o_Sin_T%C3%ADtulo_-_3_2.png'
      },
      { name: 'Amarillo Rescate', hex: '#eab308' },
      { name: 'Azul Real', hex: '#2563eb' }
    ],
    priceTiers: {
      '1-12': 490.00,
      '13-50': 470.00,
      '51+': 460.00
    }
  },

  // 36. RASH MANGA LARGA EN LICRA CON SUB.
  {
    id: 'rash-manga-larga-licra-sublimado',
    code: 'RS002L-SUB',
    name: 'Rash Manga Larga en Licra con Sublimado',
    price: 510.00,
    category: 'hoteleria',
    image: '',
    rating: 4.9,
    description: 'Playera acuática UPF 50+ manga larga en licra con sublimado integral personalizado a todo color. Logotipos del hotel, leyendas de GUARDAVIDAS / LIFEGUARD resistentes al cloro y salitre.',
    composition: '82% Poliéster / 18% Elastano Sublimado HD',
    features: [
      'Sublimación térmica directa que no se cuartea ni despinta con el sol',
      'Protección solar UPF 50+ permanente',
      'Costuras reforzadas flatlock',
      'Diseño personalizado con logotipos corporativos y rotulación oficial'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Rojo Sublimado Oficial',
        hex: '#dc2626'
      },
      { name: 'Amarillo / Negro Rescate', hex: '#eab308' }
    ],
    priceTiers: {
      '1-12': 510.00,
      '13-50': 490.00,
      '51+': 470.00
    }
  },

  // 37. BERMUDA GUARDAVIDAS
  {
    id: 'bermuda-guardavidas',
    code: 'BG001',
    name: 'Bermuda Guardavidas',
    price: 390.00,
    category: 'hoteleria',
    image: '',
    rating: 4.8,
    description: 'Bermuda técnica de rescate acuático y guardavidas en tela repelente de secado veloz. Cintura con jareta y elástico, bolsas laterales con drenaje de agua y rotulación de alta visibilidad.',
    composition: '100% Microfibra Náutica Repelente al Agua',
    features: [
      'Secado ultra rápido con drenaje en bolsas',
      'Cintura con cordón ajustable reforzado',
      'Bolsillo cargo lateral con cierre o velcro de seguridad',
      'Resistente a la fricción de la tabla de rescate y la arena'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Rojo Guardavidas', hex: '#dc2626' },
      { name: 'Amarillo Seguridad', hex: '#eab308' },
      { name: 'Azul Marino', hex: '#1e3a8a' }
    ],
    priceTiers: {
      '1-12': 390.00,
      '13-50': 370.00,
      '51+': 350.00
    }
  },

  // 38. SHORT GUARDAVIDAS
  {
    id: 'short-guardavidas',
    code: 'SG001',
    name: 'Short Guardavidas',
    price: 370.00,
    category: 'hoteleria',
    image: '',
    rating: 4.8,
    description: 'Short deportivo para salvavidas y monitores de alberca. Corte por encima de la rodilla para agilidad en nado y rescate inmediato con suspensorio interno de malla suave.',
    composition: '100% Poliéster Hidrófugo',
    features: [
      'Suspensorio interior higiénico transpirable',
      'Cintura elastizada con jareta de amarre rápido',
      'Bolsa trasera con ojillo para escape de agua',
      'Tejido ligero que no retiene peso en el agua'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Rojo Guardavidas', hex: '#dc2626' },
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Negro', hex: '#000000' }
    ],
    priceTiers: {
      '1-12': 370.00,
      '13-50': 355.00,
      '51+': 340.00
    }
  },

  // 39. GORRA DE GABARDINA
  {
    id: 'gorra-gabardina',
    code: 'GG001',
    name: 'Gorra de Gabardina',
    price: 130.00,
    category: 'industrial',
    image: '',
    rating: 4.8,
    description: 'Gorra clásica de 6 gajos confeccionada en gabardina de alta calidad. Visera precurvada, ojales bordados de ventilación y ajuste posterior metálico o de velcro, óptima para bordado frontal.',
    composition: 'Gabardina 100% Algodón Peinado',
    features: [
      'Estructura de 6 gajos con refuerzo frontal para bordado nítido',
      'Visera precurvada con memoria de forma',
      'Hebilla metálica corrediza de ajuste trasero',
      'Banda interior absorbente de sudor'
    ],
    sizes: ['Unitalla Ajustable'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Azul Marino', hex: '#1e3a8a' },
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Kaki', hex: '#d4b996' },
      { name: 'Rojo', hex: '#b91c1c' }
    ],
    priceTiers: {
      '1-12': 130.00,
      '13-50': 120.00,
      '51+': 110.00
    }
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Chef Roberto Aguilar',
    role: 'Chef Ejecutivo',
    company: 'Restaurante & Beach Club Tulum',
    text: 'Las filipinas y mandiles de PRE tienen una resistencia asombrosa al calor y a las jornadas intensas en cocina. Los bordados se mantienen impecables tras meses de lavadas industriales continuas.',
    rating: 5
  },
  {
    id: '2',
    name: 'Lic. Mariana Villarreal',
    role: 'Gerente de Operaciones',
    company: 'Hotel Riviera Maya Resort',
    text: 'Vestir a más de 120 colaboradores de recepción y concierge fue una experiencia sin contratiempos. Las camisas y blusas Oxford tienen un entalle perfecto y proyectan exactamente la elegancia que nuestro hotel 5 estrellas requiere.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ing. Carlos Méndez',
    role: 'Director de Mantenimiento',
    company: 'Logística Portuaria Cancún',
    text: 'El pantalón cargo en gabardina y las camisolas cumplen con todas las exigencias de durabilidad para nuestro personal operativo. La entrega por volumen fue puntual y con precios de mayoreo inmejorables.',
    rating: 5
  }
];
