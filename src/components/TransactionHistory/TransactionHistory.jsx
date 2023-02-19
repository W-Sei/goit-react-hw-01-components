import React from 'react';
import PropTypes from 'prop-types';
import css from'./TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(items => (
        <tr key={items.id} className={css.row}>
          <td className={css.type_col}>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit']).isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};
