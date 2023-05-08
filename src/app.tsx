import { Api } from './api';
import { Router } from '@/router';
import '@/assets/styles/index.css';

const App = () => (
  <Api>
    <Router />
  </Api>
);

export default App;
