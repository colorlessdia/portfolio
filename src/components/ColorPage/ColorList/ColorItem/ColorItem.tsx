import React, { useEffect, useState } from 'react';
import type { ColorType } from '../../../../types';
import RemoveButton from './RemoveButton/RemoveButton';
import ModifyButton from './ModifyButton/ModifyButton';
import styles from './ColorItem.module.css';
import CopyColor from './CopyColor/CopyColor';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { colorActions } from '../../../../libs/redux/reducers/colorSlice';

// type: props
interface ColorItemProps {
  colorItem: ColorType;
}

const ColorItem = ({ colorItem }: ColorItemProps) => {
  const [colorName, setColorName] = useState<string>(colorItem.code);
  const [isModifyMode, setIsModifyMode] = useState<boolean>(false);
  const appDispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  const handleChangeColorName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(e.target.value);
  };

  const handleClickSetIsModifyMode = () => {
    setIsModifyMode(prev => !prev);
  };

  useEffect(() => {
    if (!isModifyMode) {
      if (colorName !== colorItem.alias) {
        const modifyTemplate = {
          code: colorItem.code,
          alias: colorName,
        };

        appDispatch( colorActions.modifyAlias(modifyTemplate) );
      }
    }
  }, [isModifyMode, colorItem.code, colorItem.alias, colorName, appDispatch]);

  return (
    <li
      className={`${styles.color_item} ${theme === 'dark' ? 'dark_bg_02 dark_font_01' : ''}`}
    >
      <CopyColor colorItem={colorItem} />
      <div className={styles.color_info}>
        <input
          type='text'
          title={colorName}
          value={colorName}
          onChange={handleChangeColorName}
          readOnly={isModifyMode ? false : true}
          maxLength={16}
          className={styles.color_name}
        />
        <div className={styles.button_group}>
          <ModifyButton
            handleClickSetIsModifyMode={handleClickSetIsModifyMode}
          />
          <RemoveButton code={colorItem.code} />
        </div>
      </div>
    </li>
  );
};

export default ColorItem;