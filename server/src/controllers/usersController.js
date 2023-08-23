const User = require("../models/userModel");
const createError = require('http-errors');


const getUsers = async (req, res, next) => {
    try {
        const search = req.query.search || "";
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 1;

        const searchRegExp = new RegExp(".*" + search + ".*", "i");

        const filter = {
            isAdmin: { $ne: true },
            $or: [
                { name: { $regex: searchRegExp } },
                { email: { $regex: searchRegExp } },
                { phone: { $regex: searchRegExp } },
            ]
        };

        const notPassword = { password: 0 };

        const users = await User.find(filter, notPassword).limit(limit).skip((page - 1) * limit);

        const count = await User.find(filter).countDocuments();

        if (!users) throw createError(404, "no user found");

        res.status(200).json({
            message: "all users.",
            users,
            pagination: {
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                previousPage: page - 1 > 0 ? page - 1 : null,
                nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null
            }
        })
    } catch (error) {
        next(error);
    }
};

const getProfile = (req, res) => {
    res.status(200).json({
        message: "Wellcome to sujon sheikh.",
    })
}
module.exports = { getUsers, getProfile };