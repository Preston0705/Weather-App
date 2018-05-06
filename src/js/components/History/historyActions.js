export const types = {
    ADD_NEW_HISTORY_ITEM: 'ADD_NEW_HISTORY_ITEM'
};

export function addNewHistoryItem(city) {
    return {
        type: types.ADD_NEW_HISTORY_ITEM,
        payload: {city}
    };
}