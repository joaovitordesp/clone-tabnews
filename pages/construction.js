import React from "react";
import styles from "./Construction.module.css";

const ConstructionPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Estamos em Construção!</h1>
      <p className={styles.message}>
        Desculpe pela inconveniência. Estamos trabalhando para trazer algo
        incrível para você.
      </p>
      <div className={styles.loader}></div>
      <p className={styles.footer}>Volte em breve!</p>
    </div>
  );
};

export default ConstructionPage;
