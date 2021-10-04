let choice: string

export default function getPlayerChoice(): string {
    let random: number = Math.round(Math.random() * (4 - 0) + 0)
    if (random === 1) { choice = "rock"}
    if (random === 2) { choice = "paper"}
    if (random === 3) { choice = "scissors"}
    return choice
}
