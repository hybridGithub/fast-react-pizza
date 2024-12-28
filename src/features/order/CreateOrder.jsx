import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
  {
    "pizzaId": 1,
    "name": "Margherita",
    "quantity": 2,
    "unitPrice": 8.99,
    "totalPrice": 17.98
  },
  {
    "pizzaId": 2,
    "name": "Pepperoni",
    "quantity": 1,
    "unitPrice": 10.49,
    "totalPrice": 10.49
  },
  {
    "pizzaId": 3,
    "name": "Vegetarian",
    "quantity": 3,
    "unitPrice": 9.99,
    "totalPrice": 29.97
  },
  {
    "pizzaId": 4,
    "name": "Hawaiian",
    "quantity": 1,
    "unitPrice": 11.99,
    "totalPrice": 11.99
  }
];

const CreateOrder = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>
        <div>
          <label>Phone</label>
          <input type="tel" name="phone" required />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>
        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>{isSubmitting ? "Placing order..." : "Order now"}</button>
        </div>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  }
  
  const errors = {};

  if (!isValidPhone(order.phone)) errors.phone = "Please provide your correct number.";

  if(Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;