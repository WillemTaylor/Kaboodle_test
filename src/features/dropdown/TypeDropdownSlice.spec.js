import dropdownReducer, {
    filterType
} from './TypeDropdownSlice';

describe('dropdown reducer', () => {
    const initialState = {
        type: ''
    };
    it('should handle initial state', () => {
        expect(dropdownReducer(undefined, { type: 'unknown' })).toEqual({
            type: ''
        });
    });
    
    it('should handle change', () => {
        const actual = dropdownReducer(initialState, filterType('Hotel'));
        expect(actual.type).toEqual('Hotel');
    });

    it('should handle change', () => {
        const actual = dropdownReducer(initialState, filterType('Apartment'));
        expect(actual.type).toEqual('Apartment');
    });
});