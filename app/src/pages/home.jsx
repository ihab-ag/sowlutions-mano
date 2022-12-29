import { View, Text, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../apis/getProducts.api'
import ProductCard from '../components/products-card';
import ImageModal from '../components/image-modal';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalUrl, setModalUrl] = useState('');

    useEffect(() => {

        getProducts().then(res => {
            setProducts(res.data?.items);
        })

    }, []);

    return (
        <>
            <ScrollView>
                {products?.map((product) => {
                    return (
                        <ProductCard 
                        key={product.id} 
                        product={product} 
                        setModal={setModalVisible}
                        setModalUrl={setModalUrl}
                        />
                    )
                })
                }
            </ScrollView>
            <ImageModal
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                url={modalUrl}
            ></ImageModal>
        </>
    )
}