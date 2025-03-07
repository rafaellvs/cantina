export const usersOnline: any = [];

export const addToUsersOnline = (user: any) => usersOnline.push(user);

export const removeFromUsersOnline = (user: any) => {
  const idxToRemove = usersOnline.findIndex(
    (u: any) => user.nickname === u.nickname
  );
  usersOnline.splice(idxToRemove, 1);
};
