import api from './api';
import { LoginResponse } from '../types/auth.types';

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await api.post<LoginResponse>('/auth/login', { username, password });
      return response;
    } catch (error: any) {
      return {
        success: false,
        message: error.message || 'Login failed.'
      };
    }
  }
};
