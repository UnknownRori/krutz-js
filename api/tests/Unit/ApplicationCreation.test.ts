import App from "../../src/App";

test('Create Krutz Application', () => {
    const app = new App();

    expect(app).toBeInstanceOf(App);
});