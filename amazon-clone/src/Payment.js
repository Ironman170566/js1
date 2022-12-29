import React from "react";
import "./Payment.css";
import { useStateValue } from "./stateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="Payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.emaail}</p>
            <p>123 react-Lane</p>
            <p>Los-angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <div className="checkoutP">
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <h3>Card details:</h3>
            <br />
            <form>
              <div className="card__name">
                <label>CardHolder's Name:</label>
                <input
                  type="text"
                  placeholder="Enter your cardholder's name:"
                />
              </div>
              <br />

              <div className="card__number">
                <label>Card Number:</label>
                <input type="text" placeholder="Enter your card number:" />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </form>
            <br />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={basket?.reduce((prevVal, currentVal) => {
                  return prevVal + currentVal.price;
                }, 0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <br />
              <button>
                <span>Buy Now</span>
              </button>
            </div>
            <br />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
