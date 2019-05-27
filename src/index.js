import dva from 'dva';
import './index.css';

//history - remove hash
const createHistory = require('history').createBrowserHistory

// 1. Initialize
const app = dva({
  history: createHistory(),
  // initialState,
  // onError,
  // onAction,
  // onStateChange,
  // onReducer,
  // onEffect,
  // onHmr,
  // extraReducers,
  // extraEnhancers,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/user').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
