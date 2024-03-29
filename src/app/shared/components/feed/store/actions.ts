import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interfa';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed Success': props<{ feed: GetFeedResponseInterface }>(),
    'Get feed Failure': emptyProps(),
  },
});
