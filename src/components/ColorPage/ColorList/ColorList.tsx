import { useAppSelector } from '../../../hooks/useRedux';
import ColorItem from './ColorItem/ColorItem';
import styles from './ColorList.module.css';

const ColorList = () => {
  const { colorList } =  useAppSelector(state => state.color);

  return (
    <ul className={styles.color_list}>
      {
        colorList.map(colorItem => (
          <ColorItem
            key={colorItem.code}
            colorItem={colorItem}
          />
        ))
      }
    </ul>
  );
};

export default ColorList;