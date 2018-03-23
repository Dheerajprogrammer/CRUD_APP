import {Todo} from '../app/to-do/to-do';

export const TODO_ITEMS: Todo[] = [
 {
   id: 1,
   name: 'Dheeraj Kumar',
   notes: 'sea food',
   due: new Date(new Date().setDate(new Date().getDate() + 4)),
   done: false
 }, {
   id: 2,
   name: 'Pravir Kumar',
   notes: 'confirm the meeting ahead of time',
   due: new Date(new Date().setDate(new Date().getDate() + 5)),
   done: false
 }, {
   id: 3,
   name: 'Rajinder',
   notes: 'Want To Buy Some Sweets',
   due: new Date(new Date().setDate(new Date().getDate() - 1)),
   done: true
 }
];
