let some: unknown;
some = 'Text';

if (typeof some === 'string') {
    let str: string;
    str = some;  
    console.log(str);  
} else {
    console.error('`some` is not a string');
}

export {};
