const doctorsListReducer = (state = { doctorsList: [] }, action) => {
  switch (action.type) {
    case "ADD":
      const newItem = {
        name: action.item.name,
        store: action.item.store,
        price: action.item.price,
        date: action.item.date,
        received: false,
      };
      return {
        ...state,
        items: state.items.concat(newItem),
      };
    case "RECEIVED":
      const newItems = [...state.items];
      const itemIndex = state.items.findIndex((item) => item.id === action.id);

      newItems[itemIndex] = {
        ...newItems[itemIndex],
        received: !newItems[itemIndex].received,
      };

      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};

export default doctorsListReducer;
