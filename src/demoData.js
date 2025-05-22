export const demoProfileData = {
    profileImage: {
      url: "https://i.pinimg.com/736x/fe/38/a9/fe38a90127def08c876ccdd77956e7ff.jpg"
    },
    averageRating: 4.8,
    ratingCount: 24,
    ratingStatus: "Надійний",
    createdAt: "2023-05-15T10:00:00Z",
    latitude: 49.9935,
    longitude: 36.2304,
    bio: "Привіт! Я дизайнерка з Харкова. Люблю створювати красиві речі та знаходити унікальні рішення.",
    balance: 876.50
};
  
export const demoUserData = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  username: 'sxirens',
  email: 'kira.sxirens.2006@gmail.com',
  role: 'User'
};

// // Базові категорії (Parent categories)
// export const parentCategories = [
//   { id: 'parent1', name: "Одяг", type: "radio" },
//   { id: 'parent2', name: "Взуття", type: "radio" },
//   { id: 'parent3', name: "Аксесуари", type: "radio" },
//   { id: 'parent4', name: "Колір", type: "checkbox" },
//   { id: 'parent5', name: "Розмір", type: "size" },
//   { id: 'parent6', name: "Матеріал", type: "checkbox" },
//   { id: 'parent7', name: "Бренд", type: "checkbox" }
// ];

// // Підкатегорії для жінок
// export const demoCategoriesFemale = [
//   { id: 'f1', name: "Весільні сукні", parentId: "parent1" },
//   { id: 'f2', name: "Вечірні сукні", parentId: "parent1" },
//   { id: 'f3', name: "Джинси", parentId: "parent1" },
//   { id: 'f4', name: "Кросівки", parentId: "parent2" },
//   { id: 'f5', name: "Сумки", parentId: "parent3" }
// ];

// // Підкатегорії для чоловіків
// export const demoCategoriesMale = [
//   { id: 'm1', name: "Костюми", parentId: "parent1" },
//   { id: 'm2', name: "Джинси", parentId: "parent1" },
//   { id: 'm3', name: "Кеди", parentId: "parent2" },
//   { id: 'm4', name: "Гаманці", parentId: "parent3" }
// ];

// // Підкатегорії для дітей
// export const demoCategoriesKids = [
//   { id: 'k1', name: "Дитячі сукні", parentId: "parent1" },
//   { id: 'k2', name: "Дитяче взуття", parentId: "parent2" },
//   { id: 'k3', name: "Рюкзаки", parentId: "parent3" }
// ];

export const demoParentCategories = [
  {
    id: '1',
    name: "Одяг",
    type: "radio",
    defaultOption: "Увесь одяг"
  },
  {
    id: '2',
    name: "Взуття",
    type: "radio",
    defaultOption: "Усе взуття"
  },
  {
    id: '3',
    name: "Аксесуари",
    type: "radio",
    defaultOption: "Усі аксесуари"
  },
  {
    id: '4',
    name: "Колір",
    type: "checkbox",
    defaultOption: "Всі оголошення"
  },
  {
    id: '5',
    name: "Розмір",
    type: "size",
    sizeType: "clothing",
    options: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "One size", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"]
  },
  {
    id: '6',
    name: "Матеріал",
    type: "checkbox",
    defaultOption: "Всі оголошення"
  },
  {
    id: '7',
    name: "Бренд",
    type: "checkbox",
    defaultOption: "Всі оголошення"
  }
];

export const demoSubcategories = {
  female: [
    { id: 'f1', name: "Весільні сукні", parentId: "1" },
    { id: 'f2', name: "Джинси", parentId: "1" },
    { id: 'f3', name: "Кросівки", parentId: "2" },
    { id: 'f4', name: "Сумки", parentId: "3" },
    { id: 'f5', name: "Червоний", parentId: "4" },
    { id: 'f6', name: "Бавовна", parentId: "6" }
  ],
  male: [
    { id: 'm1', name: "Костюми", parentId: "1" },
    { id: 'm2', name: "Футболки", parentId: "1" },
    { id: 'm3', name: "Кеди", parentId: "2" },
    { id: 'm4', name: "Синій", parentId: "4" },
    { id: 'm5', name: "Поліестер", parentId: "6" }
  ],
  kids: [
    { id: 'k1', name: "Дитячі сукні", parentId: "1" },
    { id: 'k2', name: "Кросівки", parentId: "2" },
    { id: 'k3', name: "Рюкзаки", parentId: "3" },
    { id: 'k4', name: "Зелений", parentId: "4" }
  ]
};

export const demoListings = {
  items: [
    {
      id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      title: 'Весільна сукня',
      price: 12500,
      isAuction: true
    },
    {
      id: '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e',
      title: 'Чоловічий костюм',
      price: 8500,
      isAuction: false
    },
    // Додаткові демо-оголошення...
  ],
  totalPages: 3,
  totalCount: 12
};

export const demoImages = {
  '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': [
    { id: 'img1', url: 'https://example.com/dress1.jpg' }
  ],
  '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e': [
    { id: 'img2', url: 'https://example.com/suit1.jpg' }
  ]
};

export const demoListingDetails = {
  '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': {
    createdAt: '2023-05-15T10:00:00Z'
  },
  '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e': {
    createdAt: '2023-06-20T14:30:00Z'
  }
};