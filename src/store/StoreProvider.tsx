import React, { createContext, useEffect, useState, FC } from "react";

import request from "../helpers/request";

export const StoreContext = createContext<StoreContextData>(null);

const useStoreCourses = () => {
  const [courses, setCourses] = useState<object>([]);

  const featchDate = async () => {
    const { data } = await request.get("/courses");

    setCourses(data.courses);
  };
  useEffect(() => {
    featchDate();
  }, []);

  return {
    courses,
    setCourses,
  };
};

const useStoreUser = () => {
  const [user, setUser] = useState<object>(null);

  return {
    user,
    setUser,
  };
};

const StoreProvider: FC = ({ children }) => {
  const value = useStoreCourses();

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;

type StoreContextData = ReturnType<typeof useStoreCourses>;
