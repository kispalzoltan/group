import { Category} from '../models/category.models';
export const CATEGORIES: Category[] = [
    {
        title: 'Eszközök',
        icon: 'eszkoz',
        value: 'eszkoz',
        color: 'teal',
        url:'/home/eszkozok'
    },
    {
        title: 'Fertőtlenítők',
        icon: 'fertotlenito',
        value: 'fertotlenito',
        color: '#c2185b',
        url:'/home/fertotlenitok'
    }
];