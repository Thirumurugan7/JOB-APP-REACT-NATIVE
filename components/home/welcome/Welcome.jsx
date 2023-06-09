import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";

import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["full-time", "part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();

  const [activeJoobType, setActiveJoobType] = useState("full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Thirumurugan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJoobType, item)}
              onPress={() => {
                setActiveJoobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJoobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
