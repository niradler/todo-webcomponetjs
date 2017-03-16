class Store {

    constructor() {
        this.values = [];
    }
    get(index) {
        return index ? this.values[index] : this.values;

    }
    set(index, value) {
        this.values[index] = value;
        this.save();
        return this.values;
    }
    add(value) {
        this.values.push(value);
        this.save();
        return this.values;
    }
    remove(index) {
        this.values.splice(index, 1);
        this.save();
        return this.values;
    }
    save() {
        localStorage.setItem("values", JSON.stringify(this.values));
    }
    restore() {
        var vals = JSON.parse(localStorage.getItem("values"));
        if (vals && vals.length > 0)
            this.values = vals;
    }
}