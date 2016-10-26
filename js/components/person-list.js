var Person = require('./person');

var PersonList = function() {
	return (
		<div className="person-list">
			<Person />
			<Person />
			<Person />
			>Person />
			<Person />
		</div>
	);
};

module.exports = PersonList;