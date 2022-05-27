export const LOCALHOST = "http://localhost:3000/api/";
export const PROD = "https://ecooff.herokuapp.com/api/";

export const URL = PROD;

//Users
export const serverAlive = URL + "users/serverAlive";
export const login = URL + "shipping/auth/authenticate";
export const retrieveUser = URL + "shipping/auth/retrieveUser";

// ORDERS
export const getHomeStats = URL + "orders/getDailyOrdersLength";
export const changeOrderStatus = URL + "orders/changeStatu";

const URLPath = {
  serverAlive,
  login,
  retrieveUser,
  getHomeStats,
  changeOrderStatus
};

export default URLPath;
