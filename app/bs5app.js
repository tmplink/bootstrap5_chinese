class bs5App {

    defaultContentPath = '/content/getting-start/introduction.html'
    currentContentPath = ''

    init() {
        let contentPath = this.getUrlParams().contentPath;
        if (contentPath !== undefined) {
            this.active(contentPath);
        }else{
            this.active(this.defaultContentPath);
        }
    }

    active(contentPath) {
        if (contentPath !== this.currentContentPath) {
            this.currentContentPath = this.getUrlParams().contentPath;
            app.htmlRewrite('#content',app.getFile(contentPath))
        }
    }

    getUrlParams() {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

}