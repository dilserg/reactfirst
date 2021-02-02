import React from 'react';
import styles from './Info.module.css';

import Description from './Description/Description';


class Info extends React.Component {
  
  render() {
    return (
      <div className={styles.info}>
        <div className={styles.name}>
          {this.props.name} {this.props.surname}
        </div>
        {this.props.status()}
        <Description university={this.props.university} city={this.props.city} age={this.props.age}/>
      </div>
    );
  }
}

export default Info;