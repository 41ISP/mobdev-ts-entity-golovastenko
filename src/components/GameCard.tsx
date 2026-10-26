import { API_URL } from "../api";
import type { IGame } from "../types";

interface IGameCard extends IGame {

}
export function GameCard({ title, rating, genre, releaseDate, price, description, cover }: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {cover && (<img
                    src={API_URL + cover.url}
                    alt={cover.alternativeText} />)}
                <span>{title}</span>
                {rating && (<b className="card__rating">{rating}</b>)}
            </div>

            <div className="card__body">
                <h3>{title}</h3>
                {genre || releaseDate && (<p className="card__meta">{genre} {releaseDate}</p>)}
                {description && (<p className="card__desc">
                    {description[0].children[0].text}
                </p>)}
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                {price && price !== 0 ? (<strong>{price}</strong>)
                    : (<strong className="free">Бесплатно</strong>)}
                {/* {price && price === 0 ? (<strong className="free">Бесплатно</strong>)
                    : (<strong>{price}</strong>)} */}
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
