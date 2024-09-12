const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2">
          <div>
            <span className="font-bold">{item.card.info.name}</span>
            <span>- ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
          </div>
          <p className="text-sm">{item.card.info.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;
