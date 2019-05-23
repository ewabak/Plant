

renderItem = (data)=>{
    const {navigation} = this.props;
   return (
           <TouchableOpacity 
            style={styles.card} 
            onPress={() => {
              navigation.navigate('CatalogPlant', data.item.link)
            }}
           >
             <Image 
              style={styles.cardImage} 
              source={require('./images/flower.jpg')}
             />
             <Text 
              style={styles.cardText} 
             >
              {data.item.scientific_name}
             </Text> 
           </TouchableOpacity>
   )
   
   }
   
   