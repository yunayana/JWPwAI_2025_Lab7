import classes from "./main-header-background.module.css";

export default function MainHeaderBackground({ children }) {
  return <div className={classes.background}>{children}</div>;
}
