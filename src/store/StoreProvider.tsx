import React, { createContext, useEffect, useState, FC } from "react";

import request from "../helpers/request";

const coursesContextDefaultValue: coursesContextData = {
  user: [],
  course: [],
};

const coursesData: courseType[] = [
  {
    authors: ["Bartłomiej Borowczyk"],
    id: 12555,
    img: "https://img-a.udemycdn.com/course/240x135/1673856_ff13_5.jpg",
    price: 69.99,
    title: "Web developer od podstaw w 15 dni",
  },
];

const usersData: userType[] = [
  {
    login: "User",
    password: "123456",
  },
];
export const StoreContext = createContext<coursesContextData>(
  coursesContextDefaultValue
);

const StoreProvider: FC = ({ children }) => {
  const [course, setCourses] = useState<courseType[]>([]);
  const [user, setUser] = useState<userType[]>([]);

  const featchDate = async () => {
    const { data } = await request.get("/courses");

    setCourses(data.courses);
    // setUser(data.user);

    // setCourses(coursesData);
    // setUser(usersData);

    console.log(course);
    console.log(user);
  };

  useEffect(() => {
    featchDate();
  }, []);

  return (
    <StoreContext.Provider value={{ course, user }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
