import { $children } from '../../../utils/selectors';

export const getList = () => [...$children('.j-list-body')];
