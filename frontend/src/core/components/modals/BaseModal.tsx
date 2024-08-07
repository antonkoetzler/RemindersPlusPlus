import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector } from '../../../shared/ReduxStore';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../shared/reducers/ModalReducer';
import { ReactNode, useEffect, useState } from 'react';
import Colors from '../../design_system/Colors';
import getStyleSheet from '../../design_system/StyleSheet';

/** The (dropdown) modal of the application */
const BaseModal = () => {
  const styles = getStyleSheet();
  const onBackground = Colors.onBackground();

  const { isVisible, items } = useSelector(state => state.modalReducer);
  const dispatch = useDispatch();

  /** Option components rendered from the [MenuItem]s in [items] */
  const [options, setOptions] = useState<ReactNode[]>([]);

  useEffect(() => {
    setOptions(
      items?.map((item, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => {
            item.onPress();
            dispatch(hideModal());
          }}
        >
          <View
            style={{
              borderTopColor: onBackground,
              borderTopWidth: 1,
            }}
          >
            <Text
              style={[
                styles.regularMediumText,
                {
                  textAlign: 'center',
                  padding: 10,
                }
              ]}
            >{item.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      )) ?? [],
    );
  }, [items]);

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => dispatch(hideModal())}
    >
      <TouchableWithoutFeedback onPress={() => dispatch(hideModal())}>
        <View
          style={{
            flex: 1,
          }}
        />
      </TouchableWithoutFeedback>
      <View style={{ backgroundColor: Colors.background() }}>{options}</View>
    </Modal>
  );
};

export default BaseModal;