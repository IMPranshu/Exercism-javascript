//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {

  let a = [];
  let tmp = "";
  
  for(let i = 0;i < sentence.length;){
    if(sentence[i] == " " || sentence[i] == "\t" || sentence[i] == "\n"){
      
      i++;
      continue;
    }
    tmp += sentence[i].toLowerCase();

  }
};
