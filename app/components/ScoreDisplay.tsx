interface ScoreDisplayProps {
  score: number
  total: number
}

export default function ScoreDisplay({ score, total }: ScoreDisplayProps) {
  return (
    <div className="mt-4 text-xl">
      Score: {score} / {total}
    </div>
  )
}

