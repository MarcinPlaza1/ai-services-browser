// SearchBar.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Container, Input, SuggestionsContainer, Suggestion } from './SearchBarStyles';

const SearchBar = ({ setSearchTerm, allServices }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <Suggestion>{suggestion.name}</Suggestion>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
    setSearchTerm(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(
      allServices.filter((service) =>
        service.name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Search for AI services...',
    value,
    onChange,
  };

  return (
    <Container>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={(inputProps) => <Input {...inputProps} />}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <SuggestionsContainer {...containerProps}>{children}</SuggestionsContainer>
        )}
      />
    </Container>
  );
};

export default SearchBar;
