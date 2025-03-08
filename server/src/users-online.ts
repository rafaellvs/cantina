import { User } from "@/types/User.type";

export const usersOnline: User[] = [];

export const addToUsersOnline = (user: User) => usersOnline.push(user);

export const removeFromUsersOnline = (user: User) => {
  const idxToRemove = usersOnline.findIndex(
    (u) => user.nickname === u.nickname
  );
  usersOnline.splice(idxToRemove, 1);
};
