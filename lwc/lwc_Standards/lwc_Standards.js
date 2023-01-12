// import Standard Library 
import { LightningElement } from 'lwc';
// import show toast message 
import { CurrentPageReference } from 'lightning/navigation';
// import navigation 
import { NavigationMixin } from 'lightning/navigation';
// import Static Resources 
import myResource from '@salesforce/resourceUrl/namespace__resourceReference';
// import Custom Labels 
import HomePageLabel from '@salesforce/label/c.HomePageNewsLabel';
// import apex class 
import apexMethod from '@salesforce/apex/Namespace.Classname.apexMethod';
// import util module 
import {className,MethodName,VariableName,CustomLabel} from 'c/util';

export default class LwcPageLayout extends NavigationMixin(LightningElement) {
    
	// declare and initialize  static resources variable value 
	 const img = myResource;
	// declare and initialization custom variable name 
	 clabel = clabel;
	// declare Global variable 
	@api name;
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
	
	// wire method 
	@wire(CurrentPageReference) ageRef;	
	
	// connected callback for default value initialization 	
	connectedCallback(){
		// code here 
	}
	
	// renderedCallback for  re-rendered when the value changes
	renderedCallback(){
		// code here 
	}
	
	// define custom methods 
	display(){
		//code here 
	}
	
}