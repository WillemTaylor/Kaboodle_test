import sortingReducer, {
    filterSort
} from './SortingSlice';

describe('sorting reducer', () => {
    const initialState = {
        type: 'asc'
    };
    it('should handle initial state', () => {
        expect(sortingReducer(undefined, { type: 'unknown' })).toEqual({
            type: 'asc'
        });
    });
    
    it('should handle change', () => {
        const actual = sortingReducer(initialState, filterSort('Sort asc &#8593;'));
        expect(actual.type).toEqual('Sort asc &#8593;');
    });

    it('should handle change', () => {
        const actual = sortingReducer(initialState, filterSort('Sort desc &#8595;'));
        expect(actual.type).toEqual('Sort desc &#8595;');
    });
});