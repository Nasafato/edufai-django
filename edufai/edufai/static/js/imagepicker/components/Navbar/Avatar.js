var React = require('react');

var ProfilePicture = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.imageURL} />
			</div>
		)
	}
})

var ProfileLink = React.createClass({
	render: function() {
		githubLink = "https://github.com/" + this.props.username;
		return (
			<div>
				<a href={githubLink}>{this.props.username}</a>
			</div>
		);
	}
})

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePicture imageURL={this.props.userData.imageURL} />
				<ProfileLink username={this.props.userData.username} />
			</div>
		);
	}
});

module.exports = Avatar;