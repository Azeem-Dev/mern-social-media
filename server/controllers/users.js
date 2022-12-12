import User from "../models/User.js";

export const getUser = async (req, res) => {
  const { id: userId } = req.params;
  try {
    let user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ msg: `User with Id: ${userId} Not Found` });
  }
};
export const getUserFriends = async (req, res) => {
  const { id: userId } = req.params;
  try {
    let user = await User.findById(userId);
    let friends = [];
    let formattedFriends = [];
    if (user?.friends && user?.friends.length > 0) {
      friends = await Promise.all(
        user?.friends?.map((id) => User.findById(id))
      );
      formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return {
            _id,
            firstName,
            lastName,
            occupation,
            location,
            picturePath,
          };
        }
      );
    }
    res.status(200).json(formattedFriends);
  } catch (err) {
    return res.status(404).json({ msg: `User with Id: ${userId} Not Found` });
  }
};
export const addRemoveFriend = async (req, res) => {
  const { id: userId, friendId } = req.params;
  try {
    let user = await User.findById(userId);
    let friend = await User.findById(friendId);

    if (user?.friends?.includes(friendId)) {
      user.friends = user.friends.filter((id) => id != friendId);
      friend.friends = friend.friends.filter((id) => id != userId);
    } else {
      user.friends.push(friendId);
      friend.friends.push(userId);
    }

    await user.save();
    await friend.save();

    let friends = [];
    let formattedFriends = [];
    if (user?.friends && user?.friends.length > 0) {
      friends = await Promise.all(
        user?.friends?.map((id) => User.findById(id))
      );
      formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return {
            _id,
            firstName,
            lastName,
            occupation,
            location,
            picturePath,
          };
        }
      );
    }

    res.status(200).json(formattedFriends);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
