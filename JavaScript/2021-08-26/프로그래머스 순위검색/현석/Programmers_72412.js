// time exceed

// function solution(info, query) {
//     var answer = [];

//     const applicants = [];
//     info.forEach((applicant) => {
//         applicants.push(applicant.split(" "));
//     })
    
//     const companys = [];
//     query.forEach((company) => {
//         companys.push(company.split(" ").filter((element) => element !== 'and'));
//     })
    
//     for (let company of companys) {
//         let cnt = 0;
//         for (let applicant of applicants) {
//             let pass = 0;
//             for (let i = 0; i < 4; i++) {
//                 if (company[i] === '-' || company[i] === applicant[i]) {
//                     pass += 1;
//                 } else break;
//             }
//             if (pass === 4) {
//                 if (Number(applicant[4]) >= Number(company[4])) {
//                     pass += 1;
//                 }
//             } else continue;

//             if (pass === 5) {
//                 cnt += 1;
//             }
//         }

//         answer.push(cnt);
//     }

//     return answer;
// }



//

function binarySearch(sortedArray, seekElement) {
    let startIndex = 0;
    let endIndex = sortedArray.length;
  
    while (startIndex < endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      
      if (sortedArray[middleIndex] < seekElement) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex;
      }
    }
    return startIndex;
  }


function solution(info, query) {
    var answer = [];

    const caseNum = {
        '-': '0',
        'cpp': '1',
        'java': '2',
        'python': '3',
        'backend': '1',
        'frontend': '2',
        'junior': '1',
        'senior': '2',
        'chicken': '1',
        'pizza': '2',
    };

    const applicants = new Map();
    info.forEach((applicant) => {
        let applicantInfo = applicant.split(" ");
        for (let language of ['0', caseNum[applicantInfo[0]]]) {
            for (let task of ['0', caseNum[applicantInfo[1]]]) {
                for (let career of ['0', caseNum[applicantInfo[2]]]) {
                    for (let food of ['0', caseNum[applicantInfo[3]]]) {
                        let applicantCase = language + task + career + food;
                        if (applicants.get(applicantCase)) {
                            applicants.get(applicantCase).push(Number(applicantInfo[4]));
                        } else {
                            applicants.set(applicantCase, [Number(applicantInfo[4])]);
                        }
                    }
                }
            }
        }
        // let applicantCase = '';
        // applicantInfo.slice(0, 4).forEach((section) => {
        //     applicantCase += caseNum[section];
        // });
        
        // if (applicants.get(applicantCase)) {
        //     applicants.get(applicantCase).push(Number(applicantInfo[4]));
        // } else {
        //     applicants.set(applicantCase, [Number(applicantInfo[4])]);
        // }
    })
    for (const [key, val] of applicants) {
        val.sort((a, b) => {
            return a- b;
        })
    }
    
    const companys = [];
    query.forEach((company) => {
        companys.push(company.split(" ").filter((element) => element !== 'and'));
    })
    
    companys.forEach((company) => {
        let passCode = caseNum[company[0]] + caseNum[company[1]] + caseNum[company[2]] + caseNum[company[3]];
        if (applicants.get(passCode)) {
            answer.push(applicants.get(passCode).length - binarySearch(applicants.get(passCode), Number(company[4])));
        } else {
            answer.push(0);
        }
    })

    return answer;
}




console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))

// answer
// [1,1,1,1,2,4]
