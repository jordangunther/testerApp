angular.module('testerApp')
.service('dataService', [ function(){
    
    this.data = {
        admin: {
            adminId: 0,
            adminName: 'Steve Young',
            customPasswordHash: '2h4hlh342hh',
            registrationDate: 'Sun Jan 17 2016 16:35:22 GMT-0700 (MST)',
            school: {
                schoolId: 0,
                schoolName: 'Cool School'
            }
        },
        certificate: {
            courseId: 0,
            testId: 0,
            fileReference: 'app/assets/school0/course0/certificate.txt',
            issuedTo: [2, 3]
        },
        content: {
            courseId: 0,
            courseName: 'History of FVII',
            filepath: 'app/assets/school0/course0/content.ppt',
            teacherId: 0,
            teacherName: 'Stephen Taylor',
            uploadedDate: 'Sun Jan 17 2016 16:35:22 GMT-0700 (MST)'
        },
        course: 
            [{
                courseId: 0,
                courseName: 'History of FVII',
                teacher: {
                    teacherId: 0,
                    teacherName: 'Stephen Taylor'
                },
                students: [0, 1, 2, 3, 4],
                test: [{
                    testId: 0,
                    testName: 'The Rise of Sephiroth'
                }],
                school: {
                    schoolId: 0,
                    schoolName: 'Cool School'
                }
            },
            {
                courseId: 1,
                courseName: 'The People\'s History of the United States',
                teacher: {
                    teacherId: 1,
                    teacherName: 'Howard Zinn'
                },
                students: [0, 1, 2, 3],
                test: [{
                    testId: 1,
                    testName: 'The Open Veins of Central America'
                }],
                school: {
                    schoolId: 0,
                    schoolName: 'Cool School'
                }
            }]
        ,
        school: {
            schoolId: 0,
            schoolName: 'Cool School',
            schoolLocation: '123 Fake St., Nowheresville, KY 40204',
            schoolDescription: 'A happy little high school where the nights are warm and the ice cream is cool',
            teachers: [{
                teacherId: 0,
                teacherName: 'Stephen Taylor'
            },
            {   teacherId: 1,
                teacherName: 'Marcos Sanchez'
            }],
            courses: [{
                courseId: 0,
                courseName: 'History of FVII'
            },
            {   
                courseId: 1,
                courseName: 'People\'s History of the United States'
            }],
            students: [0, 1, 2, 3, 4],
            admins: [{
                adminId: 0,
                adminName: 'Steve Young'
            }]
        },
        student: 
            [
                {
                    studentId: 0,
                    studentFirstName: 'Jordan',
                    studentLastName: 'Gunther',
                    studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
                    assignedPassword: 'JorGun',
                    teacher: {
                        teacherId: 0,
                        teacherName: 'Stephen Taylor'
                    },
                    courses: [{
                        courseId: 0,
                        courseName: 'History of FFVII',
                        tests: [{
                            testId: 0,
                            testName: 'The Rise of Sephiroth',
                            completed: false,
                            grade: 0,
                            pass: false,
                            answers: [],
                            dateTaken: '',
                            timeTaken: 0,
                            certificateId: 0
                        }]
                    }],
                    school: {
                        schoolId: 0,
                        schoolName: 'Cool School'
                    }
                },
                {
                    studentId: 1,
                    studentFirstName: 'Scott',
                    studentLastName: 'Ogden',
                    studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
                    assignedPassword: 'ScoOgd',
                    teacher: {
                        teacherId: 0,
                        teacherName: 'Stephen Taylor'
                    },
                    courses: [{
                        courseId: 0,
                        courseName: 'History of FFVII',
                        tests: [{
                            testId: 0,
                            testName: 'The Rise of Sephiroth',
                            completed: true,
                            grade: 60,
                            pass: false,
                            answers: [0, 0, 0, 0, 0],
                            dateTaken: 'Mon Jan 18 2016 18:35:22 GMT-0700 (MST)',
                            timeTaken: .33,
                            certificateId: 0
                        }]
                    }],
                    school: {
                        schoolId: 0,
                        schoolName: 'Cool School'
                    }
                },
                {
                    studentId: 2,
                    studentFirstName: 'Gabe',
                    studentLastName: 'Meola',
                    studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
                    assignedPassword: 'Gaben4Lyfe',
                    teacher: {
                        teacherId: 0,
                        teacherName: 'Stephen Taylor'
                    },
                    courses: [{
                        courseId: 0,
                        courseName: 'History of FFVII',
                        tests: [{
                            testId: 0,
                            testName: 'The Rise of Sephiroth',
                            completed: true,
                            grade: 100,
                            pass: true,
                            answers: [1, 2, 3, 2, 1],
                            dateTaken: 'Mon Jan 18 2016 16:35:22 GMT-0700 (MST)',
                            timeTaken: 2.52,
                            certificateId: 2
                        }]
                    }],
                    school: {
                        schoolId: 0,
                        schoolName: 'Cool School'
                    }
                },
                {
                    studentId: 3,
                    studentFirstName: 'Michael',
                    studentLastName: 'Scott',
                    studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
                    assignedPassword: 'LittleKidLover',
                    teacher: {
                        teacherId: 0,
                        teacherName: 'Stephen Taylor'
                    },
                    courses: [{
                        courseId: 0,
                        courseName: 'History of FFVII',
                        tests: [{
                            testId: 0,
                            testName: 'The Rise of Sephiroth',
                            completed: true,
                            grade: 80,
                            pass: true,
                            answers: [1, 2, 1, 2, 1],
                            dateTaken: 'Sun Jan 17 2016 16:35:22 GMT-0700 (MST)',
                            timeTaken: 1.49,
                            certificateId: 1
                        }]
                    }],
                    school: {
                        schoolId: 0,
                        schoolName: 'Cool School'
                    }
                },
                {
                    studentId: 4,
                    studentFirstName: 'Cloud',
                    studentLastName: 'Strife',
                    studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
                    assignedPassword: 'ImNotZack',
                    teacher: {
                        teacherId: 0,
                        teacherName: 'Stephen Taylor'
                    },
                    courses: [{
                        courseId: 0,
                        courseName: 'History of FFVII',
                        tests: [{
                            testId: 0,
                            testName: 'The Rise of Sephiroth',
                            completed: true,
                            grade: 20,
                            pass: false,
                            answers: [0, 3, 2, 1, 1],
                            dateTaken: 'Wed Jan 20 2016 08:13:02 GMT-0700 (MST)',
                            timeTaken: 1.98,
                            certificateId: 0
                        }]
                    }],
                    school: {
                        schoolId: 0,
                        schoolName: 'Cool School'
                    }
                }
            ]
        ,
        teacher: {
            teacherId: 0,
            teacherName: 'Stephen Taylor',
            initialPassword: 'Steph123',
            customPasswordHash: 'iu1h3451uh245kj1h34l',
            registrationDate: "Tue Jan 19 2016 18:40:27 GMT-0700 (MST)",
            students: [0, 1, 2, 3, 4],
            school: {
                schoolId: 0,
                schoolName: 'Cool School'
            },
            courses: [
                {
                courseId: 0,
                courseName: 'History of FFVII'
                },
                {
                courseId: 1,
                courseName: 'Writings of Odin'
                }
             ]
        },
        test: {
            testId: 0,
            testName: 'The Rise of Sephiroth',
            questions: [
                {
                questionContent: 'Who is Sephiroth?',
                answerChoices: ['Bacon', 'Zack\'s friend', 'JENOVA\'s son', 'The pope'],
                correctAnswers: 2
                },
                {
                questionContent: 'Is today Tuesday',
                answerChoices: ['Yes', 'No', 'Definitely Not', 'Probably'],
                correctAnswers: 3
                },
                {
                questionContent: 'Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text Fake text ',
                answerChoices: ['Right', 'Wrong', 'Wrong', 'Wrong'],
                correctAnswers: 0
                },
                {
                questionContent: 'One word',
                answerChoices: ['a', 'b', 'c', 'd'],
                correctAnswers: 1
                }
            ],
            course: {
                courseId: 0,
                courseName: 'History of FFVII'
            }
        }
    }
    
    this.getStudentData = function(studentId) {
        if(studentId) {
            return this.data.student[studentId];
        } else {
            return this.data.student;
        }
    };
    
    this.getTeacherData = function(teacherId) {
        if(teacherId) {
            return this.data.teacher[teacherId];
        } else {
            return this.data.teacher;
        }
    };
    
    this.getSchoolData = function(schoolId) {
        if(schoolId) {
            return this.data.school[schoolId];
        } else {
            return this.data.school;
        }
    };
    
    this.getAdminData = function(adminId) {
        if(adminId) {
            return this.data.admin[adminId];
        } else {
            return this.data.admin;
        }
    };
    
    this.getCourseData = function(courseId) {
        if(courseId) {
            return this.data.course[courseId];
        } else {
            return this.data.course;
        }
    };
    
    this.getTestData = function(testId) {
        if(testId) {
            return this.data.test[testId];
        } else {
            return this.data.test;
        }
    };
    
    this.getCertificateData = function(certId) {
        if(certId) {
            return this.data.certificate[certId];
        } else {
            return this.data.certificate;
        }
    };
    
    this.getContentData = function(courseId) {
        if(courseId) {
            return this.data.content[courseId];
        } else {
            return this.data.content;
        }
    };
}]);