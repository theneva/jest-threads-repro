const subject = require('./subject');

test('it works', async () => {
    expect(await subject.getValue()).toBe('application/json');
}, );
