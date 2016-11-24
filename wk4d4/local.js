
function mergeArrays(a, b) {
  if (typeof a !== 'object') {
    throw new Error(`Expects an Array but got a ${typeof a}`);
    console.log("WTF WHY?");
  }
  debugger;
  return a.push(b);
  // push?
}

function lotsOfArrayNonsense() {
  try {
    console.log(mergeArrays(true, NaN));
  // } catch (anything) {
    // console.log(anything);
  } catch {
    console.log('Trouble in the mill');
    // undo anything that was done in try,
    // or that was done in support trying
  } finally {
    console.log('Successful merge!');
    // db.close();
  }

  console.log("After exception");

  console.log(mergeArrays([1,2,3],[4,5,6]));
}

lotsOfArrayNonsense();
