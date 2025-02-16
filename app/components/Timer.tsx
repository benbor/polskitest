"use client"

import {useState, useEffect} from "react"


interface TimerProps {
    initSeconds: number;
    onFinish: () => void;
}

export function Timer({initSeconds, onFinish}: TimerProps) {
    const [seconds, setSeconds] = useState(initSeconds)
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1)
            }, 1000)
        } else if (seconds === 0) {
            setIsActive(false);
            onFinish();
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isActive, seconds])

    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    const resetTimer = () => {
        setSeconds(initSeconds)
        setIsActive(false)
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl font-bold">{seconds}</div>
            <div className="space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        onClick={resetTimer}>Reset
                </button>
            </div>
        </div>
    )
}