import React from 'react';
import { Menu } from './model/restaurant'

//type menu로 이미 존재함
interface OwnProps extends Menu {
  showBestMenuName(name:string):string
}
export default function BestMenu({name, category, price, showBestMenuName}:OwnProps){
  return (
    <div>
      <div>BestMenu</div>
      <div>{name}</div>
    </div>
  );
}

