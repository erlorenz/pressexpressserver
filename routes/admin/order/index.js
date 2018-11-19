import Order from '../../../models/Order';

export const order = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) throw new Error('No order exists by that ID');
  res.json(order);
};

export { default as addComment } from './addComment';

export { default as changeStatus } from './changeStatus';