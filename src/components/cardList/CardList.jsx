import Card from "../card/Card";
import styles from './cardList.module.css'
import data from './data'

function CardList(){
    
    return(
        <div className={`${styles.cardlist}`}>
            {
                 data.map((item, index) => <Card key={index} title = {item.title} description={item.description} volume={item.volume} addition={item.addition} color={item.color} size={item.size}/>)
            }
        </div>
    );
}
export default CardList;