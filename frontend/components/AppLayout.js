import styles from "../styles/layout.module.css";

const Layout = ({title, children}) => {
  return (
    <>
      <div className={styles.layout + " d-flex justify-content-center align-items-center"}>
        <div className={styles.section + " d-flex justify-content-center align-items-center flex-column"}>
          <h1 className={styles.title + " m-4"}>{title}</h1>
          <div id="buttons" className="d-flex flex-row">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
