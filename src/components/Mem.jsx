import styles from "../components/Mem.module.css";
import { useState } from "react";

export function Mem(props) {
  const [upVotes, setUpVotes] = useState(props.mem.upvotes);
  const [downVotes, setDownVotes] = useState(props.mem.downvotes);

  function incrementUpVotes() {
    setUpVotes(upVotes + 1);
    updateMemVotes(props.mem.id);
  }

  function incrementDownVotes() {
    setDownVotes(downVotes + 1);
    updateMemVotes(props.mem.id);
  }

  

  async function updateMemVotes(id) {
    const mem = await (await fetch("http://localhost:4000/mems/" + id)).json();

    mem.upvotes += 1;
    mem.downvotes += 1;

    fetch("http://localhost:4000/mems/" + id, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={styles.mem_wrapper}>
      <div className={styles.mem}>
        <h3 className={styles.mem_title}>{props.mem.title}</h3>
        <img
          className={styles.mem_img}
          src={require("../assets/" + props.mem.img)}
          alt="mem"
        />
      </div>
      <div className={styles.mem_btn_wrapper}>
        <button className={styles.mem_btn} onClick={incrementUpVotes}>
          👍 {upVotes}
        </button>
        <button className={styles.mem_btn} onClick={incrementDownVotes}>
          👎 {downVotes}
        </button>
      </div>
    </div>
  );
}
