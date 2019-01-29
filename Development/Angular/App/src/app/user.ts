export class User {
    constructor(  
        public Name:String,
        public Email:String,
        public PhoneNo:number,
        public Topic:String,
        public timePreference:String,
        public checkBox : boolean,
    ){console.log(Name);}
    
    // constructor(name,email,phn,topic,time,check){
    //     this.Name = name,
    //     this.Email = email,
    //     this.PhoneNo = phn,
    //     this.Topic = topic, 
    //     this.timePreference = time,
    //     this.checkBox = check,
        
    // }
}
