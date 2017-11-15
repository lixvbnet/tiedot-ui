let Node = require('basis.ui').Node;

module.exports = Node.subclass({
    active: basis.PROXY,
    template: resource('./template.tmpl'),
    childClass: {
        template: resource('./item.tmpl'),
        binding: {
            title: 'title'
        },
    },
    handler: {
        activeChanged() {
            if (this.active) {
                this.dataSource.deprecate();
            }
        }
    },
    childNodes: [
        {title: 'Home'},
        {title: 'Collection'},
    ]
});