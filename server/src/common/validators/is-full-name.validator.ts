import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator';

export function IsFullName(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isFullName',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'string') {
                        return false;
                    }

                    // Mínimo 2 caracteres
                    if (value.trim().length < 2) {
                        return false;
                    }

                    // Solo letras (incluyendo acentos y ñ), espacios y guiones
                    // No permite números ni caracteres especiales excepto espacios y guiones
                    const fullNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

                    if (!fullNameRegex.test(value)) {
                        return false;
                    }

                    // No permitir solo espacios
                    if (value.trim().length === 0) {
                        return false;
                    }

                    // No permitir múltiples espacios consecutivos
                    if (/\s{2,}/.test(value)) {
                        return false;
                    }

                    return true;
                },
                defaultMessage(args: ValidationArguments) {
                    return 'El nombre debe contener solo letras, espacios y guiones. No se permiten números ni caracteres especiales';
                },
            },
        });
    };
}
