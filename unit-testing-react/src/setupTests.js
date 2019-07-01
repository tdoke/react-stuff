import Enzyme from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
})