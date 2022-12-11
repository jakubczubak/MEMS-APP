import styles from "./MemeUpload.module.css";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import uploading from "../assets/uploading.json";
import { useState } from "react";

export function MemeUpload() {
  const [memeURL, setMemeURL] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const validateURL = async (memeURL) => {
    const res = await fetch(memeURL, { method: "HEAD" });
    return res.headers.get("Content-Type").startsWith("image");
  };

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
