export const getNameFromDomain = (str: string): string => 
    str.includes(".") 
    ? str.split(".")[0] 
    : str;