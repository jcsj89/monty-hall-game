"use client";
import Porta from "@/components/Porta";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import PortaModel from "@/model/porta";
import styles from "@/styles/Jogo.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Jogo = () => {
  const params = useParams();

  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const portas = +params.portas[0];
    const comPresente = +params.portas[1];
    
    setPortas(criarPortas(portas, comPresente));
  }, [params?.portas]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <main className={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href={"/"}>
          <button>Voltar</button>
        </Link>
      </div>
    </main>
  );
};

export default Jogo;
