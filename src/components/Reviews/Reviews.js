import React, { Component } from 'react';
import css from './Reviews.module.css';
import searchApi from '../../services/searchApi';

export default class Cast extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    searchApi
      .GetMovieReviews(this.props.id)
      .then(data => this.setState({ reviews: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;
    const isShowReviews = reviews.length > 0;

    return (
      <>
        {isShowReviews ? (
          <ul className={css.list}>
            {reviews.map(review => (
              <li className={css.listItem} key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
