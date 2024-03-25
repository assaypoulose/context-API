import { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";
import ProductContext from "./Context";
export default function ProductCard({ item }) {
  const context = useContext(ProductContext);
  console.log(context);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "33rem",
          marginBottom: "10px"
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            USD {item.price}
          </CardSubtitle>
        </CardBody>
        <img alt="Card cap" src={item.images[0]} width="100%" height="200px" />
        <CardBody>
          <CardText>{item.description}</CardText>
          <Button color="primary" onClick={() => context.addProduct(item)}>
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
