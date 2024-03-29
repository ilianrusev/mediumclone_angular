import { GetFeedResponseInterface } from './getFeedResponse.interfa';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}
