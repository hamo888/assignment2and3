import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce(
    (best, order) => (order.price > best ? order.price : best),
    0
  );
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      student: order.student,
      item: order.item,
    }))
  );
}