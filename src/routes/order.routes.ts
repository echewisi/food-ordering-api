import { Router } from "express";
import {
  getAllOrders,
  createOrder,
  cancelOrder,
  deleteOrder,
  getEndOfDayReport,
} from "../controllers/order.controller";

const router = Router();

router.get("/", getAllOrders);
router.post("/", createOrder);
router.patch("/", cancelOrder);
router.delete("/:id", deleteOrder);
router.get("/end-of-day-report", getEndOfDayReport); // Add this route for the report

export default router;
