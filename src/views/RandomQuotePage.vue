<template>
  <div class="random-quote">
    <button class="random" @click="getRandomQuote" >random <i class="material-icons">cached</i></button>
      <blockquote :class="{'loading':isLoading}">
        {{ quote.quoteText }}
      </blockquote>
    <router-link :to="{name:'QuoteFromAuthor', params : {name: quote.quoteAuthor}}" class="author" :class="{'loading':isLoading}">
      <div class="left">
        <p><strong>{{ quote.quoteAuthor }}</strong></p>
        <p class="type">{{quote.quoteGenre}}</p>
      </div>

      <i class="material-icons">trending_flat</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RandomQuotePage',
  components: {},
  data() {
    return {
      quote: {
        quoteText:"",
        quoteGenre:"",
        quoteAuthor:""
      },
      isLoading:true,
    }
  },
  mounted() {
    this.getRandomQuote()
  },
  methods: {
    getRandomQuote() {
      this.isLoading = true;
      this.axios.get("random").then(result=> {
        console.log(result.data.data[0]);
        this.quote = result.data.data[0];
        this.isLoading = false;
      }).catch(error => console.log(error))
    }
  },
}
</script>

<style>
.random-quote {
  max-width: 700px;
  text-align: left;
  margin: 20rem auto;
}

blockquote {
  font-size: 3.6rem;
  padding-left: 10rem;
  margin: 0;
  position: relative;
}

blockquote::before, .author::before {
  content:"";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #F7DF94;
  transition: width ease 200ms;
  will-change: width;
}

blockquote::before {
  width: 10px;
}

.author::before {
  width: 0;
}

blockquote.loading::before, .author.loading::before  {
  width: 100%;
}


.author {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem;
  margin-top: 10rem;
  transition: all ease 100ms;
  position: relative;
  color: #000;
  text-decoration: none;
}

.author > p {
  margin: 0;
}

.author strong {
  font-size: 2.4rem;
  font-weight: 700;
  transition: all ease 100ms;
}

.type {
  font-size: 1.4rem;
  color: #828282;
  margin: .8rem 0 0 0;
}

.author i {
  opacity: 0;
  transition: all ease 100ms;
}

.author:after {
  content: '';
  display: block;
  width: 0;
  top: 0;
  left: 0;
  background-color: #000;
  height: 100%;
  position: absolute;
  z-index: -1;
  transition: width ease 200ms;
}

.author:hover {
  color: #fff;
  cursor: pointer;
}

.author:hover:after {
  width: 100%;
}

.author:hover .type {
  color: #828282;
}

.author:hover i {
  opacity: 1;
}



</style>
