import { useState } from 'react';

import Header from './components/Layout/Header';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (<div>
      <Header onShowCart={showCartHandler} />
      </div>
  );
}

export default App;
