const initialState = {
  data: [],
  requests: {},
  categories: [
    {
      name: 'mugs',
      text: 'kubki',
      img: 'mugs.jpg',
    },
    {
      name: 'bowls',
      text: 'miski',
      img: 'bowls.jpg',
    },
    {
      name: 'vases',
      text: 'wazony',
      img: 'vases.jpg',
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
