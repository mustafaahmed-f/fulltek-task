import type { ExampleItem } from '../_types';

export const exampleUtils = {
  // Format example item title
  formatTitle: (title: string): string => {
    return title.trim().toLowerCase().replace(/\s+/g, '-');
  },

  // Get status color for UI
  getStatusColor: (status: ExampleItem['status']): string => {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'inactive':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  },

  // Get status variant for badges
  getStatusVariant: (status: ExampleItem['status']): 'default' | 'secondary' | 'destructive' => {
    switch (status) {
      case 'active':
        return 'default';
      case 'inactive':
        return 'destructive';
      case 'pending':
        return 'secondary';
      default:
        return 'secondary';
    }
  },

  // Filter items by status
  filterByStatus: (items: ExampleItem[], status: ExampleItem['status']): ExampleItem[] => {
    return items.filter(item => item.status === status);
  },

  // Sort items by creation date
  sortByCreatedDate: (items: ExampleItem[], order: 'asc' | 'desc' = 'desc'): ExampleItem[] => {
    return [...items].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
  },

  // Search items by title or description
  searchItems: (items: ExampleItem[], query: string): ExampleItem[] => {
    const lowercaseQuery = query.toLowerCase();
    return items.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery)
    );
  },
};