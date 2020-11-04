String.prototype.format =function () {
    let args = arguments;
    return this.replace(/\{(\d+)\}/g, function(m, i){
        return args[i];
    });
};