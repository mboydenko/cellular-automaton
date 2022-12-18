import { Automaton } from "../models/automaton";
import { BaseView } from "./base.view";

export class AutomatonView implements BaseView {
    constructor(private automaton: Automaton) {}
    
    print(context: CanvasRenderingContext2D, contextWidth: number, contextHeight: number): void {
        
        let aliveColor = "blue"
        
        let deadColor = "white"

        for(let i = 0; i < this.automaton.cells.length; i++)
        {
            for(let j = 0; j < this.automaton.cells[0].length; j++)
            {
                context.fillStyle = this.automaton.cells[i][j] ? aliveColor : deadColor

                context.fillRect(
                    i * Math.floor(contextWidth / this.automaton.rows),
                    j *  Math.floor(contextHeight / this.automaton.colums),
                    Math.floor(contextWidth / this.automaton.rows),
                    Math.floor(contextHeight / this.automaton.colums)
                )
            }
        }
    }
    
}