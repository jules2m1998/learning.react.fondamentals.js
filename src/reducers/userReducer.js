export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];
    case "TOGGLE_ONE":
      return state.map((x) => {
        if (x.id !== action.id) return x;
        return { ...x, isActive: !x.isActive };
      });
    case "TOGGLE_ALL":
      return state.map((x) => {
        return { ...x, isActive: !x.isActive };
      });
    default:
      throw Error(`Unknown action: + ${action.type}`);
  }
};
