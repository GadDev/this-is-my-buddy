import PropTypes from "prop-types";
import React from "react";

const Provider = ({ provider }) => {
  const { title, account_number, sort_code, description } = provider;
  return (
    <article>
      <h2>Provider</h2>
      <hr></hr>
      <h3>{title}</h3>
      <span>
        {account_number} - {sort_code}
      </span>
      <p>{description}</p>
    </article>
  );
};

Provider.propTypes = {
  provider: PropTypes.shape({
    title: PropTypes.string,
    account_number: PropTypes.string,
    sort_code: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Provider;
