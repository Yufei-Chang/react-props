import style from "./PhotoCard.module.css";
import Button from "./Button";

function PhotoCard() {
    return (
        <div className={style.card}>
            <div>
                <img src="/images/Ace.jpg" alt="" />
            </div>
            <div className={style.cardContent}>
                <h4>Titolo del Post</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quas accusantium nobis nam, eum voluptatum repellendus, amet quod atque quidem eaque modi possimus hic earum, sapiente harum! Veritatis, dolorem unde?</p>
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}

export default PhotoCard;