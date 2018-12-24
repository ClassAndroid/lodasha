const _ = {};

// _.chunk(array, [size=1])
_.chunk = (arr, size) => {
  if (!size || size === 0 || arr.length <= size) return arr;
  
  const first = [];
  const second = [];
  
  arr.forEach((item, i) => {
    let current = (i < size) ? first : second;    
    current.push(item);
  });
  
  return [first, second];
};

// _.compact(array)
_.compact = arr => arr.reduce((res, current, i) => 
	(current || current === 0) 
	? res.concat(current) 
	: res, 
[]);

//_.concat(array, [values])
_.concat = (arr, ...elements) => 
	elements.reduce((res, current) => res.concat(current), arr);

//_.difference(array, [values])
difference = (array, values) => array.reduce(
  (res, arrayElem, i) => {
      return (arrayElem != values[i])
          ? res.concat(arrayElem)
          : res;
  }, []);

// _.drop(array, [n=1])
_.drop = (arr, number) => arr.filter((current, i) => {
  if (number === 0 || !number) number = 1;
  if (i >= number) return current;
});


//_.dropRight(array, [n=1])
_.dropRight = (arr, number) => arr.filter((current, i) => {
  if (number === 0 || !number) number = 1;
  const index = arr.length - number;
  
  if (i < index) return current;
});

//_.fill(array, value, [start=0], [end=array.length])
_.fill = (arr, value, start, end) => arr.reduce((res, current, i) => {
  let element;
  
  if (start) {
    element = (i === start || start < i && i < end) ? value : current;
  } else {
    element = value;
  }
  
  return res.concat(element);
}, []);

//_.flatten(array)
_.flatten = arr => 
           arr.reduce((res, current) => 
           res.concat(current), []);

// _.flattenDeep(array)
_.flattenDeep = arr => arr.reduce((res, current) => {  
  return (Array.isArray(current)) 
              ? res.concat(flattenDeep(current)) 
              : res.concat(current);
}, []);

// _.head(array)
_.head = arr => arr[0];


