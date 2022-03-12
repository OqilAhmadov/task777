import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";

const TeachersPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(URL).then((res: any) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
        <Header />
      {data.map((item, index) => {
        return <div key={index}>{item.id}</div>;
      })}
    </div>
  );
};

export default TeachersPage;
