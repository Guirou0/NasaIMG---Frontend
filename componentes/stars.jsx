import styles from '../modulescss/stars.module.css'

const Stars = () => {

    const s = []

    for(let i = 0; i<25; i++){
        s.push([`${Math.floor(Math.random()*120) +1}px`, `calc(${Math.floor(Math.random()*80) +1}% + 70px)`, `${Math.floor(Math.random()*12)+1}s`, String(i)])
    }

    return (
        s.map((star) => (
        <div key={star[3]} className={styles.star} 
        style={{
           top: star[0],
           left: star[1],
           animationDuration: star[2]  
        }}>
        </div>
        )
        )
    )
}

export default Stars