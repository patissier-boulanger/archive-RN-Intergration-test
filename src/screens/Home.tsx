import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const HomeView = () => {
  const feedItems = [
    {
      id: 1,
      user: 'John Doe',
      avatar: 'https://via.placeholder.com/50x50',
      timestamp: '1h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus leo vel purus tempor, vel bibendum risus cursus.',
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: 'https://via.placeholder.com/50x50',
      timestamp: '2h ago',
      content:
        'Sed auctor erat sit amet odio scelerisque, in aliquam tellus sollicitudin. Nulla bibendum, odio at elementum fringilla, nisl lectus pharetra lectus, nec rhoncus nibh nunc non sapien.',
    },
    {
      id: 3,
      user: 'Bob Johnson',
      avatar: 'https://via.placeholder.com/50x50',
      timestamp: '3h ago',
      content:
        'Proin non sapien vel quam eleifend tincidunt. Pellentesque fermentum, libero a hendrerit bibendum, nisl ex tristique felis, quis tincidunt enim velit in quam.',
    },
    {
      id: 4,
      user: 'Alice Lee',
      avatar: 'https://via.placeholder.com/50x50',
      timestamp: '4h ago',
      content:
        'Praesent blandit libero ac nisl commodo, eu iaculis sapien sagittis. Nulla facilisi. Duis euismod euismod bibendum. Integer sit amet sapien quam.',
    },
    {
      id: 5,
      user: 'Samuel Kim',
      avatar: 'https://via.placeholder.com/50x50',
      timestamp: '5h ago',
      content:
        'Vivamus accumsan lacus vel diam molestie, ac blandit quam sagittis. Sed at ex mauris. Proin eleifend erat vitae imperdiet bibendum. Integer vel tristique est.',
    },
  ];

  return (
    <View style={styles.container}>
      {feedItems.map(item => (
        <View style={styles.card} key={item.id}>
          <View style={styles.cardHeader}>
            <Image source={{uri: item.avatar}} style={styles.avatarImage} />
            <View style={styles.userInfo}>
              <Text style={styles.username}>{item.user}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.feedText}>{item.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
  cardBody: {
    padding: 16,
  },
  feedText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export const Home = HomeView;
