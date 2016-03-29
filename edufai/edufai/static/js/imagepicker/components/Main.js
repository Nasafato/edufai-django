var React = require('react');
var ImageCarousel = require('./imageCarousel/ImageCarousel');
var Avatar = require('./Navbar/Avatar');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7" style={{marginTop: 15}}>
            <Avatar userData={this.props.data.userData} />
          </div>
        </nav>
        <div className="container">
          <ImageCarousel imageData={this.props.data.imageData} />
        </div>
      </div>
    )
  }
});

module.exports = Main;