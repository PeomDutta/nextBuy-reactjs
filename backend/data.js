
import bcrypt from 'bcryptjs';
const data = {

  users: [
    {
      name: 'Peom',
      email: 'peom@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Mahdii',
      email: 'mahdi@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

    products: [
      {
       
        name: 'Asus Vivobook 15',
        category: 'Laptop',
        image: '/images/acer.jpg',
        price: 74300,
        countInStock: 10,
        brand: 'Asus',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: ' Dell Inspiron 15',
        category: 'Laptop',
        image: '/images/acer.jpg',
        price: 43940,
        countInStock: 20,
        brand: 'Dell',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Acer Aspire',
        category: 'Laptop',
        image: '/images/acer.jpg',
        price: 41230,
        countInStock: 0,
        brand: 'Acer',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Asus Full HD Monitor',
        category: 'Monitor',
        image: '/images/acer.jpg',
        price: 21700,
        countInStock: 15,
        brand: 'Asus',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'HP Pavilion',
        category: 'Monitor',
        image: '/images/acer.jpg',
        price: 97000,
        countInStock: 5,
        brand: 'HP',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Acer Nitro',
        category: 'Laptop',
        image: '/images/acer.jpg',
        price: 110300,
        countInStock: 12,
        brand: 'Acer',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Apple Nitro',
        category: 'Laptop',
        image: '/images/acer.jpg',
        price: 110300,
        countInStock: 12,
        brand: 'Acer',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;