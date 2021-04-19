import PropTypes from "prop-types";
import React from "react";

import { Wrapper } from "../App.styled";

const Provider = ({ provider }) => {
  const { title, account_number, sort_code, description } = provider;
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div>
        <p>{description}</p>
        <span>
          {account_number} - {sort_code}
        </span>
      </div>
    </Wrapper>
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
