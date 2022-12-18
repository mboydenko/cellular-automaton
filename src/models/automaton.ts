import { randomIntBetween } from "../tools/functions";

export class Automaton {
    private _cells: boolean[][];
    
    readonly rows: number

    readonly colums: number

    constructor(rows: number, colums: number)
    {
        this.rows = rows
        
        this.colums = colums
        
        this._cells = Array.from(Array(rows).keys()).map( e => {
            return Array.from(Array(colums).keys()).map(e => false)
        })
    }

    addCell(rowIndex: number, colIndex: number) 
    {
        this._cells[rowIndex][colIndex] = true
    }

    removeCell(rowIndex: number, colIndex: number)
    {
        this._cells[rowIndex][colIndex] = false
    }

    randomFill(countCells: number) 
    {

        for(let i = 0; i < countCells; i++)
        {
            let rowIndex = randomIntBetween(0, this.rows - 1)
            
            let colIndex = randomIntBetween(0, this.colums - 1)

            this._cells[rowIndex][colIndex] = true
        }
    }

    nextTick()
    {
        this._cells = this._cells.map((row, rowIndex) => {
            return row.map((el, colIndex) => {
               
                let neightborsAmount = this.amountCellNeightbors(rowIndex, colIndex)
               
               if(neightborsAmount > 3 || neightborsAmount < 2)
               {
                    return false
               } 

               if(neightborsAmount == 3) 
               {
                    return true;
               }

               return el
            })
        })
    }

    private amountCellNeightbors(rowIndex: number, colIndex: number)
    {
        let counter = 0

        if(this._cells[rowIndex + 1] && this._cells[rowIndex + 1][colIndex])
        {
            counter++;
        }

        if(this._cells[rowIndex - 1] && this._cells[rowIndex - 1][colIndex])
        {
            counter++;
        }

        if(this._cells[rowIndex] && this._cells[rowIndex][colIndex + 1])
        {
            counter++;
        }

        if(this._cells[rowIndex] && this._cells[rowIndex][colIndex - 1])
        {
            counter++
        }

        if(this._cells[rowIndex - 1] && this._cells[rowIndex - 1][colIndex + 1])
        {
            counter++
        }

        if(this._cells[rowIndex - 1] && this._cells[rowIndex - 1][colIndex - 1])
        {
            counter++
        }

        if(this._cells[rowIndex + 1] && this._cells[rowIndex + 1][colIndex - 1])
        {
            counter++
        }

        if(this._cells[rowIndex + 1] && this._cells[rowIndex + 1][colIndex + 1])
        {
            counter++
        }

        return counter;
    }

    get cells() {
        return [...this._cells]
    }
}