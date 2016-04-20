import { updateCard, deleteCard } from '../actions';
import { connect } from 'react-redux'
import CardModal from './CardModal';

const mapStateToProps = ({ cards }, { params: { cardId }}) => ({
  card: cards.filter(card => card.id === parseInt(cardId, 10))[0]
});

const mapDispatchToProps = dispatch => ({
  onSave:   card   => dispatch(updateCard(card)),
  onDelete: cardId => dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
