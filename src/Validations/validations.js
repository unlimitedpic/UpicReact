import {isEmpty,isNil} from 'ramda'


export const isMandatory = (value) =>{
    if(isEmpty(value) || isNil(value)){
        return 'Please enter a value';
    }
};

export const noValidation = () => undefined;

// export const isEmail = (value) =>{
//     if(value && !/.+@.+\)
// }

export const isNumeric = (value) =>{
    if(value && !validateNumeric(value)){
        return 'This value must be numeric'
    }
}

export const isNumericDecimal = (value) =>{
    let n = parseFloat(value), num = Number(value);
    if(value && isNaN(num - n)){
        return 'This value must be numeric.';
    }
}

const maxLength = (max) => (value) => {
    if(value && value.length > max){
        return `Character limit exceeded, ${value.length} of ${max}.`;
    }
};

export const maxLength500 = maxLength(500);


export const maxNumericValue = (max) => (value) =>{
    if(value && max && parseInt(value) > max){
        return `Numeric value should not exceed ${max}`;
    }
}

export const maxNumericValue7 = maxNumericValue(7)

export const unique = (existing) => (value) =>{
    if(!!existing) {
        if(Array.isArray(existing)){
            if(existing.includes(value)){
                return 'Already in use'
            }
        } else {
            if(existing === value){
                return "Already in use"
            }
        }
    }
}