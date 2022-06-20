import React from 'react';
import ReactDOM from 'react-dom/client'
import { Nav } from './Nav';


export const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
const root = ReactDOM.createRoot(rootNode);
root.render(
  <>
<Nav/>
</> 
);