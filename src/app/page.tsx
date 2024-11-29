"use client";
import Cartao from "@/components/Cartao";
import EntradaNumerica from "@/components/EntradaNumerica";
import styles from "@/styles/Formulario.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [presente, setPresente] = useState(1);

  return (
    <main className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            value={qtdePortas}
            text="Qtd Portas?"
            onChange={(novaQtdde) => setQtdePortas(novaQtdde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            value={presente}
            text="Qual a porta com presente?"
            onChange={(presente) => setPresente(presente)}
          />
        </Cartao>
        <Cartao bgcolor="green">
          <Link href={`/jogo/${qtdePortas}/${presente}`}>
            <h2>Jogar</h2>
          </Link>
        </Cartao>
      </div>
    </main>
  );
}
