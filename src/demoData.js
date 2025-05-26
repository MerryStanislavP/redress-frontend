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
  role: 'User',
  phoneNumber: '+380987654321'
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

// Демо-дані для списку товарів
export const demoListings = Array.from({ length: 60 }, (_, i) => ({
  id: `${i+1}a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d`,
  title: `Товар ${i+1}`,
  price: Math.floor(Math.random() * 10000) + 2000,
  isAuction: Math.random() > 0.7,
  // Додайте інші поля, які використовуються у вашому додатку
}));

export const demoImages = {
  '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': [
    { id: 'img1', url: 'https://example.com/dress1.jpg' }
  ],
  '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e': [
    { id: 'img2', url: 'https://example.com/suit1.jpg' }
  ]
};

// export const demoListingDetails = {
//   '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': {
//     createdAt: '2023-05-15T10:00:00Z'
//   },
//   '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e': {
//     createdAt: '2023-06-20T14:30:00Z'
//   }
// };

export const demoListingDetails = [{
  id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
  title: 'Жакет на гудзиках Mango',
  latitude: 49.9935,
  longitude: 36.2304,
  price: 2500,
  createdAt: '2024-03-25T21:01:00Z',
  status: 'Active',
  isAuction: false,
  description: `Mango
Made in Morocco
Красиве й дуже якісне, тканина відмінно тримає форму
80% вовна
Розмір: XL
Плечі 46,
Груди 57,
Талія 54,
Низ 57,
Рукав 62,
Довжина 80.
Стан ідеальний, як нове, без дефектів.`,
  profileId: '5fa85f64-5717-4562-b3fc-2c963f66afa7',
  categoryId: '8d7e6f5a-4b3c-2d1e-0f9a-8b7c6d5e4f3a',
  images: [
    {
      id: '1fa85f64-5717-4562-b3fc-2c963f66afa9',
      url: 'https://i.pinimg.com/736x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg',
      createdAt: '2024-03-25T21:01:00Z'
    },
    {
      id: '2fa85f64-5717-4562-b3fc-2c963f66afa0',
      url: 'https://i.pinimg.com/736x/c7/01/d1/c701d15fff6dd7fa23f2c2d284d099bd.jpg',
      createdAt: '2024-03-25T21:01:00Z'
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
      url: 'https://i.pinimg.com/736x/d4/f1/60/d4f1609b4e573fd6d40873ff7fcc6a61.jpg',
      createdAt: '2024-03-25T21:01:00Z'
    }
  ]
},
{
  id: '2a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
  title: 'Жакет на гудзиках Mango',
  latitude: 49.9935,
  longitude: 36.2304,
  price: 2500,
  createdAt: '2025-03-25T21:01:00Z',
  status: 'Active',
  isAuction: false,
  description: `Mango Made in Morocco
Красиве й дуже якісне, тканина відмінно тримає форму
80% вовна
Розмір: XL
Плечі 46,
Груди 57,
Талія 54,
Низ 57,
Рукав 62,
Довжина 80.
Стан ідеальний, як нове, без дефектів.`,
  profileId: '5fa85f64-5717-4562-b3fc-2c963f66afa7',
  categoryId: '6fa85f64-5717-4562-b3fc-2c963f66afa8',
  images: [
    {
      id: '1fa85f64-5717-4562-b3fc-2c963f66afa9',
      url: 'https://i.pinimg.com/736x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg',
      createdAt: '2024-03-25T21:01:00Z'
    },
    {
      id: '2fa85f64-5717-4562-b3fc-2c963f66afa0',
      url: 'https://i.pinimg.com/736x/c7/01/d1/c701d15fff6dd7fa23f2c2d284d099bd.jpg',
      createdAt: '2024-03-25T21:01:00Z'
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
      url: 'https://i.pinimg.com/736x/d4/f1/60/d4f1609b4e573fd6d40873ff7fcc6a61.jpg',
      createdAt: '2024-03-25T21:01:00Z'
    }
  ]
},
];

export const demoCategories = {
  '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': {
    id: '8d7e6f5a-4b3c-2d1e-0f9a-8b7c6d5e4f3a',
    name: 'Жіночий одяг',
    sex: 'Female',
    parentId: null,
    children: [
      {
        id: '9e8f7a6b-5c4d-3e2f-1a0b-9c8d7e6f5a4b',
        name: 'Верхній одяг',
        sex: 'Female',
        parentId: '8d7e6f5a-4b3c-2d1e-0f9a-8b7c6d5e4f3a',
        children: [
          {
            id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Жакети',
            sex: 'Female',
            parentId: '9e8f7a6b-5c4d-3e2f-1a0b-9c8d7e6f5a4b',
            children: []
          }
        ]
      }
    ]
  },
  '2a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': {
    id: '7d6e5f4a-3b2c-1d0e-9f8a-7b6c5d4e3f2a',
    name: 'Чоловічий одяг',
    sex: 'Male',
    parentId: null,
    children: [
      {
        id: '8e7f6a5b-4c3d-2e1f-0a9b-8d7e6f5a4b3c',
        name: 'Верхній одяг',
        sex: 'Male',
        parentId: '7d6e5f4a-3b2c-1d0e-9f8a-7b6c5d4e3f2a',
        children: []
      }
    ]
  }
};

export const demoProfiles = {
  '5fa85f64-5717-4562-b3fc-2c963f66afa7': {
    id: '5fa85f64-5717-4562-b3fc-2c963f66afa7',
    userId: '6fa85f64-5717-4562-b3fc-2c963f66afa8',
    ratingCount: 67,
    averageRating: 4.4,
    ratingStatus: 'Reliable',
    profileImage: {
      url: 'https://i.pinimg.com/736x/35/63/c6/3563c636ff52eb8013376264c6114d8d.jpg'
    }
  }
};

export const demoUsers = {
  '6fa85f64-5717-4562-b3fc-2c963f66afa8': {
    username: 'ketrin38',
    email: 'ketrin28@example.com',
    phoneNumber: '+380991234567'
  }
};