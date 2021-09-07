import codes from '../conf/codes'

// 格式：ServerError
export function ServerError(codeArray) {
    let result = "";
    if (codeArray.length >= 1) {
        result = codes[codeArray[0]];
    }

    return result;
}

// 格式：NotFound.MODEL[.REASON]
// ex. NotFound.Task
export function NotFound(codeArray) {
    return three(codeArray);
}

// 格式：InvalidParameter[.MODEL].FIELD[.REASON]
// ex. InvalidParameter.Task.Summary
// ex. InvalidParameter.Task.Summary.TooLong
// ex. InvalidParameter.Limit
// ex. InvalidParameter.Limit.OutOfRange
export function InvalidParameter(codeArray) {
    let result = "";
    if (codeArray.length === 2) {
        for(let i=codeArray.length - 1;i>=0;i--) {
            result += codes[codeArray[i]];
        }
    } else if (codeArray.length >= 3) {
        for(let i=1;i<codeArray.length;i++) {
            result += codes[codeArray[i]];
        }
    }

    return result;
}

// 格式：VerificationFailure.REASON
// ex. VerificationFailure.InvalidCode
// ex. VerificationFailure.CodeExpired
export function VerificationFailure(codeArray) {
    let result = "";
    if (codeArray.length === 2) {
        result = codes[codeArray[1]];
    }

    return result;
}

// 格式: AlreadyExists.MODEL[.REASON]
// ex. AlreadyExists.Task
// ex. AlreadyExists.Field.NameConflict
export function AlreadyExists(codeArray) {
    return three(codeArray);
}

function three(codeArray) {
    let result = "";
    if (codeArray.length === 2) {
        for(let i=codeArray.length - 1;i>=0;i--) {
            result += codes[codeArray[i]];
        }
    } else if (codeArray.length === 3) {
        for(let i=1;i<codeArray.length;i++) {
            result += codes[codeArray[i]];
        }
    }

    return result;
}
