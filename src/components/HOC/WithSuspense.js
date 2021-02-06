import React, {Suspense} from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './WithSuspense.module.css'

const WithSuspense = (Component) => {
  const SuspenseComponent = props => {
    return (
      <Suspense fallback={<div className={styles.preloader}><Preloader/></div>}>
        <Component {...props}/>
      </Suspense>
    );
  };
  return SuspenseComponent;
};

export default WithSuspense;