
  enum ProblemResultType{PRELIMINARY='PRELIMINARY', FINAL='FINAL'}
  export interface ProblemResult {
    points: number
    penalty: number
    rejectedAttemptCount: number
    type: ProblemResultType
    bestSubmissionTimeSeconds?: number
  }