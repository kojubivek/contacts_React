const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 mb-5">
        <input
          className={`search-box form-control  ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  </div>
);

export default SearchBox;
