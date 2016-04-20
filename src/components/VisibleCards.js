import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';

const matches = (filter, card) =>
  fuzzysearch(filter, card.front) || 
  fuzzysearch(filter, card.back);

const mapStateToProps = ({ cards, cardFilter }, { params: { deckId } }) => ({
  cards: cards.filter(c => c.deckId === deckId && matches(cardFilter, c))
});

const Cards = ({ cards, children }) => {
  return (<div className='main'> 
    {cards.map(card => <Card card={card} key={card.id} />)}
    {children}
  </div>);
};
export default connect(mapStateToProps)(Cards);
