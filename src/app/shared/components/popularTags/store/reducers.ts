import { createFeature, createReducer, on } from '@ngrx/store';
import { popularTagActions } from './actions';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsFeature = createFeature({
  name: 'popular tags',
  reducer: createReducer(
    initialState,
    on(popularTagActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(popularTagActions.getPopularTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })),
    on(popularTagActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
  ),
});

export const {
  name: popularTagsFeatureKey,
  reducer: popularTasReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData,
} = popularTagsFeature;
