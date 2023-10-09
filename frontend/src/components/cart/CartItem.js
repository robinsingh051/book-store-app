import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <Row className="cart-item mt-2 border-bottom">
      <Col>
        <Row>
          <Col>
            <Image src={props.item.image} alt={props.item.title} thumbnail />
          </Col>
          <Col>
            <div className="item-details">
              <h6>{props.item.title}</h6>
            </div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <p>Quantity: {props.item.amount}</p>
          </Col>
          <Col>
            <div className="item-actions">
              <Button
                className="m-2"
                variant="outline-danger"
                onClick={props.onRemove}
              >
                -
              </Button>
              <Button variant="outline-success" onClick={props.onAdd}>
                +
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
