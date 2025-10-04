// import api from "../api";


// export const getAllUsers = async () => {
//   try {
//     const res = await api.get(`/auth/${query}`);
//     return res.data; 
//   } catch (error: any) {
//     console.error("Get All Users Error:", error.response?.data || error.message);
//     throw error;
//   }
// };



import api from "../api";

export const getAllUsers = async (query: string) => {
  try {
    const res = await api.get(`/auth${query}`); // ✅ query ঠিকভাবে লাগানো হলো
    return res.data;
  } catch (error: any) {
    console.error("Get All Users Error:", error.response?.data || error.message);
    throw error;
  }
};


