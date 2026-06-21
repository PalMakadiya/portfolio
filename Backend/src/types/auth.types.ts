export interface JWTPayload {
  id: number;
  username: string;
}
export interface UserSession {
  token: string;
  username: string;
}
