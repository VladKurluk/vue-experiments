<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <p class="py-2">{{ getMsgFromVuex }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "@/store/modules/message/messageTypes";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({
      getMsgFromVuex: `message/${types.GET_MESSAGE}`,
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
