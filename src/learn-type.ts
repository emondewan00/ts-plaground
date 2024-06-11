const count: number = 0;
const hello2: string = "hello world";
const amIMad: boolean = false;

const x: any = "hello";
const multipleTypes: string | number = "multiple types";

const str: any = "hello world";

const index: number = (str as string).indexOf("a")
const index2: number = (<string>str).indexOf("a");

const names: string[] = ["lws", "tapascript"];
const age: Array<number> = [1, 4, 5, 6];

const positions: (string | number)[] = [1, "first", "last", 4, 5, 6];

const multiDimArr: number[][] = [[1, 2, 3, 4, 5]]

const tuples: [number, string] = [1, "hello",]

enum Status {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
}
enum Status2 {
    NOT_STARTED = "not started",
    IN_PROGRESS = "progress",
    COMPLETED = "completed",
}

const status3: Status = Status.NOT_STARTED;

console.log(typeof status3)
console.log(status3, "hello status")

const cart = {
    name: "BMW",
    price: 100000,
    color: "red",
    make: 2024,
    wheel: function () {
        return 4
    }
}

function sum(a: number, b: number = 9): number {
    return a + b;
}
sum(10);
sum(2, 3);


class Student {
    name: string;
    protected roll: number;
    private courses: Array<string>;
    constructor(name: string, roll: number, courses: Array<string>) {
        this.name = name;
        this.roll = roll;
        this.courses = courses;
    }
}



// types of typescript 
type myNumber = number;
const socks: myNumber = 10;
type Employee<t> = {
    id: t,
    name: string,
    email: string,
    salary: number,
    address?: string,

}


const emon: Employee<number> = {
    id: 123,
    name: "Emon",
    email: "emon.com",
    salary: 100000,

}

type Department = {
    name: string,
    employees: Array<Employee<number>>
}

const sales: Department = {
    name: "emon",
    employees: [emon]
}

type startWithLWS = `LWS - ${string}`;

const lws: startWithLWS = `LWS - ${"hello"}`;

console.log(lws)


interface Customer {
    name: string,
    email: string,
}

const customer: Customer = {
    name: "lws",
    email: "lws.com"
}

