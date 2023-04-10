import { useState } from "react";
import validation from "../validation";
import style from "../Form/Form.module.css";
import gif from "../../assets/mygif.gif";


export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={handleSubmit} className={style.body}>
      {/* <img src={backgroundphoto} alt="fondo" className={style.backgroundphoto}/>  */}
      <div className={style.container1}>
        <img src={gif} alt="iniciogif" className={style.migif} />

        <div className={style.container2}>
          <label className={style.email}>Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={userData.email}
            onChange={handleChange}
            className={style.inputs}
          />
          {errors.email && <p className={style.errormessage}>{errors.email}</p>}

          <label htmlFor="" className={style.password}>
            Password:{" "}
          </label>
          <input
            name="password"
            type="password"
            placeholder="coloque sua senha"
            value={userData.password}
            onChange={handleChange}
            className={style.inputs}
          />
          {errors.password && (
            <p className={style.errormessage}>{errors.password}</p>
          )}
        </div>
        <div className={style.passwordcontainer}></div>
        <button type="submit" className={style.button}>Enter</button>
      </div>
      
    </form>
  );
}
