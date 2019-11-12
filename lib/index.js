import createRutMask from 'text-mask-rut';

export default (value) => {
    const commonMask = [/\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];
    const indexOfSeparator = value.lastIndexOf('-');
    const onlyNumbersAndLetters = value.replace(/[^a-zA-Z0-9]/g, '');
    const stringLengthGreaterThan = 8;
    const separatorPositionEqualThan = 8;

    if (onlyNumbersAndLetters.length > stringLengthGreaterThan || indexOfSeparator === separatorPositionEqualThan) {
        const numberWithSeparator = `${onlyNumbersAndLetters}-`;
        return createRutMask()(numberWithSeparator);
    }

    const hasSeparator = indexOfSeparator > -1;
    const endMask = hasSeparator ? [/(.*?)/i, /(.*?)/i] : ['-', /(.*?)/i];
    return [...commonMask, ...endMask];
};