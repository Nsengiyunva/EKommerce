import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { theme } from "../constants";

export default class Block extends Component {
  handleMargins = () => {
    const marginType = typeof this.props.margin;
    if (marginType === "number") {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }
    if (marginType === "object") {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0]
          };
        default:
          break;
      }
    }
  };
  handlePaddings = () => {};
  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      top,
      bottom,
      ...props
    } = this.props;
    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === false && { flex: 0 },
      row && styles.row
    ];

    if (animated) {
      return <Animated.View style={blockStyles}>{children}</Animated.View>;
    }
    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: theme.sizes.radius
  }
});
