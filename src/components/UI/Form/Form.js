import classes from "./Form.module.css";
import react from "react";

function Form(props) {
  return (
    <form className={classes.form}>
      <div className={classes.form__header}>
        <h1>{props.header}</h1>
      </div>
      {props.fields.map((field) => {
        return (
          <div className={classes.form__elements}>
            <input placeholder={field} type="text" required="required"/>
          </div>
        );
      })}
    </form>
  );
}

export default Form;
