import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { FontAwesome } from "@expo/vector-icons";

import api from "../../services/api";
import styles from "./styles";
import green from "../../assets/green.png";
import orange from "../../assets/orange.png";

const Home = () => {
  const [trashCans, setTrashCans] = useState([]);
  const [recyclableSelected, setRecyclableSelected] = useState(true);
  const [organicSelected, setOrganicSelected] = useState(true);

  const [initalPosition, setInitialPosition] = useState([0, 0]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("É necessário permitir o uso da localização");
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  useEffect(() => {}, []);

  function handleSelect(trashCanSelected) {
    if (trashCanSelected === "recyclable") {
      recyclableSelected
        ? setRecyclableSelected(false)
        : setRecyclableSelected(true);
    } else if (trashCanSelected === "organic") {
      organicSelected ? setOrganicSelected(false) : setOrganicSelected(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={green} />
        <Text style={styles.title}>LixoPel</Text>
      </View>

      <Text style={styles.description}>Encontre sua lixeira mais próxima</Text>

      <View style={styles.mapContainer}>
        {initalPosition[0] !== 0 && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: initalPosition[0],
              longitude: initalPosition[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <Marker
              coordinate={{ latitude: -31.7782765, longitude: -52.3338439 }}
            >
              <Image style={styles.mapMarkerImage} source={orange} />
            </Marker>
          </MapView>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.buttons,
            recyclableSelected
              ? { backgroundColor: "#0AC227" }
              : { backgroundColor: "#A0A0A0" },
          ]}
          activeOpacity={0.7}
          onPress={() => handleSelect("recyclable")}
        >
          <FontAwesome name="trash-o" size={24} color="white" />
          <Text style={styles.buttonsText}>Reciclável</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttons,
            organicSelected
              ? { backgroundColor: "#FFB800" }
              : { backgroundColor: "#A0A0A0" },
          ]}
          activeOpacity={0.7}
          onPress={() => handleSelect("organic")}
        >
          <FontAwesome name="trash-o" size={24} color="white" />
          <Text style={styles.buttonsText}>Orgânica</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
