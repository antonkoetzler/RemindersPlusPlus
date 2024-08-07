import { Modal, Text, View } from 'react-native';
import { useSelector } from '../../../shared/ReduxStore';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../shared/reducers/ModalReducer';

const BaseModal = () => {
  const { isVisible, content } = useSelector(state => state.modalReducer);
  const dispatch = useDispatch();

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => dispatch(hideModal())}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        {content}
      </View>
    </Modal>
  );
};

export default BaseModal;