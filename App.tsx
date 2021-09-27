import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Card, {
  Cards,
  CARD_HEIGHT as DEFAULT_CARD_HEIGHT,
} from "./components/Card";

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
  return (
    <View style={{
      // flex: 1,
      // justifyContent: 'center',
      // alignContent: 'center',
      alignItems: 'center',
      paddingTop: '5%',
      paddingBottom: '5%',
    }}>

      <FlatList
        bounces={false}
        data={cards}
        renderItem={({ index, item: { type } }) => (
          <Card {...{ index, type }} />
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  )
};

export default App;