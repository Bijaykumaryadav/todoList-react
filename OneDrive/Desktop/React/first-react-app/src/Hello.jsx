function Hello() {
  let myName = "Prashant";
  let fullName = () => {
    return "Bijay kumar yadav";
  };
// note: if you are accessing dyanamically then if there is an arrow function then use function call otherwise use only the variable name
  return (
    <h3>
      Hello this is Mr. {fullName()} .{myName} is my master
    </h3>
  );
}

export default Hello;
