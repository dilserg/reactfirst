import React from 'react';
import styles from './Pages.module.css';

const Pages = (props) => {
  let pagesList = props.pagesList
  if (props.pagesList <= 10) {
    pagesList = props.pagesList;
  } else if (props.selectedPage < 5) {
    pagesList = props.pagesList.slice(0, 10);
  } else if (props.selectedPage > props.pagesList.length - 5) {
    pagesList = props.pagesList.slice(props.pagesList.length - 10, props.pagesList.length);
  } else {
    pagesList = props.pagesList.slice(props.selectedPage - 5, props.selectedPage + 5);
  }
  
  
  pagesList = pagesList.map((page) => {
    return <span className={styles.page}>{page}</span>;
  });
  
  
  return (
    <div className={styles.list}>
      {pagesList}
    </div>
  );
};

export default Pages;