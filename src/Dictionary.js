import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryRequest(request) {
    setResults(request.data[0]);
  }

  function handlePexelsRequest(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryRequest);

    const pexelsApiKey =
      "563492ad6f9170000100000149488c48316f4f92b2d9ee59f1c2a28d";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsRequest);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
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
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Results results={results} />
        </div>
      </div>
      <Photos photos={photos} />
    </div>
  );
}
