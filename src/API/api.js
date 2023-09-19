import axios from "axios";

export const signUpAPI = async (data) => {
  return await axios
    .post("http://localhost:3000/users/signup", data)
    .then((response) => {
      return response;
    });
};

export const logInAPI = async (data) => {
  return await axios
    .post("http://localhost:3000/users/login", data)
    .then((response) => {
      return response;
    });
};

export const logOutAPI = async () => {
  return axios.post("http://localhost:3000/users/logout").then((response) => {
    return response;
  });
};

export const postMenuAPI = async (data) => {
  return await axios
    .post("http://localhost:3000/menu/add-item", data)
    .then((response) => {
      return response;
    });
};

export const getMenuAPI = async (data) => {
  const res = await axios.get("http://localhost:3000/menu/getMenu", data);
  return res;
};

export const postItems = async (data) => {
  return await axios
    .post("http://localhost:3000/checkout/addItems", data)
    .then((response) => {
      return response;
    });
};

//
// export const getItems = async (itemNames) => {
//   //
//   const params = { params: { items: itemNames } };
//   const res = await axios.get(`http://localhost:3000/checkout/getItems/${900}`);
//   return res.data;
// };

export const deleteMenuAPI = async (data) => {
  return await axios
    .delete(`http://localhost:3000/menu/delete/${data}`)
    .then((response) => {
      return response;
    });
};

export const getOrder = async (data) => {
  const res = await axios.get(`http://localhost:3000/checkout/bigOrder?checkout=${data}`);
  return res;
};


