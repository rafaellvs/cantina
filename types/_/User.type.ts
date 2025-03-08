export type User = {
  nickname: string;
};

export type UsersOnline = User[];

export type UserSettings = User & {
  bgColor: string;
};

export type UserSettingsRepository = {
  getUserSettings: () => UserSettings;
  setUserSettings: (userSettings: UserSettings) => void;
  logout: () => void;
};
