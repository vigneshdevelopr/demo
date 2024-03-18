import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/md-light-deeppurple/theme.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById("root")).render(

    <PrimeReactProvider>

      <App />
  </PrimeReactProvider>
);
