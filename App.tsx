import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import _ from "lodash";
import CardSelection from "./components/CardSelection";
import { Card as CardModel } from "./components/Card";

const cards: [CardModel, CardModel, CardModel] = [
  {
    id: "summer-sunset",
    name: "Summer Sunset",
    design: require("./assets/cards/summer-sunset.png"),
    thumbnail: require("./assets/cards/summer-sunset-thumbnail.png"),
    color: "#a373de"
  },
  {
    id: "purple-sky",
    name: "Purple Sky",
    design: require("./assets/cards/purple-sky.png"),
    thumbnail: require("./assets/cards/purple-sky-thumbnail.png"),
    color: "#ec10db"
  },
  {
    id: "meteor-shower",
    name: "Meteor shower",
    design: require("./assets/cards/meteor-shower.png"),
    thumbnail: require("./assets/cards/meteor-shower-thumbnail.png"),
    color: "#fc6091"
  }
];

const App = () => {
  // const assets = _.flatten(cards.map(card => [card.design, card.thumbnail]));
  // const ready = useLoadAssets(assets);
  // if (!ready) {
  //   return <AppLoading />;
  // }
  return <CardSelection {...{ cards }} />;
};

const styles = StyleSheet.create({

});

export default App;
