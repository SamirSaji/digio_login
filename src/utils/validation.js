//Function to check wheather the 'e' is number key event or not based on 'isNumber' key
export let IsNumberKey = (e, isNumber) => {
  if (isNumber) {
    if (e.target.value.length <= 10) {
      if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
  }
};

//Function to validate email
export let ValidateEmail = (email) => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return Boolean(re.test(email));
};
