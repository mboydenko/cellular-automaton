import { Automaton } from "./models/automaton"
import { AutomatonView } from "./views/automaton.view"

export const sleep = (ms: number) => {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms)
    })
}

(async () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement

    canvas.width = 800
    
    canvas.height = 800

    if(!canvas) throw new Error("Unable load canvas")

    const context = canvas.getContext('2d')

    if(!context) throw new Error("Unable load context")

    const automaton = new Automaton(250, 250)

    automaton.randomFill(5000)

    const automatonView = new AutomatonView(automaton)
    
    while(true)
    {
        context.fill()

        automatonView.print(context, canvas.width, canvas.height)

        await sleep(100)

        automaton.nextTick()
    }
})()

