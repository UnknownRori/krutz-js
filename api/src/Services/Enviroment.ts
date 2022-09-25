import dotenv from 'dotenv';

/**
 * A service singleton class that serve as helper for env variable
 */
class Enviroment {
    public APP_HOST: string;
    public APP_PORT: number;

    constructor() {
        dotenv.config();
        this.APP_HOST = process.env.APP_HOST ?? '0.0.0.0';
        this.APP_PORT = Number.parseInt(process.env.APP_PORT as string) ?? 3000;
    }
}

const env = new Enviroment();

export default env;