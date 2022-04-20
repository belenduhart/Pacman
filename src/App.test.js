import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

it('renders correctly' , () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
