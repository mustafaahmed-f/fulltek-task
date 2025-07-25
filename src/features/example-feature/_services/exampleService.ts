import { apiClient } from '@/services/apiClient';
import type { ExampleItem, CreateExampleItemRequest, UpdateExampleItemRequest } from '../_types';

export const exampleService = {
  // Get all example items
  getAll: async (): Promise<ExampleItem[]> => {
    const response = await apiClient.get<ExampleItem[]>('/example-items');
    return response.data;
  },

  // Get example item by ID
  getById: async (id: string): Promise<ExampleItem> => {
    const response = await apiClient.get<ExampleItem>(`/example-items/${id}`);
    return response.data;
  },

  // Create new example item
  create: async (data: CreateExampleItemRequest): Promise<ExampleItem> => {
    const response = await apiClient.post<ExampleItem>('/example-items', data);
    return response.data;
  },

  // Update example item
  update: async (data: UpdateExampleItemRequest): Promise<ExampleItem> => {
    const response = await apiClient.put<ExampleItem>(`/example-items/${data.id}`, data);
    return response.data;
  },

  // Delete example item
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/example-items/${id}`);
  },
};