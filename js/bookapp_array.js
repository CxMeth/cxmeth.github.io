$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var itemArray = [];

$("#add").click(function(){	
	addItem();
});

$("#remove").click(function(){	
	removeItem();
});
	
function removeItem(){
	$("#myrow").remove();
}	
function addItem(){		
	var itemObj ={};
	var input = $( "form input:checkbox" ) 
	
	itemObj.title = $("#title").val();
	itemObj.author = $("#author").val();
	itemObj.status = $("#status").val();
	
	itemArray[index] = itemObj;
	console.log(itemArray[index].status);	
if(itemArray[index].status==1){
	$(".itemtable").append("<tr id="+index+"><th>"+(index+1)+"</th><td>"+itemArray[index].title+"</td><td>"+itemArray[index].author+"</td><td><input type='checkbox' name='checkbox-0' checked></td</tr>");		
	
	}else{
		$(".itemtable").append("<tr id="+index+"><th>"+(index+1)+"</th><td>"+itemArray[index].title+"</td><td>"+itemArray[index].author+"</td><td><input type='checkbox' name='checkbox-0 '></td</tr>");
		
	}
	index++;
	} 
	

	});