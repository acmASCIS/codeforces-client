import { CodeforcesClient } from './CodeforcesClient';
import {Problems} from './classes/problemsClass'
const  fs  = require('fs');
import {Root} from './interfaces/contest-problems-interface'




var logger = fs.createWriteStream('problems.xml', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})
const problemFormat = async(problemId:number,problemName:String,problemLetter:String)=>{
    const arr:string[]=[
        '<problem>',
        `<id> ${problemId} </id>`,
        `<label> ${problemName} </label>`,
        `<letter> ${problemLetter} </letter>`,
        '</problem>',
    ];
    arr.forEach(async element=>{
        try{
        await logger.write(element);}
        catch(error){
            console.log(`Error::::: ${error}`);
            
        }
    });
}

const exportProblems = async(problem:Problems)=>{
    for (let index = 0; index < problem.name.length; index++) {
        await problemFormat(index+1, problem.name[index], problem.letter[index])
        
    }
}

export const GetAllProblems = async(key:string,secret:string,contestId:string)=>{
    const client = new CodeforcesClient(key,secret);
    var problemNames:string[]=[];
    var problemLetters:string[]=[];

    const root =  await client.callMethod("contest.standings", {contestId:contestId}).then((data) => {
        
       
        
        return data as Root;
    });

    await root.result.problems.forEach(problem=>{
        problemNames.push(problem.name);
        problemLetters.push(problem.index)
    });
    const problems = new Problems(problemNames,problemLetters)
    console.log(problems.letter);
    

    exportProblems(problems);
}
export default CodeforcesClient;