const state = () => ({
   token: null,
   MyTodos: [],
   todos: [],

});

const getters = {};

const mutations = {
   setToken(state, data) {
      state.token = data;
   },
   GetMyTodos(state, data) {
      state.MyTodos = data;
   },
   CreateTodo(state, data) {
      //    state.CreateTodo = data;
   },
   getAllTodos(state, data) {
      state.todos = data;
      console.log(state.todos);
   }
};

const actions = {
   async login({ commit }, data) {
      console.log(data.username)
      console.log(data.password)
      await this.$axios.post("http://localhost:5000/api/user/login", {
         username: data.username,
         password: data.password,
      }).then((res) => {
         console.log(res.data);
         commit('setToken', res.data);
      })
   },

   async GetMyTodos({ commit, state }) {
      await this.$axios.get("http://localhost:5000/api/todo/getmytodo", {
         headers: { 'Authorization': 'Bearer ' + state.token }
      }).then((res) => {
         console.log(res.data);
         // this.$router.push('/');
         commit('GetMyTodos', res.data);
      })
   },

   async CreateTodo({ commit, state }, data) {

      await this.$axios.post("http://localhost:5000/api/todo", {
         description: data.description,
         iscompleted: data.iscompleted
      }, { headers: { 'Authorization': 'Bearer ' + state.token } }).then((res) => {
         console.log(res.data);
         commit('CreateTodo', res.data);
      })
   },
   async updateTodo({ commit, state }, id) {
      await this.$axios.put("http://localhost:5000/api/todo/" + id, {
         iscompleted: true
      },
         {
            headers: {
               'Authorization': 'Bearer ' + state.token,
            }
         }).then((res) => {
            console.log('updates');
         })
   },
   async deleteTodo({ commit, state }, data) {
      await this.$axios.delete("http://localhost:5000/api/todo/" + data,
         {
            headers: {
               'Authorization': 'Bearer ' + state.token,
            }
         }).then((res) => {
            console.log("Deleted");
         })
   },


   async getAllTodos({ commit, state }) {
      await this.$axios.get("http://localhost:5000/api/todo", {
         headers: { 'Authorization': 'Bearer ' + state.token }
      }).then((res) => {
         console.log(res.data);
         // this.$router.push('/');
         commit('getAllTodos', res.data);
      })
   },
};
// create Todo
// http://localhost:5000/api/todo


export default {
   state,
   getters,
   mutations,
   actions,
};

//  export const mutations = {
//     setToken(state, payload){
//        state.Token = payload;
//        console.log(state.Token);
//     }
//  }