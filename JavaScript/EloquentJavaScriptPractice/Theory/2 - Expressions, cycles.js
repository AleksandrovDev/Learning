console.log(Math.max(1, 10));

// If we forget to use break in case it will fall throught all case below until it is find break keyword


switch (false) {
  case 1 === 1:
    console.log(1);
  case false:
    console.log(0);
  case null:
    console.log('null');
    break;
  default:
    console.log('Finally');
    break;
}
