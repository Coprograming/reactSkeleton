var React = require('react');
var NewsItem = require('./NewsItem.jsx');

var News = React.createClass({
    render: function() {
        var createItem = function(text, index) {
            return <NewsItem key={index + text} text={text}/>;
        };
        return (
            <ul>{this.props.items.map(createItem)}</ul>
        );
    }
});

module.exports = News;
