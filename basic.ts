interface ITest {
    id: number;
    name?: string;
}

type TestType = {
    id: number,
    name?: string,
}

function myTest(args: ITest): string {
    if (args.name) {
        return `Hello ${args.name}`
    }
    return "Hello World"
}

myTest({ id: 1 })