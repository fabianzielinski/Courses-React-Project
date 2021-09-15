interface userType {
  login: string;
  password: string;
}

interface courseType {
  authors: string[];
  id: number;
  img: string;
  price: number;
  title: string;
}

interface coursesContextData {
  users: userType[];
  courses: courseType[];
}
