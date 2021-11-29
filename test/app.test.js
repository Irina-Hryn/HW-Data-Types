import {html} from '../__mocks__/mocks/mocks-data';
import {domElements} from '../src/app/constans';
import {init} from '../src/app/app';

describe('On init', function () {
    beforeEach(() => {
        document.body.id = 'body';
        document.body.innerHTML = html;

        domElements.imageBtn = document.querySelector('.getImages');
        domElements.imageContainer = document.querySelector('.container');
        domElements.items = document.querySelector('.paginator');
        domElements.currentBtn = document.querySelector('button.active');
        domElements.wrappers = document.querySelector('.wrapper');

    });

    afterAll(() => {
        document.body.id = '';
        document.body.innerHTML = '';
    });
    it('receiving the number of pictures on request', async function () {
        await init();
        expect(document.querySelector('.getImages').length).toBe(36);
    });

});
