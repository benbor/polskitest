"use client"

import { useState } from "react"
import PhraseInput from "./components/PhraseInput"
import CheckButton from "./components/CheckButton"
import ScoreDisplay from "./components/ScoreDisplay"

const phrases = [
  { "phrase": "Mam na imię Piotr. ___ w Krakowie.", "answer": "Mieszkam" },
  { "phrase": "Dzisiaj jest ładna ___. Świeci słońce.", "answer": "pogoda" },
  { "phrase": "Lubię ___ kawę rano.", "answer": "pić" },
  { "phrase": "To jest mój brat. ___ ma na imię Adam.", "answer": "On" },
  { "phrase": "💩Idziemy do ___ na zakupy.", "answer": "sklepu" },
]

export default function Home() {
  const [userInputs, setUserInputs] = useState(Array(5).fill(""))
  const [results, setResults] = useState<boolean[]>([])
  const [score, setScore] = useState<number | null>(null)

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...userInputs]
    newInputs[index] = value
    setUserInputs(newInputs)
  }

  const handleCheck = () => {
    const newResults = phrases.map((phrase, index) => phrase.answer.toLowerCase() === userInputs[index].toLowerCase())
    setResults(newResults)
    setScore(newResults.filter(Boolean).length)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Ćwiczenia gramatyczne ze słowami</h1>
      <div className="space-y-4 mb-8">
        {phrases.map((phrase, index) => (
          <PhraseInput
            key={index}
            phrase={phrase.phrase}
            value={userInputs[index]}
            onChange={(value) => handleInputChange(index, value)}
            isCorrect={results[index]}
            showResult={results.length > 0}
          />
        ))}
      </div>
      <CheckButton onClick={handleCheck} />
      {score !== null && <ScoreDisplay score={score} total={phrases.length} />}
    </main>
  )
}

