<template>
  <v-container>
    <h1>home</h1>
    <div v-if="$apollo.loading">Loading... please wait!</div>
    <ul
      v-for="post in posts"
      :key="post._id"
    >
      <li>
        {{post.title}}
        {{post.imageUrl}}
        {{post.description}}
      </li>
      <li>
        {{post.likes}}
      </li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  // data() {
  //   return {
  //     posts: []
  //   };
  // },
  // apollo: {
  //   getPosts: {
  //     query: gql`
  //       query {
  //         getPosts {
  //           _id
  //           title
  //           description
  //           imageUrl
  //           likes
  //         }
  //       }
  //     `,
  //     result({ data, loading }) {
  //       if (!loading) {
  //         this.posts = data.getPosts;
  //       }
  //     }
  //   }
  // }
  created() {
    this.handleGetPosts();
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  methods: {
    handleGetPosts() {
      return this.$store.dispatch("getPosts");
    }
  }
};
</script>

<style>
</style>
