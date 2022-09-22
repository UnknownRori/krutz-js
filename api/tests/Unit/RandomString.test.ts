import RandomString from "../../src/Services/RandomStringService";

describe('It can generate unique random string', () => {
    let services: RandomString;

    beforeEach(() => {
        services = new RandomString();
    });

    test('Generate the random string 1', () => {
        const uri = services.generate();

        expect(uri).toBeTruthy();
    });
});