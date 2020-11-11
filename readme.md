## async-extensions

is an extension library for ts/js with async helpers using Promises control flow and async/await syntax!

These helper functions are attached to Array's prototype

The package includes typings.

The functions are:
 - mapAsync\<T, W\>
 - forEachAsync\<T\>
 - filterAsync\<T\>


These helpers behave like similary named ones of the array's prototype and are waiting all promises to be resolved/rejected.

If *defaultValueOrCatchHandler* parameter is setted (for mapAsync and filterAsync) its value is returned for rejected promises or, if it is a function, its returning value is returned.

### mapAsync\<T, W\>

generic types are:
 - **T**: is list items' type
 - **W**: is returned items' type

parameters:
 - **cback**: map's callback
 - **defaultValueOrCatchHandler**?: (optional) when an exception is raised from *cback* function then this parameter is executed and its returning value is returned if it is a function, otherwise its value is returned. If this parameter is not setted then this helper method behaves like **Promise.all** (which is called under the hood) as per rejecting the entire promise as soon as one item rejects.

 note:
  - this helpers was before **Promise.allSettled** (ES2020) era, of which has similar behaviour but the default value/factory


### forEachAsync\<T\>

generic types are:
 - **T**: is list items' type

parameters:
 - **cback**: map's callback
 - **catchHandler**?: as per previous helper this is a catch function for every item which reises an exception. It defaults to a NoOp function that ensures that all items are executed and waited for.

 note:
  - behaves similary to **Promise.allSettled** but not returning anything (other than a resolved promise with no resolved object)


### filterAsync\<T\>

generic types are:
 - **T**: is list items' type

parameters:
 - **cback**: filter's callback
 - **defaultValueOrCatchHandler**? (as per previous *mapAsync\<T, W\>* function)

note:
 - mantains the items order (as per **Promise.resolve**)

---

install with:
```
npm install async-extensions --save
```

#### TODO
- [x] docmuentation
- [ ] examples
- [ ] tests