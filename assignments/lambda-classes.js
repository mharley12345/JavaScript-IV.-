
// CODE here for your Lambda Classes
// #### Person                
                              
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as attributes
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own attributes
                                         
                                         
class Person {                           
    constructor(attributes){                 
        this.name=attributes.name;          
        this.age-attributes.age;           
        this.location=attributes.location;
    }                                    
    speak() {               
         return (`Hello my name is ${this.name}, I am from ${this.location}`)
                                         
    }                                    
}                                        
                                         
                                         
                                        
                                        
                                        
                                        
                              
// #### Instructor            
                              
// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique attributes:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
                              
                              
class Instructor extends Person{
    constructor(attributes) { 
        super(attributes);    
        this.specialty=attributes.specialty;
        this.favLanguage=attributes.favLanguage;
        this.catchPhrase=attributes.catchPhrase;
    }                         
    demo(subject){             
        return (`Today we are learining about ${subject}`)
    }                         
    grade(student,subject){   
        return (`${student.name} receives a perfect score on ${subject}`)
                              
    }                         
}                             
                              
                              
                              
                              
                              
// #### Student               
                              
// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique attributes:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132 
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
                              
class Student extends Person{ 
    constructor(attributes){  
    super(attributes);        
    this.previousBackground=attributes.previousBackground;
    this.className=attributes.classname;
    this.favSubjects=attributes.favSubjects;
                              
    }                         
     listsSubjests(){         
        return (`${favSubjects}`);
     }                        
     PRassignment(){          
        return (`${this.name}has submitted a PR for ${subject}`);
     }                        
    sprintChallenge(){        
        return (`${this.name}has begun sprint challenge on ${subject}`);
    }                         
    grade() {                 
        return Math.floor(Math.random() * 100 + 1)
    }                         
};                            
                              
                              
                              
                              
                              
                              
                              
                              
                                                 
// #### Project Manager                            
                                                   
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors 
// * ProjectManagers have the following unique attributes:
//   * `gradClassName`: i.e. CS1                   
//   * `favInstructor`: i.e. Sean                  
// * ProjectManagers have the following Methods:   
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
                                                   
class ProjectManager extends Instructor {                       
    constructor(attributes){                                   
        super(attributes);                                 
    this.gradClassName=attributes.gradClassName;           
    this.favInstructor=attributes.favInstructor;              
    }                                                      
    standUp(channel){                                     
        return (`${this.name} annouces to ${channel},@channel standy times!`)
    }                                                                                    
    debugsCode(student,subject){                               
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
    }                                                     
}                                                         
                                                          
                                                          
                                                          
                                                          
                                                          
// -------------------------Instructors--------------------------------------------------   
                                                               
                                                          
                                                          
const fred = new Instructor({                             
                                                          
        name: 'Fred',                                     
        location: 'Bedrock',                              
        age: 37,                                          
        favLanguage: 'JavaScript',                        
        specialty: 'Front-end',                           
        catchPhrase: `Don't forget the homies`                                                 
    })                                                         
                                                          
                                                               
                                                               
                                                               
                                                               
                                                               
                                                               
                                                               
                                                               
// `````````````````````````````````students---------------------------------------------------           
    const Mike = new Student({                                                                           
    previousBackground: "Truck Driver",                                                                 
    className:"Web 20",                                                                                
    favInstructor:"Fred",                                                                             
    favSubjects: `${"Html","JavaScript" }`,               
    name: "Mike",                                                   
                                                                                                    
                                                                                                   
                                                                                                  
    })                                                                                           
  //----------------------------------Pm's----------------------------------------------------------------    
                                                               
                                                               
                                                               
  const Adam = new ProjectManager({                                                           
        gradClassName:"Web 10",                                                                
        favInstructor: "Fred",                            
        name:"Adam",                                                                
                                                                                 
    })                                                                                      
                                                                                           
                                                                                           
                                                                                          
                                                                                         
                                                                                       
  //---------------------------------CL's--------------------------------------------------    
                                                                                       
                                                                                       
                                                                                    
    console.log(Adam.debugsCode(Mike,'JavaScript'))                                   
                                                                                                                         
                                                                                     
    console.log(Adam.standUp('channel'))                                            
    console.log(speak(Mike))                                                   
    console.log(Mike.grade())                                                     
                                                                                 
=======
// CODE here fo* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.





class Person {
    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.location = prop.location

    }
    speak() {
        return `Hello my name ${this.name}, I am from, ${this.location}`

    }
}

class Instructor extends Person {
    constructor(props) {
        super(props)
        this.specialty = prop.specialty
        this.favLanguage = props.favLangauge
        this.catchPhrase = props.catchPhrase

    }
    demo(subject) {
        return 'Today we are learning about ${this.subject}'

    }
    grade(student) {
        return `${this.student.name} recieves a perfect score on ${this.subject}`
    }
}

class Student extends Instructor{
    constructor(props){
        super(props)
        this.previousBackground = props.previousBackground
        this.className=props.className
        this.favSubjects=props.favSubjects

    }
    listsSubjects(favSubjects){
           return `${listsSubjects},${favSubjects}`
    }
    PRAssignment(subject){
       return  `${student.name} has submitted a PR for ${subject}`
    }
     sprintChallange(){
         return `${student.name} has begun sprint challenge on ${this.subject}`
 

     }
}

          class ProjectManagers extends Instructor {
             constructor(props){       
             super(props)
               this.gradClassName=props.gradClassName
               this.favInstructor=props.favInstructpt
            }
       standUp(slack){
           return `${this.channel} standy times!`

           }
       debugsCode(){
           Object.student.this.subject=subject.student.Object;
           return `${this.name}debugs ${student.name}'s code on ${this.subject}`
        }

           
       }

        


