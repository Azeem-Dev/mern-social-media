import User from "../models/User.js";

export const getUser = async (req, res) => {
    const { id: userId } = req.params;
    try {
        let user = await User.findById(userId);
        res.status(200).json(user);
    } catch (err) {
        return res.status(404).json({msg:`User with Id: ${userId} Not Found`})
    }
};
export const getUserFriends = (req, res) => {};
export const addRemoveFriend = (req, res) => {};
