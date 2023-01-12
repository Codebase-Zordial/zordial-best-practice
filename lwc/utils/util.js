// import Standard Library 
// import Static Resources 
import myResource from '@salesforce/resourceUrl/namespace__resourceReference';
// import Custom Labels 
import HomePageLabel from '@salesforce/label/c.HomePageNewsLabel';
// import apex class 
import apexMethod from '@salesforce/apex/Namespace.Classname.apexMethod';

// variable declaration
	name;
	listOfContact =[];
	
// define custom labels 
	clabel='';

// declare a class inside the class and define variable and methods.
class LwcPageLayout {    
	
	// declare boolean variable
	flag =true;
	// declare array 
	arrName =[];
	// declare json object 
	jsonList ={};
	// declare variable with initialization 
	x =10;
	// declare variable without initializtion 
	prodName;	
	
	
	// define custom methods 
	display(){
		//code here 
}
	
// define custom method 
show(){
	// code here 
}

// all name define inside the export which used any where with the help of import keyword

export{
	name,
	listOfContact,
	clabel,
	LwcPageLayout,
	show,
}