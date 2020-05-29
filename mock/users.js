/**
 * This is an example on how to write mockup API services with use of chance.js library
 * http://chancejs.com
 * https://github.com/chancejs/chancejs
 *
 * @version 1.0
 * @author skitsanos
 */
import Chance from 'chance';

const chance = new Chance();

export default {
    'GET /api/users': {
        result: Array(25).fill({}).map(() => ({
            id: chance.cf(),
            email: chance.email(),
            name: chance.name(),
            gender: chance.gender()
        }))
    }
};