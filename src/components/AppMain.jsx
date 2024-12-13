import style from "./AppMain.module.css";
import PhotoCard from "./PhotoCard";

function AppMain() {
    return (
        <main>
            <div className={style.container}>
                <PhotoCard />
            </div>
        </main>
    )
}

export default AppMain;