<template>
  <div class="quote-from-author">
    <button class="random" @click="getRandomQuote" >random <i class="material-icons">cached</i></button>
    <h1>{{ author }}</h1>
    <blockquote v-for="quote in quotes" :key="quote._id">
      {{ quote.quoteText }}
      <p class="type">{{quote.quoteGenre}}</p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "QuoteFromAuthor",
  data() {
    return {
      author: "",
      quotes: [
        {
          quoteText: "",
          quoteGenre: "",
          quoteAuthor: ""
        }
      ]
    }
  },
  methods: {
    getRandomQuote() {
      this.$router.push("/")
    }
  },
  mounted() {
    this.author = this.$route.params.name;
    this.axios.get("/", {params: {author: this.author}}).then(result => {
      console.log("liste", result.data.data);
      this.quotes = result.data.data;
    }).catch(error => console.log(error))
  }
}
</script>

<style scoped>
.quote-from-author {
  max-width: 700px;
  text-align: left;
  margin: 0 auto;
}

  blockquote, h1 {
    margin-bottom: 14rem;
  }
  h1 {
    font-weight: 700;
    font-size: 3.6rem;
  }
</style>
