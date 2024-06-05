import axios from "axios";
export const GET_ALL_LEAD = "GET_ALL_LEAD";

export const getAllLead = () => {
  return async (dispatch) => {
    const response = await axios.get("/lead");
    const lead = response.data;
    dispatch({ type: GET_ALL_LEAD, payload: lead });
  };
};
