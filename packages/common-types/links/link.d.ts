export interface LinkPreview {
  id: number;
  title: string;
  href: string;
  preview: {
    background: string;
    icon: string;
  };
  text: string;
  tagList: TagList;
}
