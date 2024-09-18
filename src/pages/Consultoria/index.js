import Header from "../../Components/Header";
import styles from "./Consultoria.module.css"


function Consultoria() {
    return (
        <div>
            <Header/>
            <img src="./images/Logo.png" alt="Logo" />
            <div className={styles.introducao}>
                <h1>Bem Vindo!</h1>
                <h2> Consultoria </h2>
            </div>
                
        </div>
    )
  }
  
  export default Consultoria;