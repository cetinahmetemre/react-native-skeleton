export const MainReducer = (state, action) => {
    switch (action.type) {
        case "SET_MAP":
            return {
                ...state,
                map: action.map,
            };
        case "SET_SELECTED_OBJECT":
            return {
                ...state,
                selectedObject: action.selectedObject,
            };
        case "SET_ALL_OF_THEM":
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};
  