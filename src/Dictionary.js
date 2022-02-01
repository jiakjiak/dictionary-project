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
        <div className="col"></div>
        <div className="col-4">
          <form onSubmit={search}>
            <FontAwesomeIcon icon={faSearch} className="text-white" />
            <input
              className="form-control rounded-pill py-2 text-center FontAwesomeIcon
              icon={faSearch}"
              type="search"
              onChange={handleKeywordChange}
              autoFocus="on"
              placeholder="search for a word"
            />
          </form>
        </div>
        <div className="col"></div>
      </div>

      <Results results={results} />
    </div>
  );
}
