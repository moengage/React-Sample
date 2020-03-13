import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
// import { Header } from 'react-native-elements';
// import DetailScreen from './DetailScreen'
// import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign';
import ReactMoE from 'react-native-moengage'
import { ScrollView } from 'react-native-gesture-handler';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(properties){
    super(properties)
    ReactMoE.setEventListener("pushClicked", (payload) => {
      console.log("Notification clicked: ", payload);
    });

    ReactMoE.setEventListener("inAppCampaignShown", (payload) => {
      console.log("InApp Shown: ", payload);
    });

    ReactMoE.setEventListener("inAppCampaignClicked", (payload) => {
      console.log("InApp clicked: ", payload);
    });
  }
  state = {
    names: [
      {
        id: 0,
        name: 'Track Event',
        action: () => {
          ReactMoE.trackEvent("testEvent", { "a": "a" });
        }
      },
      {
        id: 1,
        name: 'Set Unique Id',
        action: () => {
          ReactMoE.setUserUniqueID(4102409962159437)
        }
      },
      {
        id: 2,
        name: 'Set User Name',
        action: () => {
          ReactMoE.setUserName("MoE")
        }
      },
      {
        id: 3,
        name: 'Set First Name',
        action: () => {
          ReactMoE.setUserFirstName("MoEngage")
        }
      },
      {
        id: 4,
        name: 'Set Last Name',
        action: () => {
          ReactMoE.setUserLastName("Inc")
        }
      },
      {
        id: 5,
        name: 'Set Email',
        action: () => {
          ReactMoE.setUserEmailID("sdk@moengage.com")
        }
      },
      {
        id: 6,
        name: 'Set Contact Number',
        action: () => {
          ReactMoE.setUserContactNumber("987129340271")
        }
      },
      {
        id: 7,
        name: 'Set Birthday',
        action: () => {
          ReactMoE.setUserBirthday("22/05/2015")
        }
      },
      {
        id: 8,
        name: 'Set Gender',
        action: () => {
          ReactMoE.setUserGender("male")
        }
      },
      {
        id: 9,
        name: 'Default User Location Attribute',
        action: () => {
          ReactMoE.setUserLocation(12.312, 123.453)
        }
      },
      {
        id: 10,
        name: 'Long User Attribute',
        action: () => {
          ReactMoE.setUserAttribute("long", 12346972392279832)
        }
      },
      {
        id: 11,
        name: 'String User Attribute',
        action: () => {
          ReactMoE.setUserAttribute("string", "teststr")
        }
      },
      {
        id: 12,
        name: 'Boolean User Attribute',
        action: () => {
          ReactMoE.setUserAttribute("boolean", true)
        }
      },
      {
        id: 13,
        name: 'Integer User Attribute',
        action: () => {
          ReactMoE.setUserAttribute("int", 1234)
        }
      },
      {
        id: 14,
        name: 'Double User Attribute',
        action: () => {
          ReactMoE.setUserAttribute("double", 123.4343)
        }
      },
      // {
      //   id: 15,
      //   name: '',
      //   action: () =>{

      //   }
      // },
      {
        id: 16,
        name: 'Custom Location User Attribute',
        action: () => {
          ReactMoE.setUserAttributeLocation("location", 12.3, 12.345)
        }
      },
      {
        id: 17,
        name: 'Install',
        action: () => {
          ReactMoE.isExistingUser(true)
        }
      },
      {
        id: 18,
        name: 'Show InApp',
        action: () => {
          ReactMoE.showInApp()
        }
      },
      {
        id: 19,
        name: 'Set Alias',
        action: () => {
          ReactMoE.setAlias(397642348374238423428374)
        }
      },
      {
        id: 20,
        name: 'Pass Push Token',
        action: () => {
          ReactMoE.passPushToken("dummyToken")
        }
      },
      {
        id: 21,
        name: 'Pass Push Payload',
        action: () => {
          ReactMoE.passPushPayload(
            {
              "gcm_title": "push to inbox",
              "push_from": "moengage",
              "gcm_notificationType": "normal notification",
              "gcm_activityName": "com.moe.pushlibrary.activities.MoEActivity",
              "gcm_alert": "push to inbox",
              "gcm_campaign_id": new Date().getTime()
            }
          )
        }
      }
    ]
  }
  render() {
    ReactMoE.initialize();
    return (
      <ScrollView>
        {
            this.state.names.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => item.action()}>
              <Text style={styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
            ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
  },
  text: {
    color: '#4f603c'
  }
})

export default HomeScreen