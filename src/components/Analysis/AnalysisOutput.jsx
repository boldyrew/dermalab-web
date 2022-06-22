import React from 'react';
import { SendToEmailPopup } from "../popups/SendToEmailPopup";

export function AnalysisOutput(props) {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);
  const [sentToEmail, setSentToEmail] = React.useState(false);

  const handleSendToEmail = (event) => {
    const user = localStorage.getItem("user");
    !user ? setPopupIsOpen(true) : setSentToEmail(true);
  }

  console.log(props);

  return (
    <>
      <div className="container">
        <div className="analysis">
          <div className="analysis-screen" id="analysis-input">
            <div className="analysis-result">
              <h3 style={{ marginBottom: "20px" }}>Result</h3>
              <div className="analysis-result-box">
                <div className="analysis-result-image">
                  <img src={props.image} />
                </div>
                <div className="analysis-result-info secondary">
                  <h4>Total skin info</h4>
                  <br />
                  <h5>Redness</h5>
                  <p>{ props.result.redness }</p>
                  <br />
                  <h5>Acne</h5>
                  <p>{ props.result.acne }</p>
                  <br />
                  <h5>Pigmentation</h5>
                  <p>{ props.result.pigmentation }</p>
                </div>
              </div>
            </div>
            <div className="button-bar">
              <button className="btn" onClick={handleSendToEmail}>Send to email</button>
              {sentToEmail && <div className="info-text">Result has been sent to email!</div> }
            </div>
          </div>
          <div className="related-products">
            <h3>Related products</h3>
            <ul className="related-products-tabs">
              <li>
                <a href="#" className="current">
                  Skincare
                </a>
              </li>
              <li>
                <a href="#">Makeup</a>
              </li>
            </ul>
            <ul className="products-list main">
              <li>
                <div className="product-item">
                  <div className="product-item-img">
                    <img src="assets/img/product.jpg" />
                  </div>
                  <a href="#" className="product-item-title">
                    Innisfree
                  </a>
                </div>
              </li>
              <li>
                <div className="product-item">
                  <div className="product-item-img">
                    <img src="assets/img/product.jpg" />
                  </div>
                  <a href="#" className="product-item-title">
                    Innisfree
                  </a>
                </div>
              </li>
              <li>
                <div className="product-item">
                  <div className="product-item-img">
                    <img src="assets/img/product.jpg" />
                  </div>
                  <a href="#" className="product-item-title">
                    Innisfree
                  </a>
                </div>
              </li>
              <li>
                <div className="product-item">
                  <div className="product-item-img">
                    <img src="assets/img/product.jpg" />
                  </div>
                  <a href="#" className="product-item-title">
                    Innisfree
                  </a>
                </div>
              </li>
              <li>
                <div className="product-item">
                  <div className="product-item-img">
                    <img src="assets/img/product.jpg" />
                  </div>
                  <a href="#" className="product-item-title">
                    Innisfree
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SendToEmailPopup isOpen={popupIsOpen} setIsOpen={setPopupIsOpen} setIsSuccess={setSentToEmail} />
    </>
  );
}
