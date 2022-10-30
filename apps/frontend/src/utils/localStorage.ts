import localStorageNames from '../data/localStorage.define';
import type { LinkPreview, TagList } from 'linkmarker';

export default {
  linkmanager: {
    /**
     * Set link list to LocalStorage
     * @param list List of links
     */
    saveList(list: LinkPreview[]) {
      localStorage.setItem(localStorageNames.linkmanager, JSON.stringify(list));
    },

    /**
     * Get link list from LocalStorage
     * @returns List of links or null, if list doesn't exists
     */
    getList(): LinkPreview[] | null {
      const linkList = localStorage.getItem(localStorageNames.linkmanager);
      return linkList ? JSON.parse(linkList) : null;
    },
  },
  tagmanager: {
    saveList(list: TagList): void {
      localStorage.setItem(localStorageNames.tagmanager, JSON.stringify(list));
    },

    getList(): TagList | null {
      const linkList = localStorage.getItem(localStorageNames.tagmanager);
      return linkList ? JSON.parse(linkList) : null;
    },
  },
};
