import { useState } from "react";
import { toast } from "react-toastify";

export default function SearchFilm() {
  const [value, setValue] = useState("");

  const handleSearchFilm = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const formSubmit = (query) => {
    if (query !== value) {
      setValue(query);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return toast.error("Enter correct request!");
    }
    formSubmit(value);
    formReset();
  };

  const formReset = () => {
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={value}
          autoFocus
          placeholder="Search movie"
          onChange={handleSearchFilm}
        />
      </form>
    </div>
  );
}
