// Please check for your names, thats the method you will be working with....thanks    
 

let School = {
                    name: " King's College",
                     address: " Lagos ",
                     student: [],
                      staff: [],


       // Adenike              
        getAllStudents: function(){},
        getStudent: function(id){},

        //  Balikisu
        modifyStudent: function(id){},
        registerStudent: function(name, middlename, surname, state, age, gender, sclass, schoolfee){},

        //  Asiyah
        employStaff: function(name, middlename, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary){},
        getAllStaffs: function(){},

        // Samuel
        getStaffId: function(id){},
        modifyStaff: function(id){},

        // Aminat animashaun , please use a splice method for the delete
        deleteStaff: function(id){},

        
        // faith
        getStudentByClass: function(){},
        deleteStudent: function(id){},
        
   
        // Sunday
        SortStudentByName: function(name){
          let nameSearch = this.student
              for(let i = 0; i < nameSearch.length; i++) {
                     if (name === nameSearch[i].name){
                            return nameSearch[i]
                     }
              }
        },

        // michael
        getSchoolAccount: function(){},
        getSchoolInfo: function(){},
    
 };      
    
    
    
    
   