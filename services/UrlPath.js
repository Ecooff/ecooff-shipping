export const LOCALHOST = "http://localhost:3000/api/";
export const PROD = "https://ecooff.herokuapp.com/api/";

export const URL = PROD;

//Users
export const serverAlive = URL + "users/serverAlive";
export const login = URL + "shipping/auth/authenticate";
export const retrieveUser = URL + "shipping/auth/retrieveUser";

// ORDERS
export const getHomeStats = URL + "orders/getDailyOrdersLength";
export const getOrdersToPickUp = URL + "orders/getDailyBags";
export const getOrdersToDeliver = URL + "orders/getDeliveryScreenData/";
export const getOrdersDetail = URL + "orders/getOrderDetail/";
export const changeOrderStatus = URL + "orders/changeStatus";

const URLPath = {
  serverAlive,
  login,
  retrieveUser,
  getHomeStats,
  changeOrderStatus,
  getOrdersToDeliver,
  getOrdersDetail,
  getOrdersToPickUp
};

export default URLPath;
