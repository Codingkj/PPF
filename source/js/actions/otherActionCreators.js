var Dispatcher = require('../dispatcher/Dispatcher');

function changeComponent(){
	var action ={
		type:'change_component'
	};
	Dispatcher.dispatch(action);
}


module.exports = {
  changeComponent: changeComponent,
  
};