import { Selector } from "testcafe";
import { test } from 'testcafe';

let homeURL = 'https://uk.zwift.com';
let primaryWhyZwiftLink = Selector('[class*=\'navbar-link header__link\']').withAttribute('href','/pages/why-zwift');

fixture `Shopify HowZwiftWorkspage`
    .page('about:blank')
    .beforeEach(async t => {
        await t.navigateTo(homeURL);
    })

for (let i = 0; i < 20; i++) {
    test('Slice0 Get Started Button goes to Create Account page', async t => {
        await t.click(primaryWhyZwiftLink);
    })
}

