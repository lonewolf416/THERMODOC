// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "expo-chart-kit";

const MyBezierLineChart = () => {
  return (
    <LineChart
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get("screen").width * 0.96} // from react-native
      height={220}
      yAxisLabel={"Rs"}
      chartConfig={{
        backgroundGradientFrom: "#12adf3",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#5ec9f7",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
      }}
      bezier
      style={{
        borderRadius: 16,
        margin: 0,
        padding: 0,
        marginHorizontal: Dimensions.get("screen").width * 0.01,
      }}
    />
  );
};

const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Amount Received</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyProgressChart = () => {
  return (
    <>
      <Text style={styles.header}>Progress Chart</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Users Behavior</Text>
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisLabel={"Rs"}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>User Reached</Text>
      <PieChart
        data={[
          {
            name: "5 Star",
            rating: 89,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "2 Star",
            rating: 25,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "4 Star",
            rating: 25,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="rating"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyContributionGraph = () => {
  return (
    <>
      <Text style={styles.header}>Contribution Graph</Text>
      <ContributionGraph
        values={[
          { date: "2019-01-02", count: 1 },
          { date: "2019-01-03", count: 2 },
          { date: "2019-01-04", count: 3 },
          { date: "2019-01-05", count: 4 },
          { date: "2019-01-06", count: 5 },
          { date: "2019-01-30", count: 2 },
          { date: "2019-01-31", count: 3 },
          { date: "2019-03-01", count: 2 },
          { date: "2019-04-02", count: 4 },
          { date: "2019-03-05", count: 2 },
          { date: "2019-02-30", count: 4 },
        ]}
        endDate={new Date("2019-04-01")}
        numDays={105}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </>
  );
};

const HospitalDashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <MyPieChart />
            {/*Example of Bezier LineChart*/}
            {/* <MyBezierLineChart /> */}
            {/*Example of LineChart*/}
            <MyLineChart />
            {/*Example of Progress Chart*/}
            {/* <MyProgressChart /> */}
            {/*Example of Bar Chart*/}
            <MyBarChart />
            {/*Example of StackedBar Chart*/}

            {/*Example of Pie Chart*/}

            {/*Example of Contribution Chart*/}
            {/* <MyContributionGraph /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View style={{ flex: 1, alignContent: "center" }}>
    //   <MyBezierLineChart />
    // </View>
  );
};

export default HospitalDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
