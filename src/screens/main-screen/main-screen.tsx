import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { Film } from '../../types/film';
import { FilmList } from '../../components/film-list/film-list';
import { GenreList } from '../../components/genre-list/genre-list';
import {useAppSelector} from '../../components/hooks/hooks.ts';
import {ShowMore} from '../../components/show-more/show-more.tsx';

export type MainScreenProps = {
  promoFilm: Film;
}

export function MainScreen({ promoFilm }: MainScreenProps): JSX.Element {
  const filmsGenre = useAppSelector((state) => state.filmList);
  const filmCardCount = useAppSelector((state) => state.filmCardCount);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.imagePath} alt={promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImagePath} alt={`${promoFilm.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>

          <FilmList films={filmsGenre.slice(0, filmCardCount)} />

          {filmsGenre.length > filmCardCount ? <ShowMore/> : ''}
        </section>

        <Footer />

      </div>
    </>
  );
}
