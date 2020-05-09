import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";

type Props = {
  navigation: {
    navigate: Function;
  };
  getSinglePost: Function;
  item: any;
};

const Card = (props: Props) => {
  return (
    <View style={{margin: 15, borderBottomColor: "black"}}>
      <View style={{display:"flex", flexDirection: "row"}}>
        <Text style={styles.title}>Title => </Text>
        <Text style={styles.body}>{props.item.title}</Text>
      </View>
      <View style={{display:"flex", flexDirection: "row"}}>
        <Text style={styles.title}>URL =></Text>
        <Text style={styles.body}>{props.item.url}</Text>
      </View>
      <View style={{display:"flex", flexDirection: "row"}}>
        <Text style={styles.title}>Created At =></Text>
        <Text style={styles.body}>{props.item.created_at}</Text>
      </View>
      <View style={{display:"flex", flexDirection: "row"}}>
        <Text style={styles.title}>Author =></Text>
        <Text style={styles.body}>{props.item.author}</Text>
      </View>
    </View>
  );
};

export default Card;
