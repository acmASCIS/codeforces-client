export interface Root {
    status: string
    result: Result[]
  }
  
  export interface Result {
    id: number
    contestId: number
    creationTimeSeconds: number
    relativeTimeSeconds: number
    problem: Problem
    author: Author
    programmingLanguage: string
    verdict: string
    testset: string
    passedTestCount: number
    timeConsumedMillis: number
    memoryConsumedBytes: number
  }
  
  export interface Problem {
    contestId: number
    index: string
    name: string
    type: string
    tags: any[]
  }
  
  export interface Author {
    contestId: number
    members: Member[]
    participantType: string
    ghost: boolean
    startTimeSeconds: number
  }
  
  export interface Member {
    handle: string
  }