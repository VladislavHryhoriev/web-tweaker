import { $children } from './selectors';

export const getList = () => [...$children('.j-list-body')];
