"use client"
import Card from '@/src/components/Card'
import TituloPrincipal from '@/src/components/TituloPrincipal'
import { BattleContext } from '@/src/context/Battle'
import { HeroesContext } from '@/src/context/Heroes'
import { Box, Modal, Divider, CircularProgress } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Menu from '../src/components/Menu/index'
import styles from './page.module.css'
import NavigationIcon from '@mui/icons-material/Navigation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: '#130D25',
  border: 'none',
  boxShadow: 24,
  p: 4
};

export default function Home() {
 
  const [somaHeroiUm, setSomaHeroiUm] = useState([])
  const [somaHeroiDois, setSomaHeroiDois] = useState([])
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  const { cardData, setCardData } = useContext(BattleContext);
  const { heroes } = useContext(HeroesContext);

  useEffect(() => {
    if(cardData.length > 1) {
      calcularGanhador()
      setOpen(true)
    }
  }, [cardData])

  useEffect(() => {
    window.addEventListener('scroll', handlePaginaScroll);
  }, []);

  function calcularGanhador() {
    const heroiUmStats = cardData[0]?.powerstats;
    const heroiDoisStats = cardData[1]?.powerstats;

    if (heroiUmStats && heroiDoisStats) {
     setSomaHeroiUm(Object.values(heroiUmStats).reduce(
        (total, valor) => total + parseInt(valor), 0
      ))

      setSomaHeroiDois(Object.values(heroiDoisStats).reduce(
        (total, valor) => total + parseInt(valor), 0
      ))

    }
  }

  function handleClose() {
    setOpen(false)
    setCardData([])
  }

  function subirProTopo() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  function handlePaginaScroll() {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <main>
        <Menu />
        <TituloPrincipal />
        {showButton && (
        <button onClick={subirProTopo} className={styles.botaoSubirProTopo}>
          <NavigationIcon />
        </button>
        )}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <div>
              <p  className={styles.tituloModal}> Vencedor: <span className={styles.tituloVencedor}>  { somaHeroiUm > somaHeroiDois ? cardData[0]?.name :  cardData[1]?.name} </span>  </p>
          </div>
          <div className={styles.modal}>
            
            <div>
              <img src={cardData[0]?.images.lg} className={styles.imagemModal} />  
              <p className={styles.tituloModal}>{cardData[0]?.name}</p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {cardData[0]?.powerstats.intelligence}  </p>
                <p  className={styles.tituloModal}>Intelligence</p>
                <p  className={styles.tituloModal}> {cardData[1]?.powerstats.intelligence}  </p>
              </div> 
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {cardData[0]?.powerstats.strength}  </p>
                <p  className={styles.tituloModal}>Strength</p>
                <p  className={styles.tituloModal}> {cardData[1]?.powerstats.strength}  </p>
              </div> 
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {cardData[0]?.powerstats.speed}  </p>
                <p  className={styles.tituloModal}>Speed</p>
                <p  className={styles.tituloModal}> {cardData[1]?.powerstats.speed}  </p>
              </div> 
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {cardData[0]?.powerstats.durability}  </p>
                <p  className={styles.tituloModal}>Durability</p>
                <p  className={styles.tituloModal}> {cardData[1]?.powerstats.durability}  </p>
              </div> 
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {cardData[0]?.powerstats.power}  </p>
                <p  className={styles.tituloModal}>Power</p>
                <p  className={styles.tituloModal}> {cardData[1]?.powerstats.power}  </p>
              </div> 
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {cardData[0]?.powerstats.combat}  </p>
                <p  className={styles.tituloModal}>Combat</p>
                <p  className={styles.tituloModal}> {cardData[1]?.powerstats.combat}  </p>
              </div> 
              <Divider color='white' />
              <div className={styles.stat}>
                <p  className={styles.tituloModal}> {somaHeroiUm}  </p>
                <p  className={styles.tituloModal}></p>
                <p  className={styles.tituloModal}> {somaHeroiDois}  </p>
              </div>  
            </div>
            <div>
              <img src={cardData[1]?.images.lg} className={styles.imagemModal} />  
              <p className={styles.tituloModal}>{cardData[1]?.name}</p>
            </div>
          </div>
          
        </Box>
      </Modal>
        
        <section className={styles.secaoCards}>

          {
            heroes.length > 1
            ?
            ''
            :
            <CircularProgress />
          }

          {heroes.map((personagem) => (
              <Card key={personagem.id} personagem={personagem}/>
          ))}
        </section>


    </main>
  )
}

