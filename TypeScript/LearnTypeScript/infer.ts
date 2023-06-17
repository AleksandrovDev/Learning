// infer works only n couple with extends

type GetSecondArgumentOfAnyFunction<T> = T extends (
  first: any,
  second: infer SecondArgument, // so it is stored type of second argument
  ...args: any[]
) => void
  ? SecondArgument
  : never

type t = GetSecondArgumentOfAnyFunction<(name: string, age: number) => void> // number