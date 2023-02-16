  import {Problem} from './problem.interface'
  import {Contest} from './contest.interface'
  import {RanklistRow} from './rank.list.row.interface'
  

  export interface Standings {
    contest: Contest
    problems: Problem[]
    rows: RanklistRow[]
  }

  

  

