import { Request, Response } from 'express';
import Order from '../models/order';
import * as orderService from '../services/order.service'
import { Op } from 'sequelize';

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { totalAmount, status } = req.body;

  try {
    const newOrder = await orderService.createOrder( totalAmount, status );
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

export const cancelOrder = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.body;

  try {
    const order = await orderService.cancelOrder(parseInt(id));

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = 'canceled';
    await order.save();

    res.status(200).json({ message: 'Order canceled successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error canceling order', error });
  }
};


export const getEndOfDayReport = async (req: Request, res: Response) => {
    try {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);  
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);  
  
      const totalOrders = await Order.count({
        where: {
          createdAt: {
            [Op.between]: [startOfDay, endOfDay],
          },
        },
      });
  
      const totalAmount = await Order.sum('totalAmount', {
        where: {
          createdAt: {
            [Op.between]: [startOfDay, endOfDay],
          },
        },
      });
  
      res.status(200).json({ totalOrders, totalAmount });
    } catch (error) {
      res.status(500).json({ message: 'Error generating report', error });
    }
  };

export const deleteOrder = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  try {
    const order = await orderService.deleteOrder(parseInt(id));

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};
