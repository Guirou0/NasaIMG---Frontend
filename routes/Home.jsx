import { useEffect, useContext } from "react"

import { MenuContext } from "../context/MenuContext"

import styles from "../modulescss/Home.module.css"

const Home = () => {
    const {setMenucolor} = useContext(MenuContext);

    useEffect(() =>{setMenucolor("#5F9EA0, #B0E0E6 60%")}, [])

    return(
        <div className={styles.home}>
            <h1>Bem vindo ao NasaIMG</h1>
            <p>Este é um projeto que foi feito com fins de mero aprendizado e não possui nenhuma relação oficial com a Nasa.
               A ferramenta principal utilizada para esse projeto foi a API da Nasa, disponível em <a href="https://api.nasa.gov/">api.nasa.gov</a>,
               que fornece acesso à uma grande variedade de dados da empresa.
            </p>
            <p>
                Aqui, você pode escolher pesquisar por fotos relacionadas a qualquer assunto astronômico de seu interesse clicando no ícone com a lupa,
                ver as fotos mais recentes tiradas pelos rovers em Marte clicando no ícone com o robô, ou ainda conferir qual
                a foto astronômica do dia (APD) clicando no ícone com o astronauta.
            </p>
            <p>
                O projeto ainda está em desenvolvimento, então peço sua paciência para qualquer bug ou erro que você possa
                presenciar.
            </p>
            <img className={styles.logo} src="./public/rocket_launch_24dp_FILL0_wght400_GRAD0_opsz24.png" />
        </div>
        
    )
}

export default Home