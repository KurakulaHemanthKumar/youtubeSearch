import React from "react";

class Search extends React.Component {
  state = { searchValue: "" };
  onChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchValue);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.searchValue}
              onChange={this.onChange}
              placeholder="Search for a video.."
            />
          </div>
        </form>
      </>
    );
  }
}

export default Search;