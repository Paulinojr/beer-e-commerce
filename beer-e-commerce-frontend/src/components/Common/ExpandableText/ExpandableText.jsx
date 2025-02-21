import  { useState } from 'react';
import styles from './ExpandableText.module.scss';

const ExpandableText = ({text}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () =>{
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <p className={isExpanded ? styles.textContainerExpanded: styles.textContainer}>
        {text}
      </p>
      <span
        onClick={toggleExpand}
        className={styles.readMore}
      >
        {isExpanded ? "Read less" : "Read more"}
      </span>
    </>
  );
}

export default ExpandableText;