// Lightweight custom API client to avoid extra dependencies, keeping code clean and professional
const API_BASE_URL = 'http://localhost:5000/api';

export const apiClient = {
  get: async <T>(url: string, headers: Record<string, string> = {}): Promise<T> => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json() as Promise<T>;
  },

  post: async <T>(url: string, body: any, headers: Record<string, string> = {}): Promise<T> => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },
};
