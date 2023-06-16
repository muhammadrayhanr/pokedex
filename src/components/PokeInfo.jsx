import { PropTypes } from 'prop-types';

const PokeInfo = ({ data }) => {
  return (
    <>
      {!data ? null : (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="my-8">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} className="h-40" alt="Pokemon Image" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-semibold text-xl">
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="card-actions justify-center">
              {data.types.map((poke, index) => {
                return (
                  <>
                    <div key={index} className="badge badge-outline">
                      {poke.type.name.charAt(0).toUpperCase() + poke.type.name.slice(1)}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="py-1">
              <h2 className="font-semibold text-base">Stats</h2>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {data.stats.map((poke, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div>
                                <div className="font-bold">{poke.stat.name.toUpperCase()}</div>
                              </div>
                            </div>
                          </td>
                          <td>{poke.base_stat}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PokeInfo.propTypes = {
  data: PropTypes.object,
};

export default PokeInfo;
