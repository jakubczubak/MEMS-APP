import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import styles from "./MemeList.module.css";
import { Mem } from "./Mem";
import { useSelector, useDispatch } from "react-redux";
import { setRoute, setClose } from "../actions/memAction";
import { Snackbar, Alert, Button } from "@mui/material";

export function MemeList(props) {
  const [list, setList] = useState({ regural: [], hot: [] });
  const counter = useSelector((state) => state.counter);
  const currentRoute = useSelector((state) => state.route);
  const open = useSelector((state) => state.open);

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

  function handleClose() {
    dispatch(setClose());
  }

  return (
    <main>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant="outlined"
          severity="info"
          color="info"
          sx={{ width: "100%" }}
        >
          <p className={styles.alert_info}>Successfully added new meme</p>
        </Alert>
      </Snackbar>
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
