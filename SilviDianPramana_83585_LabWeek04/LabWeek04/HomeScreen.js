import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView>
      {users.map((user, index) => (
        <Card key={index} style={{ margin: 10 }}>
          <Card.Title
            title={user.name}
            subtitle={user.email}
            left={(props) => <Avatar.Image {...props} source={{ uri: user.image }} />}
          />
        </Card>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
