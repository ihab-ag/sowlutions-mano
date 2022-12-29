import { Image, Modal } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function ImageModal({ visible, onRequestClose, url }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
            style={styles.modal}
        >
            <Image source={{ uri: url }}
            style={styles.image} />
        </Modal>
    )
}