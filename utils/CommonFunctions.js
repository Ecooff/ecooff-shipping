import { useNavigation } from '@react-navigation/native';

const dateParse = (date) => {
    return date.split('T')[0].split('-')[2] + '-' + date.split('T')[0].split('-')[1] + '-' + date.split('T')[0].split('-')[0];
}

export {
    dateParse
 };