const Item = (function () {
    
   const validateName = function validateName(name) {
        if(!name) throw new TypeError('Name does not exist.');
    }
    
    const create = function create(name) {
        return {
            id: cuid(),
            name,
            checked: false,
        }
    }

    return {
        validateName,
        create
    }
    
}() );

