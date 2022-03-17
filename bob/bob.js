//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let len = message.trim().length;
  if (len == 0){
    return "Fine. Be that way!";
  }
  if(message[len -1] == '?' ){
    message.slice(len-1, 1);
    message.slice(0,1);
    if (message == message.toUpperCase()){
      return "Calm down, I know what I'm doing!";
    }
    return "Sure.";
  }
  else if(message == message.toUpperCase()){
    return "Whoa, chill out!";
  }
  return "Whatever.";
};
