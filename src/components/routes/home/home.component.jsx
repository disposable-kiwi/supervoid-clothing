import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory.component";
import '../../../categories.styles.scss';


const Home = (props) => {

  const categories = [
    {
      "id": 1,
      "title": "Helmets",
      "imageUrl": "https://img1.cgtrader.com/items/3100866/e71f31c890/large/astronaut-helmet-3d-model-low-poly-obj-fbx-stl-blend.jpg"
    },
    {
      "id": 2,
      "title": "Gloves",
      "imageUrl": "https://images.halloweencostumes.com/products/5747/1-1/kids-astronaut-gloves.jpg"
    },
    {
      "id": 3,
      "title": "Upper Body",
      "imageUrl": "https://i.ytimg.com/vi/VsdoJy8rzZg/mqdefault.jpg"
    },
    {
      "id": 4,
      "title": "Pants",
      "imageUrl": "https://www.renderhub.com/albin/emu-nasa-space-suit/emu-nasa-space-suit-07.jpg"
    },
    {
      "id": 5,
      "title": "Boots",
      "imageUrl": "http://cdn.shopify.com/s/files/1/0251/7054/2669/products/Astronaut-boot-plush-slippers-nasa-space-boots-ground-up-international-adult-mens-womens-bedroom-01_1024x1024.jpg?v=1612818582"
    }
  ];

  return (
    <div>
      <Directory categories={categories} />
    </div>

  );
}

export default Home;
