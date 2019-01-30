import { expect } from 'chai';
import { HelloWorld, HelloWorldWithName } from '../src/main'
describe('First test with Mocha & Chai', () => {
    context('smoke testes', () => {
        it('should be a Hello World exstis', () => {
            expect(HelloWorld()).to.be.exist;
        });
    });
    context('should return de strig "Hello World"', () => {
        it('should return the simple string with none params', () => {
            expect(HelloWorld()).to.be.equal("Hello World");
        });
        it('should return a custom hello world with a name passed in params', () => {
            expect(HelloWorldWithName("Douglas")).to.be.equal("Hello World Douglas");
        });
    });
});