import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export const popularTagActions = createActionGroup({
  source: 'popular tags',
  events: {
    'Get popular tags': emptyProps(),
    'Get popular tags Success': props<{
      popularTags: PopularTagType[];
    }>(),
    'Get popular tags Failure': emptyProps(),
  },
});
