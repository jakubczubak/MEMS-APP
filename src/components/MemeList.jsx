import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import styles from "./MemeList.module.css";
import { Mem } from "./Mem";
import { useSelector, useDispatch } from "react-redux";
import { setRoute } from "../actions/memAction";

export function MemeList(props) {
  const [list, setList] = useState({ regural: [], hot: [] });
  const counter = useSelector((state) => state.counter);
  const currentRoute = useSelector((state) => state.route);

  const dispatch = useDispatch();

  dispatch(setRoute(props.category));

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
  }, [counter]);

  return (
    <main>
      {currentRoute === "hot"
        ? list.hot.map((mem) => {
            return <Mem mem={mem} key={mem.id} />;
          })
        : list.regural.map((mem) => {
            return <Mem mem={mem} key={mem.id} />;
          })}
    </main>
  );
}
