export interface AdminSession {
  token: string;
  username: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  username?: string;
}
