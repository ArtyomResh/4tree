import React, { Component} from 'react';
import styles from './Author.styl';
import { Link } from 'react-router';

class Author extends Component {
  render() {
    return (
      <div className={styles.author}>
        <h1>Artyom Resh</h1>
        <Link to={'/'} className={styles.link}>Back to home</Link>
      </div>
    );
  }
}

export default Author;
