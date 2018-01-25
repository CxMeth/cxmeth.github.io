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
	
	itemObj.task = $("#task").val();
	itemObj.priority = Number($("#priority").val());
	
	itemArray[index] = itemObj;
	console.log(itemArray);	
	
	$(".itemtable").append("<tr id="+index+"><th>"+(index+1)+"</th><td>"+itemArray[index].task+"</td><td>"+itemArray[index].priority+"</td><td><input type='checkbox' name='checkbox-0 '></td</tr>");		
	} 
	

	});