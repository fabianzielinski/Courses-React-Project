import React, { createContext, useEffect, useState, FC } from "react";

import request from "../helpers/request";

const coursesContextDefaultValue: coursesContextData = {
  users: [],
  courses: [],
};

export const StoreContext = createContext<coursesContextData>(
  coursesContextDefaultValue
);

const StoreProvider: FC = ({ children }) => {
  const [courses, setCourses] = useState<courseType[]>([]);
  const [users, setUsers] = useState<userType[]>([]);

  const featchDate = async () => {
    const { data } = await request.get("/courses");
    console.log(data.courses);
    setCourses(data.courses);
  };

  useEffect(() => {
    featchDate();
  }, []);

  return (
    <StoreContext.Provider value={{ courses, users }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
