import styles from "./MemeUpload.module.css";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import uploading from "../assets/uploading.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function MemeUpload() {
  const [memeURL, setMemeURL] = useState("");
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    saveMeme(data);
  };

  const validateURL = async (memeURL) => {
    const res = await fetch(memeURL, { method: "HEAD" });
    return res.headers.get("Content-Type").startsWith("image");
  };

  function saveMeme(data) {
    let meme = {
      title: data.memeTitle,
      upvotes: 0,
      downvotes: 0,
      imgURL: data.memeURL,
    };

    console.log(meme);
    fetch("http://localhost:4000/mems", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meme),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/regural");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={styles.meme_upload_container}>
      <div className={styles.meme_upload}>
        <Lottie
          className={styles.meme_animation}
          animationData={uploading}
          loop={true}
        />
        <form className={styles.meme_form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="memeTitle">Meme Title</label>
          <input
            placeholder="Meme Title"
            {...register("memeTitle", { required: true, maxLength: 20 })}
            id="memeTitle"
          />
          {errors.memeTitle && (
            <p className={styles.meme_error}>This field is required</p>
          )}

          <label htmlFor="memeURL">Meme URL</label>
          <input
            placeholder="Meme URL"
            {...register("memeURL", {
              required: true,
              onChange: (e) => {
                setMemeURL(e.target.value);
              },

              validate: validateURL,
            })}
            id="memeURL"
          />
          {errors.memeURL && (
            <p className={styles.meme_error}>Your image URL is incorrect</p>
          )}
          <button type="submit" className={styles.meme_upload_btn}>
            UPLOAD
          </button>
        </form>
      </div>
    </div>
  );
}
