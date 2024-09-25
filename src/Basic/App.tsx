import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Store} from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name : '누나네 식당',
  category : 'western',
  address : {
    city:'incheon',
    detail: 'somewhere',
    zipCode : 23425634
  },
  menu : [{name : 'rose pasta', price : 2000, category:"Pasta"}, 
    {name : 'Galic pasta', price : 6000, category:"Pasta"}]
}

const App:React.FC= () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address)=>{
    setMyRestaurant({...myRestaurant, address})
  }
  const showBestMenuName = (name:string) => {return myRestaurant.menu[0].name}
  return ( 
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자"  showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
