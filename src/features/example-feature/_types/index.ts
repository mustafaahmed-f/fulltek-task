// Example feature types
export interface ExampleItem {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

export interface ExampleFeatureState {
  items: ExampleItem[];
  loading: boolean;
  error: string | null;
}

export interface CreateExampleItemRequest {
  title: string;
  description: string;
}

export interface UpdateExampleItemRequest {
  id: string;
  title?: string;
  description?: string;
  status?: 'active' | 'inactive' | 'pending';
}