const SearchForm = () => {
  return (
    <>
      <div className="searchForm container px-3 py-2">
        <div className="form-group d-flex justify-content-between align-items-stretch rounded rounded-pill p-1">
          <button className="btn btn-sm btn-default pe-0 bg-transparent d-flex align-items-center justify-content-center border-0 shadow-0">
            <span className="bi-search fs-5"></span>
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className="form-control fw-semibold lead bg-transparent shadow-none border-0"
          />
        </div>
      </div>
    </>
  );
};

export default SearchForm;
