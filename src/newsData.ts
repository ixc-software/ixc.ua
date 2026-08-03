import baseNews from './newsData.json';
import { ixcAiAutomationNews } from './content/ixcAiAutomationNews';
import { ixcJuly2026News } from './content/ixcJuly2026News';
import { ixcJune2026News } from './content/ixcJune2026News';
import { ixcWebV7News } from './content/ixcWebV7News';

export type NewsItem = (typeof baseNews)[number];

const newsData: NewsItem[] = [
  ixcJuly2026News as NewsItem,
  ixcJune2026News as NewsItem,
  ixcAiAutomationNews as NewsItem,
  ixcWebV7News as NewsItem,
  ...(baseNews as NewsItem[]),
];

export default newsData;
