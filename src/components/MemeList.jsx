import React, { useState, useEffect } from "react";
import styles from "./MemeList.module.css";
import { Mem } from "./Mem";

export function MemeList(props) {
  const [list, setList] = useState({ regural: [], hot: [] });

  useEffect(() => {
    const fetchData = async () => {

      const data = await (await fetch("http://localhost:4000/mems")).json();

      const memeHotList = data.filter((data) => {
        return data.upvotes - data.downvotes > 5;
      });

      const memeReguralList = data.filter((data) => {
        return data.upvotes - data.downvotes <= 5;
      });
      setList({ regural: memeReguralList, hot: memeHotList });
    };

    fetchData().catch(console.error);

  }, []);

  if (props.category === "hot") {
    return (
      <main>
        {list.hot.map((mem) => {
          return <Mem mem={mem} key={mem.id} />;
        })}
      </main>
    );
  } else {
    return (
      <main>
        {list.regural.map((mem) => {
          return <Mem mem={mem} key={mem.id} />;
        })}
      </main>
    );
  }
}
