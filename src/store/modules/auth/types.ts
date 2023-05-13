export interface Auth {
  name: string;
  image: string;
  token: string;
}

export interface AuthStore {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
  isAuth: boolean;
}
