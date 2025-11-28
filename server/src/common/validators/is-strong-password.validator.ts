import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator';

export function IsStrongPassword(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isStrongPassword',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'string') {
                        return false;
                    }

                    // Mínimo 8 caracteres
                    if (value.length < 8) {
                        return false;
                    }

                    // Al menos una letra minúscula
                    if (!/[a-z]/.test(value)) {
                        return false;
                    }

                    // Al menos una letra mayúscula
                    if (!/[A-Z]/.test(value)) {
                        return false;
                    }

                    // Al menos un número
                    if (!/\d/.test(value)) {
                        return false;
                    }

                    return true;
                },
                defaultMessage(args: ValidationArguments) {
                    return 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
                },
            },
        });
    };
}
