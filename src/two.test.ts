import got from 'got';

function sub(a, b)
{
	return a - b;
}

describe("group", () => {

test('sub 1 - 2 to equal -1', () => {
	expect(sub(1, 2)).toBe(-1);
});


test('got fetch', async () => {
	
	const response = await got('https://sindresorhus.com');
	expect(response.body).toContain('doctype html');

});

});
