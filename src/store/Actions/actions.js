import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

export const fetchData = (startDate, endDate) => {
  return async (dispatch) => {
    console.log("Fetching data from API...");
    dispatch({ type: FETCH_DATA_REQUEST, loading: true });

    try {
      const response = await fetch(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      console.error("Fetching data failed:", error);
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
