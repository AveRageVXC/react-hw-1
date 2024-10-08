type Camelize<S extends string> = S extends `${infer P}_${infer Q}${infer R}`
    ? `${P}${Uppercase<Q>}${Camelize<R>}`
    : S;

type CamelizeObject<T> = {
    [K in keyof T as Camelize<K & string>]: T[K] extends object
        ? CamelizeObject<T[K]>
        : T[K];
};

// Пример использования:
type User = {
    user_id: number;
    user_name: string;
    details: {
        is_active: boolean;
        account_settings: {
            two_factor_auth: boolean;
        };
    };
};

type CamelCaseUser = CamelizeObject<User>;

// Создаем объект пользователя в стиле CamelCase
const user: CamelCaseUser = {
    userId: 1,
    userName: "JohnDoe",
    details: {
        isActive: true,
        accountSettings: {
            twoFactorAuth: true
        }
    }
};

console.log('CamelCase user:', user);



type DeepPick<T, Path> = Path extends `${infer K}.${infer Rest}`
    ? K extends keyof T
    ? { [P in K]: DeepPick<T[K], Rest> }
    : never
    : Path extends keyof T
    ? { [P in Path]: T[P] }
    : never;

// Пример использования:
type UserProfile = {
    id: number;
    firstName: string;
    lastName: string;
    contact: {
        email: string;
        phone: string;
    };
};

type PickedProfile = DeepPick<UserProfile, 'contact.email' | 'firstName'>;

// Создаем объект userProfile с вложенной структурой
const userProfile: PickedProfile = {
    firstName: "Alice",
    contact: {
        email: "alice@example.com"
    }
};

console.log('Picked profile:', userProfile);