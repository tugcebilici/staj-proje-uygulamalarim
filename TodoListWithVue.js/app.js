let id = 0
const app = Vue.createApp({
    data() {
        return {
          newTodo: '',
          hide: false,
          todos: []
        }
      },
      computed: {
        filteredTodos() {
          return this.hide
            ? this.todos.filter((t) => !t.done)
            : this.todos
        }
      },
      methods: {
        addTodo() {
          this.todos.push({ id: id++, text: this.newTodo, done: false })
          this.newTodo = ''
          
        },
        removeTodo(todo) {
          this.todos = this.todos.filter((t) => t !== todo)
        }
      }
}).mount("#app");
