import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {

  const order = useLoaderData();

  const {
    id,
    status,
    customer,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-semibold">Order status</h1>

        <div className="space-x-2">
          <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
            Priority
          </span>
          <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            Order Status
            <ul>
              <p>Customer: {customer}</p>
              <li>Estimated Delivery: {estimatedDelivery}</li>
              <li>Order Price: {orderPrice}</li>
              <li>Order Status: {status}</li>
              <li>Priority: {priority ? "High" : "Low"}</li>
              <li>Priority Price: {priorityPrice}</li>
              {cart.map((itm) => (
                <ul key={itm.pizzaId}>
                  <li>{itm.name}</li>
                  <li>{itm.quantity}</li>
                  <li>{itm.unitPrice}</li>
                </ul>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
};

export async function loader({ params }) {
  const order = await getOrder(params.order_id);
  return order;
}

export default Order;