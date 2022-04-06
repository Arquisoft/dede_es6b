import { createOrder } from "../api/api";

export function getDeliveryPrice():number{
     let orderJSON = localStorage.getItem("order");
     let order= JSON.parse(orderJSON!);
     let realOrder=createOrder(order);
    return order["rates"][0]["amount"];
}
