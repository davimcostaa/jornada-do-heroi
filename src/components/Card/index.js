import { BattleContext } from "@/src/context/Battle";
import React, { useContext } from "react";
import styles from "./Card.module.css";

const Card = ({ personagem }) => {

const {  cardData, setCardData  } = useContext(BattleContext);

function adicionarCardPraBatalha(dadosPersonagens) {
  if (cardData.length <= 1) {
    setCardData((dadosJaSalvos) => [...dadosJaSalvos, dadosPersonagens])
  } 
  else {
    alert('Limite atingido')
  }
}

return (
    <div className={styles.card} key={personagem.id} onClick={() => adicionarCardPraBatalha(personagem)}>
      <div>
        <img src={personagem.images.lg} className={styles.imagem} alt={personagem.name}></img>

        <div className={styles.divDescricao}>
            <p>
                <span className={styles.descricao}> Name: </span>{personagem.name}
            </p>

            <div className={styles.infos}>

                <div>
                    <p className={styles.info}>
                        Strength:    
                    </p>
                    <p className={styles.apiInfo}>
                      {personagem.powerstats.strength}
                    </p>
                </div>

              <div>
              <p className={styles.info}>
                    Combat:    
              </p>
              <p className={styles.apiInfo}>
                  {personagem.powerstats.combat}
               </p>
            </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default Card;
