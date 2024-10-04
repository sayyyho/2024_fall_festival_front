// src/hooks/useMain.js
import { useState, useEffect } from "react";
import { getBoothList } from "../apis/booth";

export const useBoothData = ({
  day,
  category,
  location,
  is_night,
  is_reservable,
}) => {
  const [boothData, setBoothData] = useState(null);
  const fetchBoothData = async () => {
    try {
      const res = await getBoothList(
        day,
        category,
        location,
        is_night,
        is_reservable
      );
      console.log("response:", res);
      const resData = res.data;
      console.log("resData:", resData);
      setBoothData(resData);
    } catch (error) {
      // console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchBoothData();
  }, [day, category, location, is_night, is_reservable]);

  return { boothData };
};
