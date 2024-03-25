import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "./ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
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
  );
}
