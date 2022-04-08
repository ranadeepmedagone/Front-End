<template>
  <div class="container">
    <UserHeader />
    <div class="title">
      <h1>TO-DO LIST</h1>
      <!-- <h6>What are you doing today?</h6> -->
    </div>
    <!-- <button id="submit">Add things to the list!</button> -->
    <!-- <p id="error">Nothing to do today?</p> -->
    <main class="list">
      <ul id="list" v-for="(todo, i) in $store.state.todos" :key="i">
        <li class="listElement">{{ i + 1 }}. {{ todo.description }}</li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  //   components: { UserHeader },
  name: "alltodos",

  data() {
    return {
      // username: "",
      // password: "",
      // formData: {
      //   username: this.username,
      //   password: this.password,
      // },
      errorMsg: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("getAllTodos");
    return;
  },

  methods: {
    // login() {
    //   this.$store.dispatch("login", this.formData);
    // this.$router.push("/UserHome");
    // },
    deleteTodo(id) {
      console.log(id);
      this.$store.dispatch("deleteTodo", id);
    },
  },
  head() {
    return {
      title: "mytodos page",
      meta: [
        {
          hid: "mytodos page",
          name: "my todos page",
          content: "user todos here",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #f1edee;
  font-family: "Open Sans";
}

.container {
  width: 500px;
  margin: 100px auto;
  text-align: center;
}

.container .title {
  font-size: 25px;
  color: #141414;
  margin-bottom: 20px;
}

.container button {
  background-color: #141414;
  color: white;
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  font-family: "Open Sans";
  font-size: 15px;
}

.container button:focus {
  outline: none;
}

#error {
  padding: 10px;
  font-size: 12px;
  color: red;
  font-family: "Open Sans";
  font-weight: 600;
  display: none;
}
.container .list {
  background: #ffffff;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
}

.container .list ul {
  list-style: none;
  text-align: left;
}

.container .list ul li {
  padding: 10px;
  margin-left: 20px;
  font-size: 20px;
}

/* 
.container form {
  background: #fff;
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
}

.container form input[type="text"] {
  width: 80%;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #3D405B;
  font-size: 20px;
  background: #fff;
}

.container form input[type="text"]:focus {
  outline: none;
}

.container form input[type="text"]:hover {
  outline: none;
}

.container form input[type="submit"] {
  padding: 15px;
  font-size: 20px;
  border: none;
  text-transform: uppercase;
  color: #E07A5F;
  background: #fff;
  font-weight: 700;
  margin-right: 5px;
}

.container form input[type="submit"]:focus {
  outline: none;
}

.container form p {
  margin: 10px 0px 0px 10px;
  display: none;
  color: #E63B2E;
}
/*
/*# sourceMappingURL=styles.css.map */
</style>