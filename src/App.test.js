import { render, screen,waitFor } from '@testing-library/react';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import thunk from '../node_modules/redux-thunk';
import reducer from './redux/reducers'
import axios from 'axios'
jest.mock('axios');

const data = {
  data: [
   {
     id: 1,
     title: 'title 1'
   },
   {
     id: 2,
     title: 'title 2'
   },
   {
     id: 3,
     title: 'mocked title'
  }]
}

 function renderRedux(
    ui,
    {
      initialState,
      store = createStore(reducer, applyMiddleware(thunk)),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>
    }
    return render(ui, { wrapper: Wrapper, ...renderOptions })
  }

  test('renders Post Data', async () => {
    axios.get.mockResolvedValue(data);
    renderRedux(<App />);
    const linkElement = screen.getByText(/Post/i);
    await waitFor(()=>expect(linkElement).toBeInTheDocument());
  });
