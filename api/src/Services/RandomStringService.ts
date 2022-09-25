import { randomUUID } from 'crypto';

import prisma from './Prisma';

export default class RandomString {

    /**
     * Initialize RandomString service using passed parameter to limit how many 
     * loop should be performed
     * 
     * @param  limitLoop number
     * @return RandomString
     */
    constructor(protected limitLoop = 4) {
    }
    /**
     * Generate random text
     * @param limit number
     * @param counter number
     * @returns string
     * @throw Error
     */
    async generate(counter = 0): Promise<string> {
        const randomStringCollection = randomUUID().split('-').filter((val) => val.length < 10);
        const index = Math.floor(Math.random() * randomStringCollection.length);
        const randomString = randomStringCollection[index];

        const dbResult = await prisma.url.findFirst({
            where: {
                short: randomString
            }
        });

        if (counter >= this.limitLoop)
            throw new Error("Exceeding the limit");

        if (dbResult != null)
            return this.generate(counter++);

        return randomString;
    }
}