import { PropTypes } from 'prop-types';

const Card = ({ pokemonData, loadingStatus, infoPokemon }) => {
  return (
    <>
      {loadingStatus ? (
        <span className="loading mx-auto loading-ring loading-lg"></span>
      ) : (
        pokemonData.map((item) => {
          return (
            <div key={item.id} onClick={() => infoPokemon(item)} className="card card-side bg-base-100 my-4 shadow-xl">
              <div className="card-body">
                <h1 className="card-title">{item.id}</h1>
              </div>
              <figure>
                <img src={item.sprites.front_default} alt="Pokemon Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

Card.propTypes = {
  pokemonData: PropTypes.array,
  loadingStatus: PropTypes.bool,
  infoPokemon: PropTypes.func,
};

export default Card;
