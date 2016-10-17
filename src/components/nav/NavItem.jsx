var React = require('react');

var NaveItem = React.createClass({
    render: function() {
        return (
            <li>
                <a style={this.props.aStyle} href={this.props.href}>{this.props.title}</a>
            </li>
        );
    }
});

module.exports = NaveItem;
