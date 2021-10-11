import { useCart } from "react-use-cart";
import './App.css';
function Itemcard(props) {
  const { addItem } = useCart();
  return (
    <>
        <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4 text-center">
          <div class=" card p-0 overflow-hidden shadow">
            <img src={props.img} class="card-img-top img-thumbnail" alt="" />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.desc}</p>
              <p class="price card-title">Rs {props.price}<span className= "discount"> Rs{props.discount}</span></p>
              <button
                class="cart-btn"
                onClick={() => addItem(props.item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
export default Itemcard;
