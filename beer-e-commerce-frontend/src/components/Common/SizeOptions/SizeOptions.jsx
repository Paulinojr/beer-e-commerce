import {useState} from 'react';
import styles from "./SizeOptions.module.scss"

const SizeOptions = ({options}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className={styles.sizeOptionsContainer}>
      {options.map((option, index) => (
        <label
          key={index}
          className={`size-option ${
            selectedOption === option.name ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="size"
            value={option.name}
            className={styles.sizeOptionsHiddenInput}
            onChange={() => handleOptionChange(option.name)}
          />
          <span
            className={styles.sizeOptionLabel}
            style={{
              borderColor: selectedOption === option.name && "#FF9F24",
              color: selectedOption === option.name && "#FF9F24",
            }}
          >
            {option.name}
          </span>
        </label>
      ))}
    </div>
  );
}

export default SizeOptions;