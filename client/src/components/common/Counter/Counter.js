import Button from '../Button/Button';
import styles from './Counter.module.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const Counter = ({ number, countProduct }) => {
  const [count, setCount] = useState(number || 1);

  useEffect(() => {
    countProduct(count);
  }, [count]);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className={styles.counter}>
      <Button onClick={handleDecrement} content={<FaMinus />} />
      <input value={count} className={styles.counter__input} readOnly />
      <Button onClick={() => setCount(count + 1)} content={<FaPlus />} />
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  countProduct: PropTypes.func,
};

export default Counter;
