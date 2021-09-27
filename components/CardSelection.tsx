import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Card, { Card as CardModel, CARD_WIDTH, CARD_HEIGHT } from "./Card";
import CheckIcon from "./CheckIcon";
import Thumbnail from "./Thumbnail";

interface CardSelectionProps {
  cards: [CardModel, CardModel, CardModel];
}

const INITIAL_INDEX: number = -1;

export default ({ cards }: CardSelectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {cards.map((card, index) => {
          return (
            <View
              key={card.id}
              style={{
                ...StyleSheet.absoluteFillObject
              }}
            >
              <Card key={card.id} {...{ card }} />
            </View>
          );
        })}
      </View>

      <SafeAreaView>
        {cards.map(({ id, name, color, thumbnail }, index) => (
          <RectButton
            key={id}
            // onPress={() => selectCard(index)}
            onPress={() => { }}
          >
            <View style={styles.button} accessible>
              <Thumbnail {...{ thumbnail }} />
              <View style={styles.label}>
                <Text>{name}</Text>
              </View>
              <CheckIcon {...{ color }} />
            </View>
          </RectButton>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cards: {
    flex: 1,
    backgroundColor: "#f4f6f3"
  },
  button: {
    flexDirection: "row"
  },
  label: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#f4f6f3",
    justifyContent: "center"
  }
});
