import React from 'react';
import Container from '../Container/Container';
import styles from './SearchResults.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import {searchContent} from '../../data/dataStore';




class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const { cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>{searchContent.title}<span className={styles.icon}><Icon name={searchContent.icon} /></span></h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))};
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;