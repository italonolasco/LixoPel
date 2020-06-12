import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
  },

  title: {
    color: "#0f0f0f",
    fontSize: 32,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 10,
  },

  description: {
    color: "#6C6C80",
    fontSize: 20,
    fontFamily: "Roboto_400Regular",
    marginTop: 8,
    marginLeft: 6,
  },

  mapContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 24,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapMarkerImage: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 16,
  },

  buttons: {
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 48,
    width: 144,
  },

  buttonsText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto_400Regular",
  },
});

export default styles;
