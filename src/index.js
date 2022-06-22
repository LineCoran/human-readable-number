module.exports = function toReadable (num) {
  num = String(num);
  let result = '';
  let units = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6:'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thir', 14: 'four', 15: 'fif', 16: 'six', 17: 'seven', 18: 'eigh', 19: 'nine'};
  let dozens = {2: 'twen', 3: 'thir', 4: 'for', 5: 'fif', 6: 'six', 7: 'seven', 8: 'eigh', 9: 'nine'};
  function lessThanHundred (n) {
      let arr = n.split('');
      let result = 'str';
      if(Number(n)<100 ){
          result = dozens[arr[0]]+'ty';
          if(n%10!=0)result+=" "+units[arr[1]];
      } else {
        result = (n%100==0)?units[arr[0]]+" hundred":result = units[arr[0]]+" "+ "hundred"+" "+toReadable(num%100);
      }
      return result;np
  }
  result = (num<13)?units[num]:(num<20)?units[num]+'teen':lessThanHundred(num);
  return result;
}
