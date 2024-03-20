// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Cart, Home, Prices, Products } from './components';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/price" component={Prices} />
//         <Route path="/products" component={Products} />
//         <Route path="/cart" component={Cart} />
//       </Switch>
//     </Router>
//   </React.StrictMode>,
// );




import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Cart, Home, Prices, Products} from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '',
        element: <Home />
      },
      {
        path: 'price',
        element: <Prices />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
