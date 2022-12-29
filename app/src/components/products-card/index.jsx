import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ProductCard = ({ product, setModal, setModalUrl }) => {
    const images = product.images[0]
    return (
        <TouchableOpacity style={styles.card}
        onPress={() => {
            setModalUrl(images.large)
            setModal(true)
            }}>
            <Image source={{ uri: images.small }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.quantity}>Available: {product.quantity}</Text>
                <Text style={styles.price}>Price: {product.price}$</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard