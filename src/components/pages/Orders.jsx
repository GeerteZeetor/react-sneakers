import React, { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://63e5029b4474903105f7307d.mockapi.io/orders'
        );
        setOrders(data.map(obj => obj.items).flat());
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="content p-50">
      <div className="mb-40 d-flex justify-between ">
        <h1 className="">Мои покупки</h1>
      </div>
      <div className="sneakers d-flex ">
        {(isLoading ? [...Array(8)] : orders).map((obj, index) => (
          <Card {...obj} key={index} loading={isLoading} />
        ))}
      </div>
    </div>
  );
}
