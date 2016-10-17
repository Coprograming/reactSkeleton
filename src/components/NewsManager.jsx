var React = require('react');
var News = require('./NewsItem.jsx');

var NewsManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ''};
    },
    render: function() {

        var divStyle = {
            marginTop: 10
        };

        var headingStyle = {};

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div>
                <div className="panel panel-default">
                    <div className="row">
                        <div>
                            <div className="col-sm-1">
                                <div style={{
                                    marginLeft: 20,
                                    marginTop: 20
                                }}>
                                    <img src="https://lh4.googleusercontent.com/-ak28-E7WE_w/TX9JIJy4lBI/AAAAAAAALcY/4hPNBtNZk8U/s1600/sony_logo20.png" alt="img-responsive" className="img-rounded" style={{
                                        height: 50,
                                        width: "100% \9"
                                    }}></img>
                                </div>
                            </div>
                            <div className="col-sm-11">
                                <h4>Obesity in America</h4>
                                <h5>
                                    <b>Why are Americans so fat?</b>
                                </h5>
                                <div>
                                    <h4>The number of people killed by Hurricane Matthew in Haiti surged on Friday to 842, local officials told Reuters, as help slowly trickled into marooned areas of the country's southwestern peninsula pummeled by the powerful storm.</h4>
                                </div>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYjvhNWYTO77_-94MiPjJF3Jl6HW-HH1KExelSDTKsMGX1ZV7" alt="img-responsive" className="img-rounded" style={{
                                        height: 150,
                                        width: "100% \9"
                                    }}></img>
                                </div>
                                <div>
                                    <h5>
                                        <small>Florida, USA</small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="row">
                        <div>
                            <div className="col-sm-1">
                                <div style={{
                                    marginLeft: 20,
                                    marginTop: 20
                                }}>
                                    <img src="https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg" alt="img-responsive" className="img-rounded" style={{
                                        height: 50,
                                        width: "100% \9"
                                    }}></img>
                                </div>
                            </div>
                            <div className="col-sm-11">
                                <h4>Soda in America</h4>
                                <h5>
                                    <b>Why are Americans so smart?</b>
                                </h5>
                                <div>
                                    <h4>The number of people killed by Hurricane Matthew in Haiti surged on Friday to 842, local officials told Reuters, as help slowly trickled into marooned areas of the country's southwestern peninsula pummeled by the powerful storm.</h4>
                                </div>
                                <div>
                                    <img src="http://www.coca-colacompany.com/content/dam/journey/us/en/private/2010/01/lg_fanta_orange_can-7d9d1164.jpg" alt="img-responsive" className="img-rounded" style={{
                                        height: 150,
                                        width: "100% \9"
                                    }}></img>
                                </div>
                                <div>
                                    <h5>
                                        <small>Florida, USA</small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = NewsManager;
