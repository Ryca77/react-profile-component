var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

var PersonList = function() {
	return (
		<div className="person-list">
			<Person	name='Derek Zoolander'
    				imageUrl='http://www.leadersayswhat.com/wp-content/uploads/2016/02/derek-zoolander-thumb.jpg'
    				job='Male model, bit of a numpty' />
    		<Person	name='Donald Knuth'
    				imageUrl='http://www-cs-faculty.stanford.edu/~uno/don.gif'
    				job='Clever chap, did some stuff' />
    		<Person	name='Ryan Carter'
    				
    				job='Learning React' />
		</div>
		
	);
};

module.exports = PersonList;