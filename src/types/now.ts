export interface NowCategoryItem {
  title: string;
  subtitle: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
  tags: string[];
}

export interface NowData {
  lastUpdated: string;
  location: string;
  currentFocus: string;
  building: NowCategoryItem[];
  learning: NowCategoryItem[];
  exploring: NowCategoryItem[];
}
