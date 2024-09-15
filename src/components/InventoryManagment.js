import React from 'react';
import './InventoryManagment.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const InventoryManagement = () => {
    const items = [
        {
          itemCode: 'ITEM001',
          itemName: 'Apple',
          itemGroup: 'Fruit',
          lastPurchase: '2023-03-15',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 100,
          image:"https://tse2.mm.bing.net/th?id=OIP.62lh_jf8pV1ChKKRvc6KMAHaD5&pid=Api&P=0&h=180"
        },
        {
          itemCode: 'ITEM002',
          itemName: 'Banana',
          itemGroup: 'Fruit',
          lastPurchase: '2023-03-10',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 50,
          image: "https://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal.jpg",
        },
        {
          itemCode: 'ITEM003',
          itemName: 'Orange',
          itemGroup: 'Fruit',
          lastPurchase: '2023-03-05',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 20,
          image: "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
        },
        {
          itemCode: 'ITEM004',
          itemName: 'Milk',
          itemGroup: 'Dairy',
          lastPurchase: '2023-03-15',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 100,
          image: "https://www.thespruce.com/thmb/TMRYcJe21L7W5Rn2R8jDqIfVSCk=/5750x3829/filters:fill(auto,1)/top-tomato-growing-tips-1402587-11-c6d6161716fd448fbca41715bbffb1d9.jpg",
        },
        {
          itemCode: 'ITEM005',
          itemName: 'Yogurt',
          itemGroup: 'Dairy',
          lastPurchase: '2023-03-10',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 50,
          image: "https://www.netmeds.com/images/cms/wysiwyg/blog/2023/05/1683696515_Brinjal-_898x450.jpg",
        },
        {
          itemCode: 'ITEM006',
          itemName: 'Cheese',
          itemGroup: 'Dairy',
          lastPurchase: '2023-03-05',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 20,
          image: "http://upload.wikimedia.org/wikipedia/commons/7/74/Big_red_apple.jpg",
        },
        {
          itemCode: 'ITEM007',
          itemName: 'Bread',
          itemGroup: 'Bakery',
          lastPurchase: '2023-03-15',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 100,
          image: "https://tse3.mm.bing.net/th?id=OIP.q3JCo-zLI3ugZQhgNyFoFwHaIt&pid=Api&P=0&h=180",
        },
        {
          itemCode: 'ITEM008',
          itemName: 'Cake',
          itemGroup: 'Bakery',
          lastPurchase: '2023-03-10',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 50,
          image: "http://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg",
        },
        {
          itemCode: 'ITEM009',
          itemName: 'Cookies',
          itemGroup: 'Bakery',
          lastPurchase: '2023-03-05',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 20,
          image: "https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg",
        },
        {
          itemCode: 'ITEM010',
          itemName: 'Cookies',
          itemGroup: 'Bakery',
          lastPurchase: '2023-03-05',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 20,
          image: "https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg",
        },
        {
          itemCode: 'ITEM011',
          itemName: 'Cookies',
          itemGroup: 'Bakery',
          lastPurchase: '2023-03-05',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 20,
          image: "https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg",
        },
        {
          itemCode: 'ITEM012',
          itemName: 'Cookies',
          itemGroup: 'Bakery',
          lastPurchase: '2023-03-05',
          sellPrice: 120,
          purchasePrice: 140,
          onHand: 20,
          image: "https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg",
        }
      ];
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Item Code.</th>
            <th>Photo</th>
            <th>Item Name</th>
            <th>Item Group</th>
            <th>Last Purchase</th>
            <th>Purchase Price</th>
            <th>Sell Price</th>
            <th>On Hand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.itemCode}</td>
              <td>
                {/* Add photo here */}
                <img src={item.image} alt={item.itemName} />
              </td>
              <td>{item.itemName}</td>
              <td>{item.itemGroup}</td>
              <td>{item.lastPurchase}</td>
              <td>{item.purchasePrice}</td>
              <td>{item.sellPrice}</td>
              <td>{item.onHand}</td>
              <td className='buttons'>
                <button><EditIcon/></button>
                <button><DeleteIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;