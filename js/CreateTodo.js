class CreateTodo extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        const t = document.querySelector('#create-template');
        const instance = t.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
    connectedCallback() {

        this.shadowRoot.querySelector("#add").addEventListener('click', function(e) {
            var todo = this.parentElement.querySelector("#txt").value;
            store.add(todo);
            this.parentElement.querySelector("#txt").value = "";
            document.querySelector("todo-list").add(todo);
        });
    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
};

customElements.define('create-todo', CreateTodo);