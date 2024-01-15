/* export default (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transaction: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
}; */

const appReducer = (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default appReducer;
