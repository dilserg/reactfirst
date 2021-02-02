import React from 'react';
import styles from './Description.module.css';
import FullInfo from './FullInfo';

class Description extends React.Component{
  state={
    isFullInfo:false,
  }

  showFull = () =>{
    this.setState({
      isFullInfo: true,
      })
  }
  hideFull = () =>{
    this.setState({
      isFullInfo: false,
    })
  }
  
  button=()=> {
    if (this.state.isFullInfo){
      return <>
        <button onClick={this.hideFull} className={styles.button}>Hide full information</button>
        <FullInfo />
        </>
    }
    else{
      return <button onClick={this.showFull} className={styles.button}>Show full information</button>
    }
  }
  
  
  render() {
    return (
      <div className={styles.description}>
        <p className={styles.item}>
          <span className={styles.dim}>Age:</span>
          <span className={styles.info}>{this.props.age}</span>
        </p>
        <p className={styles.item}>
          <span className={styles.dim}>City:</span>
          <span className={styles.info}>{this.props.city}</span>
        </p>
        <p className={styles.item}>
          <span className={styles.dim}>University:</span>
          <span className={styles.info}>{this.props.university}</span>
        </p>
        <div>
          {this.button()}
        </div>
      </div>
    );
  }
};

export default Description;