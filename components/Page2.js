import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterType } from '../slices/productSlice';

export default function Page2({ navigation }) {
  const dispatch = useDispatch();
  const filteredProduct = useSelector(state => state.product.filteredProduct);
  const selectedType = useSelector(state => state.product.selectedType);

  const ButtonHandler = (buttonName) => {
    dispatch(setFilterType(buttonName));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.tabProduct}>
        {['ALL', 'ROADBIKE', 'MOUNTAIN'].map(type => (
          <TouchableOpacity key={type} onPress={() => ButtonHandler(type)} style={styles.selectPro}>
            <Text style={{ color: selectedType === type ? 'red' : 'black', fontSize: 17, fontWeight: 'bold' }}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        numColumns={2}
        data={filteredProduct}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Page3', { item })} style={styles.clickPr}>
            <Image source={item.image} resizeMode="contain" style={{ height: 129, width: 130 }} />
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{item.nameProduct}</Text>
            <Text style={{ fontSize: 19, fontWeight: '400' }}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  title: { fontWeight: 'bold', fontSize: 25, color: 'red', marginTop: '10%' },
  tabProduct: { flexDirection: 'row', marginTop: 30, marginBottom: 10 },
  selectPro: { borderWidth: 1, borderColor: '#f39a9a', borderRadius: 7, width: 100, height: 35, alignItems: 'center', justifyContent: 'center', marginHorizontal: 15 },
  clickPr: { backgroundColor: '#fef5ec', width: 179, height: 210, margin: 9, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
});
