import axios from "axios";
import URLPath from "../services/UrlPath";

const OrdersService = {

  getHomeStats: async (user) => {
    const data = await axios.get(URLPath.getHomeStats, {
      headers: setHeader(user.token),
    });
    return data;
  },

  getOrdersToPickUp: async (user, filter) => {
    console.log('USER', user.token);
    const data = await axios.get(URLPath.getOrdersToPickUp + filter, {
      headers: setHeader(user.token),
    });
    return data;
  },

  getOrdersToDeliver: async (user, filter) => {
    const data = await axios.get(URLPath.getOrdersToDeliver + filter, {
      headers: setHeader(user.token),
    });
    return data;
  },

  getOrdersDetail: async (user, orderId) => {
    const data = await axios.get(URLPath.getOrdersDetail + orderId, {
      headers: setHeader(user.token),
    });
    return data;
  },

  changeOrderStatus: async (user, status) => {
    const data = await axios.put(URLPath.changeOrderStatus, status, {
      headers: setHeader(user.token),
    });
    return data;
  },

  changeBagStatus: async (user, status) => {

    return fetch(URLPath.changeBagStatus + `${status.statusCode}/${status.orderId}/${status.bagId}`, {
      method: "PUT",
      headers: setHeader(user.token),
    }).then((response) => response.json()).catch((error) => {
      return error;
    });

    // const data = await axios.put(URLPath.changeBagStatus + `${status.statusCode}/${status.orderId}/${status.bagId}`,  {
    //   headers: setHeader(user.token),
    // });
    // return data;
  },

};

export default OrdersService;

function setHeader(token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  return headers;
}
