import React from 'react';
import styles from './Pages.module.css';

const Pages = (props) => {
  
  let pagesList;
  if (props.pagesList <= 10) {
    pagesList = props.pagesList;
  } else if (props.selectedPage < 5) {
    pagesList = props.pagesList.slice(0, 9);
  } else if (props.selectedPage > props.pagesList.length - 5) {
    pagesList = props.pagesList.slice(props.pagesList.length - 9, props.pagesList.length);
  } else {
    pagesList = props.pagesList.slice(props.selectedPage - 5, props.selectedPage + 4);
  }
  
  const selectPage = (page) => {
    setTimeout(() => {
      props.getUsers(page, props.usersOnOnePage);
    }, 1);
    props.selectPage(page);
  };
  
  pagesList = pagesList.map((page,index) => {
    return <span onClick={() => selectPage(page)} key={index}
                 className={page === props.selectedPage ? `${styles.page} ${styles.selected}` : styles.page}>
      {page}</span>;
  });
  
  return (
    <div className={styles.list}>
      {props.selectedPage > 5 && <span className={styles.page} onClick={()=>selectPage(1)}>first page</span>}
      {pagesList}
      {props.selectedPage < props.pagesList.length-4 && <span className={styles.page}
        onClick={()=> selectPage(props.pagesList.length)}>last page</span>}
    </div>
  );
};

export default Pages;
