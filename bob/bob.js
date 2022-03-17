//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message.trim;
  let len = message.length;
  if(message[len -1] == '?' ){
    message.splice(len-1, 1);
    message.splice(0,1);
    if(message == message.toLowerCase()){
      return "Sure."

    }else if (message == message.toUpperCase()){
      return "Calm down, I know what I'm doing!";
    }
  }else if(message == message.toUpperCase()){
    return "Whoa, chill out!";
  }else if(message.toLowerCase() == "bob"){
    return "Fine. Be that way!";
  }
  return "Whatever.";
};
