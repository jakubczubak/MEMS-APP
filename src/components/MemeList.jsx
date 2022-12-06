import React, { useState, useEffect } from "react";
import styles from "./MemeList.module.css";
import { Mem } from "./Mem";

export function MemeList(props) {
  const [list, setList] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const data = await (await fetch("http://localhost:4000/mems")).json();
      setList(data);
    };
    fetchData().catch(console.error);
  });

  const memeHotList = list.filter((data) => {
  
      return data.upvotes - data.downvotes > 5;
  
  });

  if(props.category === 'hot'){

    return (
      <main>
        {
          memeHotList.map((mem) => {
            return <Mem mem={mem} key={mem.id} />;
          })}
      </main>
    );

  }else{

    return (
      <main>
        {
          list.map((mem) => {
            return <Mem mem={mem} key={mem.id} />;
          })}
      </main>
    );

  }


}
