var Dispatcher = require('../dispatcher/Dispatcher');


function addClient(){
	var action ={
		type:'add-client'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
  addClient:addClient,
};