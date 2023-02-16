import {Party} from './party.interface'
import {ProblemResult} from './problem.result.interface'

export interface RanklistRow {
    party: Party
    rank: number
    points: number
    penalty: number
    successfulHackCount: number
    unsuccessfulHackCount: number
    problemResults: ProblemResult[]
    lastSubmissionTimeSeconds:number
  }
  