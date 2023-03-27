
import './App.css';
import {  Route, Routes } from 'react-router';
import { LandingView } from './components/landing/landing.view';
import { ProductForBuyingView } from './components/products/products.views'

function App() {
  // return <RouterProvider router={router} />;
  return (
    <Routes>
      <Route path='/' element={<LandingView />} />
      <Route path='/specific/prod/:productId' element={<ProductForBuyingView />} />
    </Routes>
  )
}

export default App;

// import { MainContainer } from './components/mainContainer/maincontainer.view';
// import { LandingController } from './components/landing/landing.controller';

// function App() {
//   return (
//     <MainContainer>
//       <LandingController/>
//     </MainContainer>
//   );
// }

// export default App;