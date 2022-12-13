import {useEffect,useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [productslist, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getProducts();
      setProducts(fetchedData);
    };
    fetchData();
  }, []);

  // search functionality

  // delete products
  const deleteItems = async (id) => {
    // const productItem = await getProducts(id)
    await fetch(`http://localhost:6001/listings/${id}`,
      {
      method: 'DELETE',
      },
      
    );
   
    setProducts(
      productslist.filter(product => product.id !==id)
    )
  }

  console.log(productslist);
  const getProducts = async () => {
    const response = await fetch("http://localhost:6001/listings");
    const data = await response.json();
    return data;
  };

  return (
    <main>
      <ul className="cards">
        {productslist.map((product) => (
        <ListingCard product={product} onDelete={deleteItems} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
