import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { PARTNERS } from '../shared/partners';


//Task 3 Function:
function Mission() {
    return (
        <Card>
            <Text>
            We present a curated database of the best campsites in the vast woods and backcountry
            of the World Wide Web Wilderness. We increase access to adventure for the public while promoting 
            safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify 
            each campsite to make sure that they are up to our standards. We also present a platform for campers 
            to share reviews on campsites they have visited with each other   
            </Text>
        </Card>
    );
}
//End Task 3 Function
class About extends Component {
//Task 3 Constructor
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }
//End Task 3 Constructor
    static navigationOptions = {
        title: 'About Us'
}

Render() {

//Task 3 Render Partner Function
function RenderPartner({item}) {
    if (item) {
        return (
            <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
        );
    }
    return <View />;
}
//End Render Partner Function
  return (
      <ScrollView>
          <Mission />//Mission Component
          <Card title={"Community Partners"}>
            <FlatList
                data={this.state.partners}
                renderItem={renderAboutItem}
                keyExtractor={item => item.id}
            />
          </Card>

      </ScrollView>
      );
    }
}

export default About;

