       class TodoList extends HTMLElement {
           constructor() {
               super(); // always call super() first in the ctor.
               let shadowRoot = this.attachShadow({
                   mode: 'open'
               });
               const t = document.querySelector('#todo-list-template');
               const instance = t.content.cloneNode(true);
               shadowRoot.appendChild(instance);
           }
           connectedCallback() {
               this.refresh();
           }
           disconnectedCallback() {}
           attributeChangedCallback(attrName, oldVal, newVal) {

           }
           add(todo) {

               //    debugger
               var i = store.index(todo);
               //    var l = document.createElement("li");
               //    l.classList = 'list-group-item';
               //    l.innerHTML = `${todo} <span class="pull-right" onclick="remove(${i})">X</span>`;
               //    var at = document.createAttribute("index");
               //    at.value = i;
               //    l.setAttributeNode(at);

               var list = this.shadowRoot.querySelector("#list");

               var t = document.querySelector("#todo-template");
               const node = t.content.cloneNode(true);
               t = node.children[0];
               t.innerHTML = `${todo} <span class="pull-right" onclick="remove(${i})">X</span>`;
               t.setAttribute("index", i.toString());

               list.appendChild(t);
           }
           refresh() {
               this.shadowRoot.querySelector("#list").innerHTML = "";
               var todos = store.restore();
               for (var i = 0; i < todos.length; i++) {
                   this.add(todos[i]);

               }
           }
       }
       customElements.define('todo-list', TodoList);