// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];



 //--------------------SOLUTION----------------------------------------
 
// DATA VALIDATION
function getLearnerData (CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error("input is invalid!");
  }

    if (AssignmentGroup.id !== LearnerSubmissions.assignment_id) {
        throw new Error('input id invalid!');
    }
  for (const assignment_id of AssignmentGroup.id) {


  }
  }
  console.log(getLearnerData);



// TOTAL SCORES BY LEARNER_ID
let learnerScores = {}


for (let i=0; i<LearnerSubmissions.length; i++) {

if (!learnerScores[LearnerSubmissions[i].learner_id]) {
  learnerScores[LearnerSubmissions[i].learner_id] = 0
  
console.log(learnerScores[LearnerSubmissions[i].learner_id]);
}

learnerScores[LearnerSubmissions[i].learner_id]+=LearnerSubmissions[i].submission.score
}

console.log(learnerScores);


// AVERAGE SCORE OF ALL LEARNERS
let allScores = [];
let total = 0;
for (let i=0; i<LearnerSubmissions.length; i++) {
  total +=LearnerSubmissions[i].submission.score
  allScores.push(LearnerSubmissions[i].submission.score)
}
console.log(total/allScores.length);









   

  

    

   
    











  


    
      


  // }
  
 







  //-----------------------------------------------------------------------------------------------------------------

//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  
