import { useState } from 'react';
import { authService } from '../services/auth.service';
import { AdminSession } from '../types/auth.types';

export const useAuth = () => {
  const [session, setSession] = useState<AdminSession | null>(() => {
    const saved = localStorage.getItem('admin_session');
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(false);

  const login = async (username: string, password: string): Promise<boolean> => {
    setLoading(true);
    const res = await authService.login(username, password);
    setLoading(false);

    if (res.success && res.token && res.username) {
      const activeSession: AdminSession = {
        token: res.token,
        username: res.username
      };
      setSession(activeSession);
      localStorage.setItem('admin_session', JSON.stringify(activeSession));
      return true;
    }
    return false;
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem('admin_session');
  };

  return {
    session,
    isAuthenticated: !!session,
    login,
    logout,
    loading
  };
};
