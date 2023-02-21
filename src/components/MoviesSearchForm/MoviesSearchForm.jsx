import { useState } from 'react';
import { FormStyled, InputStyled, SearchBtn } from './MoviesSearchForm.styled';
import PropTypes from 'prop-types';

const MoviesSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlInput = ({ target }) => {
    setSearch(target.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    onSubmit({ search });
    setSearch('');
  };

  return (
    <>
      <FormStyled onSubmit={handlSubmit}>
        <label>
          <InputStyled
            value={search}
            name="search"
            type="text"
            onChange={handlInput}
            placeholder="Enter movie name"
            required
          />
        </label>
        <SearchBtn type="submit">Search</SearchBtn>
      </FormStyled>
    </>
  );
};

export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
