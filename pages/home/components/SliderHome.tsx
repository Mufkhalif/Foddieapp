import * as React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {titleFood, subtitleFood} from '../../../constants/fonts/index';

const {width, height} = Dimensions.get('window');

export default ({data}: any) => {
  const [inActive, setActive] = React.useState(0);
  const carouselRef = React.useRef('');

  console.disableYellowBox = true;

  const renderItem = ({item, index}: any) => {
    return (
      <View style={{height: 200, backgroundColor: 'red'}}>
        <Image source={{uri: item.url}} style={{flex: 1}} />
        <View style={{position: 'absolute', bottom: 10, left: 10}}>
          <Text style={{...titleFood}}>{item.title}</Text>
          <Text style={{...subtitleFood}}>{item.place} places</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        // loop={true}
        // loopClonesPerSide={2}
        // autoplay={true}
        // autoplayDelay={10000}
        // autoplayInterval={10000}
        onSnapToItem={(index: number) => setActive(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={inActive}
        containerStyle={{
          marginTop: -70,
          position: 'absolute',
          top: 220,
          right: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};
