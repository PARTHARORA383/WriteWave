export const parseContent = (content :string)=>{
 const element = [];

 const lines = content.split('\n\n');

 for(let i = 0 ; i < lines.length ; i++){
  const line = lines[i].trim();
  if(line.startsWith("##")){
    element.push({type : "heading" , text :line.substring(2).trim()});
  }
  else if(line){
    element.push({type : "paragraph" , text : line.trim()})
  }
 }

  return element;
};