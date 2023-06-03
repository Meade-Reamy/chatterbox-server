const messageData = {
  messages: []
};

messageData.returnMessages = function(numOfMsg = 100) {
  // let counter = 0;
  // let messagesaToReturn = {
  //   messages: []
  // };
  // for (let idx = this.messages.length; counter < numOfMsg; idx--) {
  //   if (this.messages[idx] === undefined) {
  //     break;
  //   }
  //   console.log(this.messages[idx]);
  //   messagesaToReturn.messages.push(this.messages[idx]);
  //  // console.log(messagesaToReturn.messages)
  //   counter++;
  // }
  // console.log(messagesaToReturn.messages)
  return this.messages;
};

messageData.postMsg = function(msg) {
  // eslint-disable-next-line camelcase
  msg.message_id = this.messages.length;
  this.messages.push(msg);
};

module.exports.messageData = messageData;