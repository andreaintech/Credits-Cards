import React from "react";
import { Dimensions, StyleSheet, Animated, View } from "react-native";

import Card, {
    Cards,
    CARD_HEIGHT as DEFAULT_CARD_HEIGHT,
} from "./Card";

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const { height: wHeight } = Dimensions.get("window");
const height = wHeight - 64;
const styles = StyleSheet.create({
    card: {
        marginVertical: MARGIN,
        alignSelf: "center",
    },
});

interface WalletCardProps {
    y: Animated.Value;
    index: number;
    type: Cards;
}

interface WalletCardProps {
    index: number;
    y: Animated.Value;
    type: Cards;
}

const WalletCard = ({ type, y, index }: WalletCardProps) => {
    return (
        <View
            style={[styles.card]}
            key={index}
        >
            <Card {...{ type }} />
        </View>
    );
};

export default WalletCard;