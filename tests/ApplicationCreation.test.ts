import App from "../src/App";

// Create Krutz Application
test('Create Krutz Application', () => {
    const app = new App();

    expect(app).toBeInstanceOf(App);
});