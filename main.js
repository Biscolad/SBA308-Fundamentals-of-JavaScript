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
 
  
// ANALYZE THE ID OF THE LEARNER FOR WHICH THIS DATA HAS BEEN COLLECTED
// for (const learner_id in LearnerSubmissions) {
//   if (learner_id === learner_id);
//   let average = 0
//   for (let i=0; i<LearnerSubmissions.learner_id.score; i++) {


//   }
//   average == learner
//   console.log(LearnerSubmissions[learner_id]);
// }


// DATA VALIDATION
function getLearnerData (CourseInfo, AssignmentGroup, LearnerSubmissions) {
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error("input is invalid!");
  }
  }
  console.log(getLearnerData);



// AVERAGE OF ALL LEARNERS' TOTAL, WEIGHTED AVERAGE,
let overallScores = [];
let total = 0;
for (let i=0; i<LearnerSubmissions.length; i++) {
  total +=LearnerSubmissions[i].submission.score
  overallScores.push(LearnerSubmissions[i].submission.score)
}
console.log(total/overallScores.length);


// EACH LEARNER'S TOTAL, WEIGHTED AVERAGE,

// learnerScores = [];
// const learners = {};
// for (const submission of LearnerSubmissions) {
//   const learnerId = submission.learner_id;
//   if (!learners[learnerId]) {
//     learners[learnerId] = {
//       id: learnerId,
//       average: 0,
    
//     };
//   }

// }
// console.log (learners.average);




   

  

    

   
    











  


    
      

  //   if (AssignmentGroup.id !== LearnerSubmissions.assignment_id) {
  //       throw new Error('input id invalid!');
  //   }

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
  
