import { Form } from "react-router-dom";

const CreateOrder = () => {

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
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
}

export default CreateOrder;