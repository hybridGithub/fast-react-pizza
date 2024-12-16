const Order = () => {
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
          </span>
        </div>
      </div>
    </div>
  )
};

export default Order;