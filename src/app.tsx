import { Api } from '@/api';
import { Toast } from '@/toast';
import { Router } from '@/router';
import '@/assets/styles/index.css';

export const App = () => (
  <Api>
    <Toast>
      <Router />
    </Toast>
  </Api>
);
