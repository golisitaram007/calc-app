import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './components/Calculator';

describe('Calculator', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Calculator />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});