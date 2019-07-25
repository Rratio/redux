import React, { Component } from "react";
import { Text } from "react-native";
import CardItem from "./common/CardItem";

class ListItem extends Component {
  render() {
    return (
      <CardItem>
        <Text style={styles.titleStyle}>{this.props.data.title}</Text>
      </CardItem>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

export default ListItem;
