import  { useState } from 'react';
import styles from './ExpandableText.module.scss';

const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () =>{
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <p className={isExpanded ? styles.textContainerExpanded: styles.textContainer}>
        Selling imported beer in the US with nearly 60 million cases in annual
        sales, growing more than 15 million cases over the past 2 years. Lorem Ipsum
        Dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, quos.
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