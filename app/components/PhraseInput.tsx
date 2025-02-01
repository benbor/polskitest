interface PhraseInputProps {
  phrase: string
  value: string
  onChange: (value: string) => void
  isCorrect?: boolean
  showResult: boolean
}

export default function PhraseInput({ phrase, value, onChange, isCorrect, showResult }: PhraseInputProps) {
  const parts = phrase.split("___")

  return (
    <div className="flex items-center space-x-2">
      <span>{parts[0]}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded px-2 py-1 w-24 ${
          showResult ? (isCorrect ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500") : ""
        }`}
      />
      <span>{parts[1]}</span>
    </div>
  )
}

