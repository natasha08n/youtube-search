import keyMirror from 'keymirror';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
export const API = 'AIzaSyBbBlfM1ilxaDmUqh4y9QMCvjyapR6RjZs';
export const MIN_QUERY_LENGTH = 2;
export const VIDEO_TYPES = ['any', 'episode', 'movie'];
export const PER_PAGE_VALUES = [16, 24, 32, 40];

export const ACTION_TYPES = keyMirror({
    FETCH_VIDEOS_START: null,
    FETCH_VIDEOS_SUCCESS: null,
    FETCH_VIDEOS_FAILURE: null,
    LOAD_VIDEOS_SUCCESS: null,
    LOAD_VIDEOS_FAILURE: null,
    SET_ACTIVE_VIDEO: null,
    SET_VIDEO_TYPE: null,
    UPDATE_SEARCH_QUERY: null,
    SET_PER_PAGE_VALUE: null
});
