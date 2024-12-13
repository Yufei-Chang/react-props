import style from "./AppMain.module.css";
import PhotoCard from "./PhotoCard";
import posts from "./posts";

function AppMain() {
    const postHTML = posts.map((curElem) => curElem.published && <PhotoCard title={curElem.title} image={curElem.image} content={curElem.content} tags={curElem.tags}/>);

    return (
        <main>
            <div className={style.container}>
                {postHTML}
            </div>
        </main>
    )
}

export default AppMain;