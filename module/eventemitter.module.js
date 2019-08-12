function eventEmitter() {
    this.events = this.events || new Map()
}

eventEmitter.prototype.addListener = function (type, fn){
    if(!this.events.get(type)) {
        this.events.set(type, fn)
    }
}
eventEmitter.prototype.emit = function (type, ...params) {
    let handle = this.events.get(type);
    handle.apply(this, params);
}

export {
    eventEmitter
}
