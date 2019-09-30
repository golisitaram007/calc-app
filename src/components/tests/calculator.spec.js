import Calculator from '../Calculator';


describe('Calculator', () => {
    const component = new Calculator();
    it("should update result", () => {
        component.clearResult('');
        const updatedState = component.state;

        expect(updatedState).toEqual({
            expression: '',
            result: '',
            prevChar: '',
        })
    })
})