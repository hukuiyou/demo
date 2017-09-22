<template>
    <div>
        <mt-cell v-for="author in authors" :title="author.name" :key="author.id" 
        @click.native = "handleAuthorClick(author)"
        is-link></mt-cell>
    </div>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import route from '../router'

export default {
  name: 'author',
  data() {
    return {
    };
  },

  computed: {
    ...mapState({
       authors: state => state.authors,
    }),
  },

  created () {
    this.$store.dispatch('getAuthors')
  },

  methods: {
    handleAuthorClick(oAuthor){
      let path = `/authorDetail/${oAuthor.id}`;
      route.push(path);
    }
  }
};
</script>

<style>
</style>

