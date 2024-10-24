import Order from '../models/order';

export const createOrder = async (totalAmount: number, status: string) => {
  return await Order.create({ totalAmount, status });
};

export const getAllOrders = async () => {
  return await Order.findAll();
};

export const cancelOrder = async (id: number) => {
  const order = await Order.findByPk(id);
  if (!order) {
    throw new Error('Order not found');
  }
  order.status = 'canceled';
  await order.save();
  return order;
};

export const deleteOrder = async (id: number) => {
  const order = await Order.findByPk(id);
  if (!order) {
    throw new Error('Order not found');
  }
  await order.destroy();
  return {
    "message": "order has been deleted"
  };
};
