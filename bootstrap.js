const concurrently = require('concurrently');
const { result } = concurrently([
    "http-server ./build --port 3000",
    "cypress run"
],
  {
    prefix: 'name',
    killOthers: ['failure', 'success'],
  }
);
result.then(
    function onSuccess(exitInfo) {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed successfully.
      console.log("success", exitInfo)
      process.exit(0);
    },
    function onFailure(exitInfo) {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed because of a failure.
      console.log("failure ", exitInfo)
      process.exit(0);
    }
  );