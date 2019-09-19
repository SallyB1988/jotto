import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// tests for create-react-app look for this file automatically and then they
// will run this file before executing any test file.

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,    // prevent componentDidMount from running whenever shallow wrapper is created
});
