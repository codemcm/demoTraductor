import { StyleSheet } from "react-native";
export default StyleSheet.create({
  //general views
  container: {
    backgroundColor: "white",
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
  },
  //labes
  marginText: {
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 10,
  },
  textStyle: {
    marginTop: 10,
    marginLeft: 10,
    padding: 2,
    fontSize: 16,
  },
  //button
  buttonDetails: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    marginTop: 10,
    backgroundColor: "#578CB5",
    borderRadius: 10,
  },
  pickerStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: "#DFE3EE",
  },
  //
  //for views with List
  flatl: { marginTop: 0, backgroundColor: "white" }, // elemento flatList
  separatorFL: {
    //separar los flatList
    height: 1,
    marginLeft: 10,
    marginRight: 30,
    backgroundColor: "#DEE4EC",
  },
  itemFL: {
    //elements inside flatList
    padding: 2,
    marginTop: 10,
    marginVertical: 1,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  iconInput: {
    color: "#27587F",
    fontSize: 25,
  },
  iconButtom: {
    color: "white",
    marginRight: 10,
  },
});
