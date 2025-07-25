// Mock API client for demonstration
// In a real application, this would be configured with axios or fetch

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

interface ApiClient {
  get<T>(url: string): Promise<ApiResponse<T>>;
  post<T>(url: string, data?: any): Promise<ApiResponse<T>>;
  put<T>(url: string, data?: any): Promise<ApiResponse<T>>;
  delete<T>(url: string): Promise<ApiResponse<T>>;
}

// Mock implementation for demonstration
export const apiClient: ApiClient = {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response based on URL
    const mockData = getMockData(url);
    
    return {
      data: mockData as T,
      status: 200,
      message: 'Success'
    };
  },

  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful creation
    const mockData = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return {
      data: mockData as T,
      status: 201,
      message: 'Created successfully'
    };
  },

  async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockData = {
      ...data,
      updatedAt: new Date()
    };
    
    return {
      data: mockData as T,
      status: 200,
      message: 'Updated successfully'
    };
  },

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      data: {} as T,
      status: 200,
      message: 'Deleted successfully'
    };
  }
};

// Mock data generator
function getMockData(url: string): any {
  if (url.includes('/example-items')) {
    if (url.includes('/example-items/')) {
      // Single item
      return {
        id: '1',
        title: 'Example Item',
        description: 'This is an example item for demonstration',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      };
    } else {
      // List of items
      return [
        {
          id: '1',
          title: 'First Example',
          description: 'This is the first example item',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          title: 'Second Example',
          description: 'This is the second example item',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
    }
  }
  
  return {};
}

// Real API client configuration example:
/*
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
*/