import style from "./PhotoCard.module.css";
import Button from "./Button";

function PhotoCard({title, image, content, tags}) {
    const tagsArray = tags.map((curTag) => <span className={curTag}>{curTag}</span>)

    return (
        <div className={style.card}>
            <div>
                <img src={image} alt="" />
            </div>
            <div className={style.cardContent}>
                <h4>{title}</h4>
                <p>{content}</p>
                {tagsArray}
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}

export default PhotoCard;