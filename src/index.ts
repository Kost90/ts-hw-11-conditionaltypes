// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. 
// Як параметр типу повинен обов'язково виступати функціональний тип.

type ReturnIFuncType<T extends (...args:any[]) => any> = T extends (...args: any[]) => infer U ? U : never;

// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж, 
// де перше значення - це тип, що функція повертає, а другий - тип її параметру

type FunctionInfo<T extends (arg: any | string) => any> = T extends (arg: infer P) => infer R ? [R, P] : never;


// Створіть тип, який об'єднує властивості двох об'єктів тільки в тому випадку, якщо їхні значення мають спільний тип. 
// Наприклад: { a: number; b: string } та { b: string; c: boolean } => { b: string; }

type IntersectProps<T, U> = {
  [K in Extract<keyof T, keyof U>]: T[K];
};

type Obj1 = { a: number; b: string };
type Obj2 = { b: string; c: boolean };

type Intersected = IntersectProps<Obj1, Obj2>;