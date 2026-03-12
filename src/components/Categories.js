import  "../components/Categories.css";
import womenImg from "../assets/Women.jpg";
import menImg from "../assets/Men.jpg";
import accessoriesImg from "../assets/Accessories.jpg";
import saleImg from "../assets/Sale.jpg"


function Categories() {
  const categories = [
    { title: "Women", image: womenImg },
    { title: "Men", image: menImg },
    { title: "Accessories", image: accessoriesImg },
    { title: "Sale", image: saleImg },
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
