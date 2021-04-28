import React from 'react';
import styles from './Card.scss';
import { listData } from '../../data/dataStore';


class Card extends React.Component {
   
    render() {
        return (
            <section className={styles.component}>
                <a>{this.props.title}</a>
            </section>
    )
  }
}

export default Card;