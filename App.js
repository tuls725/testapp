import React, { useState } from 'react'
import { Text, View, SafeAreaView, Dimensions, Image, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon1 from 'react-native-vector-icons/AntDesign'
import PureChart from 'react-native-pure-chart';
import CustomTabBar from './customTopTab';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const GradientLine = () => {
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={['#03E88B', '#0640B5']}
      style={{
        flex: 1, height: 2, width: windowWidth, marginTop: 10,
      }}>
    </LinearGradient>
  )
}

const GrapDetail = () => {
  let sampleData = [
    {
      seriesName: '1',
      data: [
        { x: 'S', y: 50 },
        { x: 'M', y: 100 },
        { x: 'T', y: 50 },
        { x: 'W', y: 100 },
        { x: 'T', y: 100 },
        { x: 'F', y: 150 },
        { x: 'S', y: 100 },

      ],
      color: 'blue',
    },
  ]
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ marginRight: 5, height: 5, width: 5, borderWidth: 4, borderRadius: 50, borderColor: '#297AB1', }}></Text>
            <Text style={{ fontSize: 15, color: 'white' }}>Graph maps</Text>
          </View>
          <Text style={{ color: 'white', fontSize: 25, marginLeft: 10 }}>500</Text>
        </View>
        <PureChart
          width={Dimensions.get("window").width}
          type='bar'
          data={sampleData}
          height={80}
          defaultColumnWidth={4}
          minValue={7}
          labelColor={'grey'}
          showEvenNumberXaxisLabel={false}
          numberOfYAxisGuideLine={0}
          backgroundColor={'black'}
          xAxisColor={'black'}
          yAxisColor={'black'}
        />
      </View>
      <GradientLine />
    </View>
  );
}


const Tab2 = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'black', justifyContent: 'space-between' }}>
      <GrapDetail/>
    </View>
  );
}


const Day = () => {
  const [state, setState] = useState([
    { name: "google" ,value:'500'}, { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }
  ])
  // console.log(name)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={state}
        renderItem={(item) => {
          return (
            <Tab2 />
          )
        }}
      />

    </View>
  );
}

const Week = () => {
  const [state, setState] = useState([
    { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }
  ])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={state}
        renderItem={(item) => {
          return (
            <Tab2 />
          )
        }}
      />
    </View>
  );
}

const Month = () => {
  const [state, setState] = useState([
    { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }
  ])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <FlatList
        data={state}
        renderItem={(item) => {
          return (
            <Tab2 />
          )
        }}
      />
    </View>
  );
}

const Alltime = () => {
  const [state, setState] = useState([
    { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }, { name: "FeedScreen" }
  ])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={state}
        renderItem={(item) => {
          return (
            <Tab2 />
          )
        }}
      />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Day"
        component={Day}
        options={{ tabBarLabel: 'DAY' }}
      />
      <Tab.Screen
        name="Week"
        component={Week}
        options={{ tabBarLabel: 'WEEK' }}
      />
      <Tab.Screen
        name="Month"
        component={Month}
        options={{ tabBarLabel: 'MONTH' }}
      />
      <Tab.Screen
        name="Alltime"
        component={Alltime}
        options={{ tabBarLabel: 'ALL TIME' }}
      />
    </Tab.Navigator>
  );
}


const Tab1 = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ flex: 1, backgroundColor: 'black', }}>
        <View style={{ padding: 10, backgroundColor: 'black', width: windowWidth, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
          <Icon1 name='leftcircleo' size={22} color='white' />
          <Text style={{ fontSize: 20, color: 'white', }}>Ad Statistics</Text>
          <Text></Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'black', }}>
          <Tab1 />
        </View>
      </View>
    </SafeAreaView>
  )
}


export default App