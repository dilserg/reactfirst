import React, {Component} from 'react';
import Info from './Info';
import styles from './Info.module.css';

class InfoContainer extends Component {
  
  state = {
    editMode: false,
    statusText: this.props.status
  };
  
  componentDidMount() {
    let id = this.props.linkID || this.props.id || this.props.myID;
    this.props.getStatus(id);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        statusText: this.props.status
      });
    }
  }
  
  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
    this.props.setStatus(this.state.statusText);
  };
  
  updateStatusText = (e) => {
    this.setState({
      statusText: e.currentTarget.value
    });
  };
  
  status = () => {
    if (!this.props.linkID || this.props.myID == this.props.linkID) {
      if (this.state.editMode)
        return <input className={styles.input} autoFocus={true} onBlur={this.toggleEditMode}
                      value={this.state.statusText} onChange={this.updateStatusText}/>;
      else {
        if (this.state.statusText) {
          
          if (this.state.statusText.length < 75) {
            return <span onClick={this.toggleEditMode} className={`${styles.status}  ${styles.hover}`}>
              {this.state.statusText}</span>;
          } else {
            
            let statusTextSliced = this.state.statusText.slice(0, 75) + '...';
            return <span onClick={this.toggleEditMode}
                         className={`${styles.status} ${styles.hover}`}>{statusTextSliced}</span>;
          }
          
        } else
          return <span onClick={this.toggleEditMode} className={`${styles.status} ${styles.dim} ${styles.hover}`}>
            set status...</span>;
      }
    } else if (this.props.linkID) {
      if (this.state.statusText) {
        
        if (this.state.statusText.length < 75) {
          return <span className={styles.status}>{this.state.statusText}</span>;
        } else {
          let statusText = this.state.statusText.slice(0, 75) + '...';
          return <span className={styles.status}>{statusText}</span>;
        }
        
      } else
        return <span className={`${styles.status} ${styles.dim}`}>no status</span>;
    }
  };
  
  render() {
    return (
      <Info {...this.props} status={this.status}/>
    );
  }
}


export default InfoContainer;