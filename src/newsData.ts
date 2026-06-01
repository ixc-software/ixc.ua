import baseNews from './newsData.json';
import { ixcWebV7News } from './content/ixcWebV7News';

export type NewsItem = (typeof baseNews)[number];

const newsData: NewsItem[] = [ixcWebV7News as NewsItem, ...(baseNews as NewsItem[])];

export default newsData;
