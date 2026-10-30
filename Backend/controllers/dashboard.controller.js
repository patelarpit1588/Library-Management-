const books = require("../models/books.model")
const users = require("../models/users.model")
const issuedBooks = require("../models/issueBook.model")

exports.getDashboardData = async (req, res) => {
try{
    const borrowedBooks = await issuedBooks.countDocuments({ status: "issued" });
    const categories = await books.distinct("category", {
      category: { $nin: ["", null] }
    });
    const totalUsers = await users.countDocuments();
    const pendingRequests = await issuedBooks.countDocuments({ status: "pending" });
    const totalBooks = await books.countDocuments();
    const totalQantity = await books.aggregate([
        {
            $group: {
                _id: null,
                totalQuantity: { $sum: "$quantity" }
            }
        }
    ]);
    const totalCopies = totalQantity.length > 0 ? totalQantity[0].totalQuantity : 0;

    const availableBooks = totalCopies - borrowedBooks;

    res.status(200).json({
        borrowedBooks,
        totalCategories: categories.length,
        totalUsers,
        pendingRequests,
        totalBooks,
        availableBooks,
       
    });
    
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
}
}