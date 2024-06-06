import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { colorActions } from "../../../libs/redux/reducers/colorSlice";
import styles from './ColorPicker.module.css';
import RemoveAllButton from './RemoveAllButton/RemoveAllButton';

const ColorPicker = () => {
  const [colorValue, setColorValue] = useState<string>('#000000');
  const [message, setMessage] = useState<string>('');
  const { colorList } = useAppSelector(state => state.color);
  const { theme } = useAppSelector(state => state.theme);
  const appDispatch = useAppDispatch();
  const maxLength = 30;

  const handleChangeColorValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
  };

  const handleClickAddColor = () => {
    if (maxLength <= colorList.length) {
      setMessage(`색상은 ${maxLength}개 까지 선택할 수 있습니다`);
      return;
    }

    const isfindColor = colorList.some(({ code }) => {
      return code === colorValue;
    });

    if (isfindColor) {
      setMessage(`${colorValue}는 이미 선택한 색상입니다`);
      return;
    }

    // color template
    const colorTemplate = {
      code: colorValue,
      alias: colorValue,
    };

    appDispatch( colorActions.addColor(colorTemplate) );
    setMessage('');
  };

  return (
    <div className={styles.color_picker_area}>
      <div className={styles.button_group}>
        <input
          type='color'
          title='색상을 선택하세요'
          value={colorValue}
          onChange={handleChangeColorValue}
          className={`${styles.color_picker} ${theme === 'dark' ? 'dark_bg_02' : ''}`}
        />
        <button
          type='button'
          title='선택한 색상이 등록됩니다'
          onClick={handleClickAddColor}
          className={`${styles.pick_button} ${theme === 'dark' ? 'dark_bg_02' : ''}`}
        >
          색상 등록
        </button>
        <RemoveAllButton />
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ColorPicker;