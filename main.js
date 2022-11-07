  console.log("test");
  console.log("tddd");



 let user = {
  name: 'John',
  surname: 'Smith',
 }

user['name']='pete'
console.log(user.name);








function showVerticalMessage(word){
  i = 0
  for(let char of word){
    if (word[0] == "s" && char == 's'){
      console.log(char.toUpperCase() + '\n');
    } else {
      console.log(char + '\n');
    }
    
    if (i >= 6){
      break;
    }

    i++
  }
}

//showVerticalMessage('strada')

/*
function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
			console.log(i)
		})
	}
	return res
}
*/


function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
		res.push((function(i){
			return function(){
        return i
      }
		})(i))
	}
	return res
}



console.log(buildFun(5)[2]())
