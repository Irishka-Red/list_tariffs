import React from 'react'
import styles from './card.module.css'
import {useState} from 'react'

function Card(props){
    const color = props.color;
    const size = props.size;
    console.log(color);
    const [clicked, setClicked] = useState(false)
    const handleClickedState = () =>{
        setClicked(!clicked)
    };
    return(
        <div onClick = {handleClickedState} 
        className={clicked? `${styles.card} ${styles[size]} ${styles.increasecard}`: `${styles.card} ${styles[size]}` }>
            <div className={`${styles.title} ${styles[color]}`}>
            <h2 className="card-title">{props.title}</h2>
            </div>
            <div className={`${styles.description} ${styles[color]}`}>
            <p className={`${styles.money}`}>руб</p>
            <p className={`${styles.text1}`}>{props.description}</p>
            <p className={`${styles.text1}`}>/мес</p>
            </div>
            <div className={`${styles.footer}`}>
            <p className="card-text2">{props.volume}</p>
            <p className="card-text3">{props.addition}</p>
            </div>
        </div>
    )
}
export default Card;