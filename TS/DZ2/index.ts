// Задание 1
// Написать generic type для получения типа элемента по индексу в массиве.
// Пример:
// type arr1 = ['a', 'b', 'c'];
// type arr2 = [3, 2, 1];
// ....
// type elem1 = GetElementType<arr1, 0>; // elem1 имеет тип 'a'
// type elem2 = GetElementType<arr2, 2>; // elem2 имеет тип 1
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type GetElementType<T, N extends keyof T> = T[N];

type elem1 = GetElementType<arr1, 0>; // elem1 имеет тип 'a'
type elem2 = GetElementType<arr2, 2>; // elem2 имеет тип 1

// const a: elem1 = 'a'
// const b: elem2 = 1


// Задание 2
// Написать conditional type, который принимает 2 типа и возвращает тип, который является объединением общих свойств.
// Пример:
// type A = { a: number; b: string };
// type B = { a: string; b: string; c: number };
// ....
// type C = CommonProperty<A, B>; // C имеет тип {a: string | number, b: string }
type A = { a: number; b: string };
type B = { a: string; b: string; c: number };

// type CommonProperty<A, B> = Omit<A|B, keyof Omit<B, keyof A> & Omit<A, keyof B>>; // Вариант через Omit
type CommonProperty<Ta, Tb> = { [key in keyof (Ta | Tb)]: (Ta | Tb)[key]}

type C = CommonProperty<A, B>; // C имеет тип {a: string | number, b: string }


// Задание 3
// Написать mapped type, который принимает объект и делает все его свойства необязательными.
// Пример:
// type A = { a: number; b: string };
// ....
// type B = MakePropertiesOptional<A>; // B имеет тип { a?: number; b?: string }
type A2 = { a: number; b: string };

type MakePropertiesOptional<T> = { [P in keyof T]?: T[P] };

type B2 = MakePropertiesOptional<A2>;

