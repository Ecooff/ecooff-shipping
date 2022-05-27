import axios from "axios";
import URLPath from "../services/UrlPath";

const OrdersService = {

  getHomeStats: async (user) => {
    const data = await axios.get(URLPath.getHomeStats, {
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

  changeOrderStatus: async (user, status) => {
    const data = await axios.put(URLPath.changeOrderStatus, status, {
      headers: setHeader(user.token),
    });
    return data;
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
