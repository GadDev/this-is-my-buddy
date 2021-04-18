import React from "react";

const Provider = (props) => {
  const { title, account_number, sort_code, description } = props;
  return (
    <article>
      <h2>Provider</h2>
      <h3>{title}</h3>
      <span>
        {account_number} - {sort_code}
      </span>
      <p>{description}</p>
    </article>
  );
};

export default Provider;
