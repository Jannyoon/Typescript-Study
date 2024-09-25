import React from 'react';
import { Restaurant } from './model/restaurant';
import { Address } from './model/restaurant';

//타입스크립트에선 props가 있으면 props 타입을 따로 만들어준다.
/*
type infoProps = {
  info : Restaurant
}
*/

interface infoProps {
  info : Restaurant,
  changeAddress: (address: Address) => void
}


export const Store:React.FC<infoProps> = ({info, changeAddress})=> {
  console.log(info, 'info 정보')
  return (
    <div>
      <p>Store</p>  
    </div>
  );
}

