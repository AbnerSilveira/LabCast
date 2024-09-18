import Header from "../../Components/Header";
import styles from "./Home.module.css"


function Home() {
    return (
        <div>
            <Header/>
            <img src="./images/Logo.png" alt="Logo" />
            <div className={styles.introducao}>
                <h1>Bem Vindo!</h1>
                <h2> Este é o LabCast um programa para configuração de suas telas ao redor de seu laboratório </h2>
            </div>
                
        </div>
    )
  }
  
  export default Home;