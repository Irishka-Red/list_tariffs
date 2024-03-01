import Card from "../card/Card";
import styles from './cardList.module.css'
const data =       [
    {
        title: "Безлимитный 300",
        description: "300",
        volume: "до 10Мбит/сек",
        addition: "Объем включенного трафика не ограничен",
        color: 'blue',
        size: 'size1'
    },
    {
        title: "Безлимитный 450",
        description: "450",
        volume: "до 50Мбит/сек",
        addition: "Объем включенного трафика не ограничен",
        color: 'green',
        size: 'size1'
    },
    {
        title: "Безлимитный 550",
        description: "550",
        volume: "до 100Мбит/сек",
        addition: "Объем включенного трафика не ограничен",
        color: 'red',
        size: 'size2'
    },
    {
        title: "Безлимитный 1000",
        description: "1000",
        volume: "до 200Мбит/сек",
        addition: "Объем включенного трафика не ограничен",
        color: 'grey',
        size: 'size1'
    }
]
function CardList(){
    return(
        <div className={`${styles.cardlist}`}>
            {
                 data.map((item) => <Card title = {item.title} description={item.description} volume={item.volume} addition={item.addition} color={item.color} size={item.size}/>)
            }
        </div>
    );
}
export default CardList;