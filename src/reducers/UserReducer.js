import { START_GAME } from "../Screens/Home/HomeConstants";
import { UPDATE_BALANCE, RESET_BALANCE, DECREMENT_BALANCE } from "../Screens/BlackJack/BlackJackConstants";

const initialState = {
  currentUser: null,
  balance: 500
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
        return {
            ...state,
            currentUser: action.payload 
          };
    }

    case UPDATE_BALANCE: {
      return {
          ...state,
          balance: state.balance + action.payload 
        };
  }
  case DECREMENT_BALANCE: {
    return {
        ...state,
        balance: state.balance - action.payload 
      };
}
  case RESET_BALANCE: {
    return {
      ...state,
      balance: 0
    };

  }

    default: {
      return state;
    }
  }
};

export default userReducer;
