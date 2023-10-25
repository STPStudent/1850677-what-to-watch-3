import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { films } from './mocks/films';
import { PromoFilm } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilm = {PromoFilm} films = {films}
    />
  </React.StrictMode>
);
