import { useContext } from "react";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import ProductContext from "./Context";
export default function Cart() {
  const context = useContext(ProductContext);
  return (
    <div>
      {context.cart.length > 0
        ? context.cart.map((value) => {
            return (
              <Row>
                <Col>
                  <Card body>
                    <CardTitle tag="h5">
                      <img
                        alt=""
                        src={value.images[0]}
                        height="50"
                        width="50"
                      />
                      {value.title}
                    </CardTitle>
                    <CardText>{value.price} USD</CardText>
                    <Button onClick={() => context.removeProduct(value.id)}>
                      Remove Product
                    </Button>
                  </Card>
                </Col>
              </Row>
            );
          })
        : "No Products in the cart"}
    </div>
  );
}
