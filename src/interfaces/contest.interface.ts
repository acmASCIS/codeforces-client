

enum ContestType {CF='CF',IOI='IOI',ICPC='ICPC'};
enum ContestPhase {BEFORE='BEFORE', CODING='CODING', PENDING_SYSTEM_TEST='PENDING_SYSTEM_TEST', SYSTEM_TEST='SYSTEM_TEST', FINISHED='FINISHED'};
export interface Contest {
  id: number
  name: string
  type: ContestType
  phase: ContestPhase
  frozen: boolean
  durationSeconds: number
  startTimeSeconds: number
  relativeTimeSeconds: number
  preparedBy:string
  websiteUrl:string
  description:string
  difficulty:number
  kind:string
  icpcRegion:string
  country:string
  city:string
  season:string
}