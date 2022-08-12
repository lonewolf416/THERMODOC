import { StyleSheet } from "react-native";
const COLORS = {
  primary: "#5ec9f7",
  icon: "#FCB152",
  price: "#202020",
  background: "#202020",
  text: "#81D8D0",
  line: "#C0C0C0",
  white: "#ffffff",
  black: "#000000",
  grey: "grey",
  palette2: "#12adf3",
  palette1: "#0ca1e5",
};
const Styles = StyleSheet.create({
  //PRODUCT STYLES
  profileItemContainer: {
    //justifyContent: "",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
  },
  productflatgridContainer: {
    flexGrow: 1,
  },
  productName: {
    fontSize: 17,
    color: COLORS.line,
    fontWeight: "600",
    width: "90%",
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 5,
    textTransform: "uppercase",
  },
  price: {
    fontSize: 13,
    color: COLORS.price,
    fontWeight: "600",
    paddingVertical: 2,
    paddingHorizontal: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    // marginLeft: 10,
    // marginRight: 10,
  },
  //HOME STYLES
  //HOME STYLES -> FLATGRID
  headerView: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",

    marginBottom: 10,
  },
  verticleLine: {
    height: "100%",
    alignSelf: "center",
    width: 1,
    backgroundColor: COLORS.line,
  },
  flatgridContainer: {
    justifyContent: "center",
    flexGrow: 1,
    paddingBottom: 50,
    backgroundColor: "white",
  },
  gridView: {
    flex: 1,
  },
  inputIcon: {
    marginRight: 12,
    width: 20,
  },
  homeItemContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
    alignSelf: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    //  paddingHorizontal: 10,
  },
  itemName: {
    fontSize: 13,
    color: COLORS.text,
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 13,
    textAlign: "center",
    textTransform: "uppercase",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },

  //Profile Styles
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  proficeView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginLeft: 10,
  },
  box: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 5,
  },
  wallet: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  recentOrder: {
    color: COLORS.white,
    //   fontWeight: "bold",
    fontSize: 20,
  },
  horizontalLine: {
    height: 1,
    alignSelf: "center",
    width: "100%",
    backgroundColor: COLORS.white,
    marginTop: 10,
  },
  orderCard: {
    alignSelf: "center",
    borderRadius: 15,
    //   marginTop: 10,
    alignItems: "center",
    paddingBottom: 10,
  },
  recentText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "600",
    paddingVertical: 1,
    paddingHorizontal: 0,
    marginRight: 5,
    marginVertical: 1,
    //   textTransform: "uppercase",
  },
});

export { Styles, COLORS };
