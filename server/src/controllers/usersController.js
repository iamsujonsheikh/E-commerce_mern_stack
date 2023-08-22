const getUsers = (req, res, next) => {
    try {
        res.status(200).json({
            message: "Yes here is all users."
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