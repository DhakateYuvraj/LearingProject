import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import isEmpty from 'lodash/isEmpty';

const CustomSelect = (props) => {
  const { label = '', defaultValueText = '', options, onFilterChange = () => {}, filterLabel = '' } = props;
  const [value, setValue] = useState([]);

  const showOnlyCountOfMultiSelectedItems = false;

  const onSelectChange = (value, actionMeta) => {
    console.log(value, actionMeta);
    const updatedValue = value;
    updateStateOnSelect(updatedValue);
  };

  const updateStateOnSelect = (value) => {
    setValue(value);
    onFilterChange({ by: filterLabel, value });
  };

  const defaultText = useMemo(() => {
    let text = defaultValueText;
    console.log('value', value);
    if (!isEmpty(value)) {
      if (value.length > 1) {
        text = `${value.length} Selected`;
      } else {
        text = value[0].label;
      }
    }
    return text;
  }, [value]);

  return (
    <Select
      className={`custom-select ${!isEmpty(value) ? 'dark-placeholder' : ''}`}
      options={options}
      isMulti
      isClearable
      controlShouldRenderValue={false}
      closeMenuOnSelect={false}
      placeholder={defaultText}
      onChange={onSelectChange}
      hideSelectedOptions={false}
    />
  );
};

export default CustomSelect;
