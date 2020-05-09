import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getPosts, getSinglePost } from "../redux/actions/postAction";
import { connect } from "react-redux";
import styles from "../styles/style";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

type Props = {
  navigation: {
    navigate: Function;
  };
  getPosts: Function;
  getSinglePost: Function;
  posts: any;
};

const Posts = (props: Props) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDetails()
  }, []);

  // setTimeout(function () {
  //   props.getPosts(page)
  // }, 10000);

  const loadDetails = () => {
    setPage(page+1)
    props.getPosts(page)
    setTimeout(loadDetails, 10000);
  }

  console.log(props.posts, "getPosts");

  return (
    <View style={styles.layout}>
      <Text style={styles.headerTitle}>User Posts</Text>
      <View>
        <FlatList
          data={props.posts}
          renderItem={({ item }) => (
            <Card
              navigation={props.navigation}
              getSinglePost={props.getSinglePost}
              item={item}
            />
          )}
          // keyExtractor={(item) => item.objectID}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          // onEndReached={() => {
          //   setLoading(true);
          //   setPage(page + 1);
          // }}
          refreshing={loading}
          onRefresh={() => setPage(1)}
        />
        {loading && <ActivityIndicator size="large" />}
      </View>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    posts: state.postStore.posts,
  };
}

export default connect(mapStateToProps, { getPosts, getSinglePost })(Posts);
