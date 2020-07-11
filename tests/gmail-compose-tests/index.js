import { Selector } from 'testcafe';

const config = require('./config.json');

console.log(`Pdf Path: ${config.pdfFilePath}.`);
console.log('asaaaa');
console.log(`Pic Path: ${config.jpgFilePath}.`);
console.log('bbbbbb');

fixture`Gmail Fixture`
    .page`https://www.gmail.com/`;
	

test('Gmail Sending Test', async t => {
    await t
        .typeText(Selector('#identifierId'), config.sender.email)
        .click(Selector('#identifierNext'))
        .typeText(Selector('#password'), config.sender.password)
        .click(Selector('#passwordNext'))
        .click(Selector('.aic').find('div').withAttribute('role', 'button'))
        .wait(5000)//Wait to Load Page Completely
        .click(Selector('#\\:19a'))
        .typeText(Selector('#\\:19h'), config.receiver.email)
        .typeText(Selector('input[name="subjectbox"]'), 'Test Cafe - Subject')
        .typeText(Selector('div.editable[aria-label="Message Body"]'), 'This is a Test with Test Cafe with Bold and Colored Text!')
        .selectText(Selector('div.editable[aria-label="Message Body"]'), 35, 45)
        .pressKey('ctrl+b')
        .click(Selector('#\\:1c5').find('div').withAttribute('class', /eS\s+aaA aaB/))
        .click(Selector('#T-Kw-Jn40').find('.T-Kw-Jt'))
        .click(Selector('#\\:1ah'))
        .setFilesToUpload(Selector('#\\:173').find('[name="Filedata"]'), ['.\\files\\doc.pdf'])
        .click(Selector('#\\:1ah'))
        .setFilesToUpload(Selector('#\\:173').find('[name="Filedata"]'), ['.\\files\\pic.jpg'])
        .click(Selector('#\\:18p'))
        .click(Selector('header').find('.gb_Ka.gbii'))
        .click(Selector('header').find('a').withText('Sign out'))
        .click(Selector('#view_container').find('div').withText('Use another account').nth(12))
        .typeText(Selector('#identifierId'), config.sender.email)
        .pressKey('enter')
        .typeText(Selector('#password').find('.whsOnd.zHQkBf'), config.sender.password)
        .click(Selector('#passwordNext').find('span').withText('Next').nth(0))
        .click(Selector('#\\:2f'))
        .click(Selector('#\\:es').find('.aSK.J-J5-Ji.aYr'))
        .click(Selector('#\\:f5').find('.aSK.J-J5-Ji.aYr'));
});
