import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ProductContext from "./Context";
import ProductCard from "./ProductCard";

export default function ProductByCategory() {
  const { category } = useParams();
  const context = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category)
      fetch("https://dummyjson.com/products/category/" + category)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
  }, [category]);
  return (
    <div>
      <Container>
        <Row>
          {products.map((value) => {
            return (
              <Col>
                <ProductCard item={value} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <h4 style={{ position: "fixed", bottom: "40px", right: "10px" }}>
        {context.cartValue}
      </h4>
    </div>
  );
}
