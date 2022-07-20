const color= 'red';
switch (color){
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
        default:console.log('color is not red,blue or green');
}

// const grade = 50
// switch ((grade>=70)?1 :
// (grade>=60 && grade<70)?2:
//  (grade>=50 && grade<60)?3:
//  (grade>=40 && grade<50)?5:6
// ) {
//     case (1):
//         console.log('Excellence');
//         break;
//     case (2):
//         console.log('very good');
//         break;
//     case (3):
//         console.log('credit');
//         break;
//     case (4):
//         console.log('pass');
//         break;
//     default:
//         console.log('fail');
    
// }
const grade = 70
switch (true) {
    case (grade>=70):
        console.log('Excellence');
        break;
         case (grade>=60 && grade<70):
        console.log('very good');
        break;
         case (grade>=50 && grade<60):
        console.log('credit');
        break;
        case (grade>=40 && grade<50):
        console.log('pass');
        break;
    default:
        console.log('fail');
    
}