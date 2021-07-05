import { 
    NAME,
    TOTAL, 
    URL_CONTENT,
} from './actionTypes';

export const setName = value => ({
    type: NAME,
    value: value
});

export const setTotal = value => ({
    type: TOTAL,
    value: value
});

export const setUrlContent = value => ({
    type: URL_CONTENT,
    value: value
});