export default (state = [], action) => {
    switch (action.type) {
    case "": {
        return action.payload;
    }
    default:
        return state;
    }
};