class INFO {
    constructor(name, income, housing, food, transport, other, debt, savings){
        this.name = 
    }
}


const fs = require('fs');
const filePath = 'finance-data.txt';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split(/\r?\n/);

// Cia kaip sukant for cikla filo 
for(const line of lines){
    console.log(line);
}