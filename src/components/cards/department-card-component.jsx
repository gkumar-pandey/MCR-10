/* eslint-disable react/prop-types */
import style from "./card.module.css";

export const DepartmentCard = ({ text }) => {
  return (
    <div className={style.card}>
      <div className={style.card_wrapper}>
        <p className=" text-lg font-medium ">{text}</p>
      </div>
    </div>
  );
};
