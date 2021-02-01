export interface ICities {
  value: string;
  viewValue: string;
}

export interface ICollectionsGeoJSON {
  type: string;
  features: IGeoJson[];
}

export interface IGeoJson {
  type: string;
  geometry: IGeometry;
  properties: IPropertiesGeoJSON;
}

export interface IGeoJsonForCity {
  type: string;
  geometry: IGeometry;
  properties: IPropForCity;
}

interface IPropForCity {
  city: string;
}

interface IGeometry {
  type: string;
  coordinates: number[];
}

interface IPropertiesGeoJSON {
  city: string;
  address: string;
  title: string;
  workingHours: string;
  phone: string;
  iconType: string;
  type: ITypeGeoJson;
}

interface ITypeGeoJson {
  batteries: boolean;
  books: boolean;
  cloth: boolean;
  electronicWaste: boolean;
  glass: boolean;
  householdItems: boolean;
  lamps: boolean;
  metal: boolean;
  oils: boolean;
  paper: boolean;
  plastic: boolean;
  tires: boolean;
  wholeClothes: boolean;
}

export interface IWasteTypes {
  id: number;
  type: string;
  title_eng: string;
  title_ru: string;
  icon: string;
  isActive: boolean;
}

export const CitiesGeoJson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'city': 'Minsk',
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          27.555332,
          53.903621
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'city': 'Vitebsk',
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          30.205186,
          55.187459
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'city': 'Grodno',
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          23.822140,
          53.668452
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'city': 'Mogilev',
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          30.332594,
          53.897693
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'city': 'Brest',
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          23.686458,
          52.086182
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'city': 'Gomel',
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          30.994284,
          52.430636
        ]
      }
    }
  ]
};

export const wasteTypes = [
  {
    id: 1,
    type: 'batteries',
    title_eng: 'Batteries',
    title_ru: 'Батарейки',
    icon: '../../assets/icons/batteries_svg.svg',
    isActive: true,
  },
  {
    id: 2,
    type: 'books',
    title_eng: 'Books',
    title_ru: 'Книги',
    icon: '../../assets/icons/books_svg.svg',
    isActive: true,
  },
  {
    id: 3,
    type: 'cloth',
    title_eng: 'Сloth',
    title_ru: 'Ткань',
    icon: '../../assets/icons/cloth_svg.svg',
    isActive: true,
  },
  {
    id: 4,
    type: 'electronicWaste',
    title_eng: 'Electronic Waste',
    title_ru: 'Электронные отходы',
    icon: '../../assets/icons/electronicWaste_svg.svg',
    isActive: true,
  },
  {
    id: 5,
    type: 'glass',
    title_eng: 'Glass',
    title_ru: 'Стекло',
    icon: '../../assets/icons/glass_svg.svg',
    isActive: true,
  },
  {
    id: 6,
    type: 'householdItems',
    title_eng: 'Household Items',
    title_ru: 'Домашняя утварь',
    icon: '../../assets/icons/householdItems_svg.svg',
    isActive: true,
  },
  {
    id: 7,
    type: 'lamps',
    title_eng: 'Lamps',
    title_ru: 'Лампы',
    icon: '../../assets/icons/lamps_svg.svg',
    isActive: true,
  },
  {
    id: 8,
    type: 'metal',
    title_eng: 'Metal',
    title_ru: 'Метал',
    icon: '../../assets/icons/metal_svg.svg',
    isActive: true,
  },
  {
    id: 9,
    type: 'oils',
    title_eng: 'Oils',
    title_ru: 'Масла',
    icon: '../../assets/icons/oils_svg.svg',
    isActive: true,
  },
  {
    id: 10,
    type: 'paper',
    title_eng: 'Paper',
    title_ru: 'Макулатура',
    icon: '../../assets/icons/paper_svg.svg',
    isActive: true,
  },
  {
    id: 11,
    type: 'plastic',
    title_eng: 'Plastic',
    title_ru: 'Пластик',
    icon: '../../assets/icons/plastic_svg.svg',
    isActive: true,
  },
  {
    id: 12,
    type: 'tires',
    title_eng: 'Tires',
    title_ru: 'Шины',
    icon: '../../assets/icons/tires_svg.svg',
    isActive: true,
  },
  {
    id: 13,
    type: 'wholeClothes',
    title_eng: 'Whole Clothes',
    title_ru: 'Одежда',
    icon: '../../assets/icons/wholeClothes_svg.svg',
    isActive: true,
  },
]


