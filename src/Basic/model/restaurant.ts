/*
let data = {
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
*/

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[]; //이러한 객체의 array 타입이다.
}

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
}

export type Menu = {
  name: string;
  price?: number;
  category: string;
}

export type AddressWithoutZip = Omit<Address, 'zipCode'>;
export type RestaurantOnlyCategor = Pick<Restaurant, 'category'>;


//Api 응답값을 처리할 때 dynamic한 타입을 지정해두고 이를 응용해서 사용한다
export type ApiResponse<T> = 
{
  data : T[],
  totalPage : number,
  page : number
}

export type RestaurantResponse = ApiResponse<Restaurant>;