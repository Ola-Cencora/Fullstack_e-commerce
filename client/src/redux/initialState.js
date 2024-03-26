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
  deliveryForms: [
    {
      id: 1,
      name: 'Paczkomat',
      price: 15,
      checked: true,
    },
    {
      id: 2,
      name: 'Kurier',
      price: 20,
    },
  ],
};

export default initialState;
