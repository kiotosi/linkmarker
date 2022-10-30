import { TagList } from '../tags/tag';
export interface LinkPreview {
  id: number;
  title: string;
  href: string;
  favicon: string;
  themeColor: string;
  text: string;
  tagList: TagList;
}
