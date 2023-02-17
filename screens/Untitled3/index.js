import { useSelector } from "react-redux";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const boredapi20_response_get_GetActivity = useSelector(state => state.boredapi20_response_get_GetActivity);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.qJyexdZm}>An Activity Suggestion For You</Text></View>
          <View style={styles.column2}><Text style={styles.FZYairKB}>{boredapi20_response_get_GetActivity[0].activity}</Text></View>
          
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  qJyexdZm: {
    width: 334,
    height: 129,
    lineHeight: 40,
    fontSize: 40,
    borderRadius: 0,
    textAlign: "center",
    color: "#46b7e3"
  },
  FZYairKB: {
    width: 332,
    height: 175,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0
  }
});
export default Untitled3;