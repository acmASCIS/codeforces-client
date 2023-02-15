  import {Problem} from './problem.interface'
  import {Member} from './member.interface'
  

  export interface Standings {
    contest: Contest
    problems: Problem[]
    rows: Row[]
  }
  
  export interface Contest {
    id: number
    name: string
    type: string
    phase: string
    frozen: boolean
    durationSeconds: number
    startTimeSeconds: number
    relativeTimeSeconds: number
  }
  
  
  export interface Row {
    party: Party
    rank: number
    points: number
    penalty: number
    successfulHackCount: number
    unsuccessfulHackCount: number
    problemResults: ProblemResult[]
  }
  
  export interface Party {
    contestId: number
    members: Member[]
    participantType: string
    ghost: boolean
    startTimeSeconds: number
    room?: number
    teamId?: number
    teamName?: string
  }
  

  
  export interface ProblemResult {
    points: number
    rejectedAttemptCount: number
    type: string
    bestSubmissionTimeSeconds?: number
  }