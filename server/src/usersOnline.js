export const usersOnline = [];

export const addToUsersOnline = (user) => usersOnline.push(user);

export const removeFromUsersOnline = (user) => {
  const idxToRemove = usersOnline.findIndex(
    (u) => user.nickname === u.nickname
  );
  usersOnline.splice(idxToRemove, 1);
};
