import { useState } from "react";

export const useOrder = (items) => {
  const [order, setorder] = useState(false);
  const handleOrder = () => {
      setorder(!order);
      if(order == false) items = items.sort(((a, b) => b.name - a.name));
      else items = items.sort(((a, b) => a.name - b.name));
      
  };
  return { items, handleOrder };
};
