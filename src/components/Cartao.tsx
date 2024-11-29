import styles from "@/styles/Cartao.module.css";

interface CartaoProps {
  bgcolor?: string;
  children?: any;
}

const Cartao = (props: CartaoProps) => {
  return (
    <div
      className={styles.cartao}
      style={{ backgroundColor: props.bgcolor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
};

export default Cartao;
