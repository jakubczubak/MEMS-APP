import React, { useState, useEffect } from "react";
import styles from "./MemeList.module.css";
import { Mem } from "./Mem";

export function MemeList(props) {
  const [list, setList] = useState([]);
  const [hotList, setHotList] = useState([]);
  const [reguralList, setReguralList] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await (await fetch("http://localhost:4000/mems")).json();
      setList(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <main>
      {list &&
        list.map((mem) => {
          return <Mem mem={mem} key={mem.id} />;
        })}
    </main>
  );
}
