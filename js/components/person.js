var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
	var name = 'Derek Zoolander';
	var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
	var job = 'male model';
	return (
		<div className="person">
			<div className="person-name">{name}</div>
			<img className="preson-img" src={imageUrl} />
			<div className="person-job">
				{job}
			</div>
		</div>
	);	
};

module.exports = Person;