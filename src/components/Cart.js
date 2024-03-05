import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/Cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const products = useSelector((state) => state.cart);
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "130px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
};

export default Cart;
