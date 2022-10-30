import type { LinkManagerState } from '../types/stores/linkmanager.types';
import type { LinkPreview } from 'linkmarker';
import { defineStore } from 'pinia';
import getMeta from '../service/getMeta';

export default defineStore('linkmanager', {
  state(): LinkManagerState {
    return {
      linkList: [],
    };
  },

  actions: {
    /**
     * Fetch new link to store
     * @param link Link to fetch
     */
    async fetchNewLink(link: string): Promise<void> {
      try {
        const metaInfo = await getMeta(link);
        this.linkList.push(metaInfo);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
