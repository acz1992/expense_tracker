// Description: Get all Transactions
// Route: GET /api/v1/transactions
// Access: Public

exports.getTransactions = (req, res, next) => {
	res.send("GET transactions");
};

// Description: Add a Transaction
// Route: POST /api/v1/transactions
// Access: Public

exports.addTransaction = (req, res, next) => {
	res.send("POST transaction");
};

// Description: Delete all Transactions
// Route: DELETE /api/v1/transactions/:id
// Access: Public

exports.deleteTransaction = (req, res, next) => {
	res.send("DELETE transaction");
};
