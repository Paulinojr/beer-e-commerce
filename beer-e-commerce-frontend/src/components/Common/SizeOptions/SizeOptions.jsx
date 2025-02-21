import {useState, useEffect} from 'react';
import styles from "./SizeOptions.module.scss"
import { useProductContext } from "@/hooks/useProductContext";

const SizeOptions = ({options}) => {
  const {fetchStockPrice, stockPrice, setSelectedProduct} = useProductContext();
  const [selectedOption, setSelectedOption] = useState();


  const handleOptionChange = async (option) => {
    setSelectedOption(option);
    await fetchStockPrice(option);

    setSelectedProduct({
      ...stockPrice,
      sku: option
    })
  }

  useEffect(() => {
    setSelectedOption(options[0]?.code);
    handleOptionChange(options[0]?.code);
  }, [options])

  return (
    <div className={styles.sizeOptionsContainer}>
      {options?.map((option, index) => (
        <label
          key={index}
          className={`size-option ${
            selectedOption === option.code ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="size"
            value={option.code}
            className={styles.sizeOptionsHiddenInput}
            onChange={() => handleOptionChange(option.code)}
          />
          <span
            className={styles.sizeOptionLabel}
            style={{
              borderColor: selectedOption === option.code && "#FF9F24",
              color: selectedOption === option.code && "#FF9F24",
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