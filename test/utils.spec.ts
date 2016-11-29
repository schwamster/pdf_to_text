import { utils } from '../utils';

describe('can create pdf reader', () => {
    it('constructor works', () => {
        let reader = new utils.PdfReader();
        expect(reader).not.toBeNull();
    });
});