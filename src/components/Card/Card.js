import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string,
    }
    render() {
      return (
        <section className={styles.component}>
          <a>{this.props.title}</a>
        </section>
      );
    }
}

export default Card;