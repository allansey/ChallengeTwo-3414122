class SearchSuggestionSystem {
  constructor(products) {
    // Sort the products lexicographically during initialization
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      // Filter products that start with the current prefix
      let matches = this.products.filter(product => product.startsWith(prefix));
      // Add up to the first 3 matches
      result.push(matches.slice(0, 3));
    }

    return result;
  }
}
