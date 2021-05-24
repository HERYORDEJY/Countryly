import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import _Text from './Text';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export default function ModalMenu({
  visible,
  toggleModal,
  children,
  backdropColor = 'black',
  backdropOpacity = 0.7,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  transparent,
  dismissable,
  swipeDirection,
}) {
  const [state, setState] = useState({
    isModalVisible: visible,
  });

  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <Modal
        isVisible={visible}
        onBackButtonPress={() => toggleModal()}
        hideModalContentWhileAnimating={true}
        onBackdropPress={() => toggleModal()}
        onSwipeComplete={() => toggleModal()}
        swipeDirection={swipeDirection}
        style={{ margin: 0, flex: 1 }}
        propagateSwipe
        backdropColor={backdropColor}
        backdropOpacity={backdropOpacity}
        animationIn={animationIn}
        animationOut={animationOut}
        transparent={transparent}
        dismissable={dismissable}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>{children}</View>
        {/*{component}*/}
      </Modal>
    </View>
  );
}
