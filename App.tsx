import React from 'react';
import {
  View,
  Animated,
  Dimensions
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CARD_HEIGHT, Cards } from "./components/Card";
import WalletCard from "./components/WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const { height } = Dimensions.get("window");
// const MARGIN = 16;
// const HEIGHT = CARD_HEIGHT + MARGIN * 2;
const cards = [
  {
    index: 1,
    type: Cards.Card1,
  },
  {
    index: 2,
    type: Cards.Card2,
  },
  {
    index: 3,
    type: Cards.Card3,
  },
  {
    index: 4,
    type: Cards.Card4,
  },
  {
    index: 5,
    type: Cards.Card5,
  },
  {
    index: 7,
    type: Cards.Card6,
  },
];

const App = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{
    nativeEvent: { contentOffset: { y } }
  }],
    { useNativeDriver: true }
  );

  return (
    <View style={{
      alignItems: 'center',
      paddingTop: '5%',
      paddingBottom: '5%',
    }}>
      <AnimatedFlatList
        scrollEventThrottle={16}
        bounces={false}
        data={cards}
        renderItem={({ index, item: { type } }) => (
          <WalletCard {...{ index, y, type }} />
        )}
        keyExtractor={(item) => item.index}
        // onScroll={onScroll}
        {...{ ...onScroll }}
      />
    </View>
  )
};

export default App;