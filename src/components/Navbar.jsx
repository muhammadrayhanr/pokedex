const Navbar = () => {
  return (
    <div className="drawer relative">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-yellow-300 fixed top-0 left-0 right-0 z-10">
        {/* Navbar */}
        <div className="navbar container mx-auto sticky top-0">
          <div className="mx-auto">
            <a className="btn btn-ghost normal-case text-3xl font-bold font-serif">PokeDex</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
