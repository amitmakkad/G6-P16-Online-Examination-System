const exam = 
{
    examName : 'Mid Semester Examination',
    examMarks : '100',
    examWeightage : '40',
    instructions: 'This is the mse of this course and will judge on various basis, dont cheat.',
    startTiming : new Date("2021-05-18T10:00:00Z"),
    endTiming : new Date("2021-05-18T12:00:00Z"),
    Questions : [
        {
            questionType : "MCQ",
            questionNumber : 1,
            questionContent : "MCQ Question 1",
            questionMarks : 3,
            questionOptions : ["Op 1","Op 2","Op 3"],
            questionAnswerOptions : [0,2],
            questionAnswer : "",
        },
        {
            questionType : "Numerical",
            questionNumber : 2,
            questionContent : "Numerical Question 1",
            questionMarks : 4,
            questionOptions : [],
            questionAnswerOptions : [],
            questionAnswer : "22.37",
        },
        {
            questionType : "MCQ",
            questionNumber : 3,
            questionContent : "MCQ Question 2",
            questionMarks : 2,
            questionOptions : ["Op 1","Op 2","Op 3","Op 4"],
            questionAnswerOptions : [1],
            questionAnswer : "",
        },
        {
            questionType : "MCQ",
            questionNumber : 4,
            questionContent : "MCQ Question 3",
            questionMarks : 5,
            questionOptions : ["Op 1","Op 2","Op 3","Op 4","Op 5"],
            questionAnswerOptions : [0,2,3],
            questionAnswer : "",
            _id : "q4"
        }
    ],
    Submissions : [
        {
            studentEmail : 'cse200001043@iiti.ac.in',
            responses :[],
            marksObtained : ''
        },
        {
            studentEmail : 'cse200001044@iiti.ac.in',
            responses :[],
            marksObtained : ''
        }
    ]
}

export default exam