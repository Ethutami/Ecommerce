const initialState = {
    categoryItem: [
      {
        id : 1,
        categoryName : 'woman',
        icon : 'y'
      },
      {
        id : 2,
        categoryName : 'woman',
        icon : 'y'
      },
      {
        id : 3,
        categoryName : 'woman',
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
  