var React = require('react');

var ImageCarousel = React.createClass({
	render: function() {
		return (
	        <div className="row">
	            <div className="col-sm-12 text-center">
					<h1>Your current image</h1>
					<img src={this.props.imageData.imageURL} />
				</div>
			</div>
		)
	}
});

module.exports = ImageCarousel;