 import image1 from '../../assets/image/1.jpg'
 import image2 from '../../assets/image/2.jpg'
 import image3 from '../../assets/image/3.jpg'
 import image4 from '../../assets/image/4.png'
 import image5 from '../../assets/image/5.png'

const initialState = {
    categoryItem: [
      {
        id : 1,
        categoryName : `Woman's Top`,
        icon : 'y'
      },
      {
        id : 2,
        categoryName : 'Bottom',
        icon : 'y'
      },
      {
        id : 3,
        categoryName : 'Kids',
        icon : 'y'
      },
      {
        id : 4,
        categoryName : 'woman',
        icon : 'y'
      },
      {
        id : 5,
        categoryName : 'woman',
        icon : 'y'
      },
      {
        id : 6,
        categoryName : 'woman',
        icon : 'y'
      },
      {
        id : 7,
        categoryName : 'woman',
        icon : 'y'
      },
      {
        id : 8,
        categoryName : 'woman',
        icon : 'y'
      },
    ],
    entries:[
      {
        id : 1,
        title : 'afffk',
        photo : image1,
        price : '$16',
        name : 'cale',
      },
      {
        id : 2,
        title : 'dhhf',
        photo : image2,
        price : '$10000',
        name : 'tami',
      },
      {
        id : 3,
        title : 'thd',
        photo : image3,
        price : '$1',
        name : 'other',
      },
      {
        id : 4,
        title : 'thd',
        photo : image4,
        price : '$1',
        name : 'baby'
      },
      {
        id : 5,
        title : 'yaalajd',
        photo : image5,
        price : '$1',
        name : 'baby'
      },
    ],
    productSelected:[
      {
        id : 1,
        categoryName : `T-shirt`,
        selected : false
      },
      {
        id : 2,
        categoryName : 'Crop tops',
        selected : false
      },
      {
        id : 3,
        categoryName : 'Kardigan',
        selected : false
      },
      {
        id : 4,
        categoryName : 'Outer',
        selected : false
      },
    ]
  };
  
  const Product = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DATA_NEW_TASK':
        return {
            ...state, 
            data: action.value};
  
      default:
        return state;
    }
  };
  
  export default Product;
  