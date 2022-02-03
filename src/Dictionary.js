import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleRequest(request) {
    setResults(request.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleRequest);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={search}>
            <div className="input-group">
              <span className="input-group-text bg-white" id="search-icon">
                <FontAwesomeIcon icon={faSearch} className="text-blue" />
              </span>
              <input
                className="form-control py-2 searchBar"
                type="search"
                onChange={handleKeywordChange}
                placeholder="search for a word"
                aria-describedby="search-icon"
              />
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <Results results={results} />
      </div>
    </div>
  );
}
