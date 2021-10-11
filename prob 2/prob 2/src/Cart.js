import { useCart } from "react-use-cart";
function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
 
  if (isEmpty) {
    return <h1 className= "text-center mt-4">Your Cart is Empty</h1>;
  }
  return (
    <section className="py-4 container">
      <div className="cartTtl">You have ordered</div>
      <div className="row justify-content-center">
        <div className="col-6">
          <table className="table table-light table-hover m-0">
            
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "15rem ", width:"15rem" }} alt="" />
                    </td>
                    <div className="itemTtl">{item.title}</div>
                    <div className="itemDesc">{item.desc}</div>
                    <div className="itemPrice">Price:Rs.{item.price}</div>
                    
                    <td>
                    
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        REMOVE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
export default Cart;
