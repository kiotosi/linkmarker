import type { SelectManagerStoreState } from '../types/stores/selectmanager.types';
import { defineStore } from 'pinia';

export default defineStore('selectmanager', {
  state(): SelectManagerStoreState {
    return {
      activeTagId: null,
      tagList: [],
      searchQuery: '',
    };
  },
});
