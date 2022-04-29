import { Selector } from "testcafe";
import { test } from 'testcafe';

let homeURL = 'https://uk.zwift.com';

//slice0
let slice0 = Selector('[class=\'image-with-text-overlay__banner columns one-whole image-crop-none\']').withText('WE BLEND FITNESS WITH ADVENTURE');

fixture `Shopify HowZwiftWorkspage`
    .page('about:blank')
    .beforeEach(async t => {
        await t.navigateTo(homeURL);
    })

test('Slice0 Get Started Button goes to Create Account page', async t => {
    await t.click(slice0);
})