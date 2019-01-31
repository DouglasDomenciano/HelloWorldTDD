import { expect } from 'chai';
import { helloWorld, helloWorldWithName } from '../src/js/main'
describe('First test with Mocha & Chai', () => {
    context('smoke testes', () => {
        it('should be a Hello World exstis', () => {
            expect(helloWorld()).to.be.exist;
        });
    });
    context('should return de strig "Hello World"', () => {
        it('should return the simple string with none params', () => {
            expect(helloWorld()).to.be.equal("Hello World");
        });
        it('should return a custom hello world with a name passed in params', () => {
            expect(helloWorldWithName("Douglas")).to.be.equal("Hello World Douglas");
        });
    });
});