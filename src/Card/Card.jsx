import styles from './Card.module.css'
function Card(){
    return(
        <div className={styles.card}>
            <img src="https://imgs.search.brave.com/TmGee_R1rGbma-1_OLqzYx34ggaZgnUWKDa-zTbueZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNDEzMS80MTMx/NzA4LnBuZw"></img>
            <h4>image</h4>
            <p>deatils which are related to card!!</p>
        </div>
    )
}
export default Card