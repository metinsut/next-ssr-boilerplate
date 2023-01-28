export type UserSession = {
  id?: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  token?: string;
  role?: "admin" | "user";
};

export type AuthRequest = {
  email: string;
  password: string;
};
