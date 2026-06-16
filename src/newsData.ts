import baseNews from './newsData.json';
import { ixcAiAutomationNews } from './content/ixcAiAutomationNews';
import { ixcWebV7News } from './content/ixcWebV7News';

export type NewsItem = (typeof baseNews)[number];

const newsData: NewsItem[] = [
  ixcAiAutomationNews as NewsItem,
  ixcWebV7News as NewsItem,
  ...(baseNews as NewsItem[]),
];

export default newsData;
