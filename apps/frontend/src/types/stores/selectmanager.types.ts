import type { TagList } from 'linkmarker';

export interface SelectManagerStoreState {
  tagList: TagList;
  activeTagId: number | null;
  searchQuery: string;
}
