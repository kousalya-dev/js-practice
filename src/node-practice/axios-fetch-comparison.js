// fetch
fetch("/users")
  .then(res => res.json()) // converts body
  .then(data => console.log(data));

// axios
axios.get("/users")
  .then(res => console.log(res.data));

// | Scenario            | fetch   | axios     |
// | ------------------- | ------- | --------- |
// | 404 / 500           | then()  | catch()   |
// | Network error       | catch() | catch()   |
// | Error handling code | Manual  | Automatic |


// fetch() only rejects promises on network errors, not on HTTP errors like 404 or 500, so we must manually check res.ok.

// | Topic           | fetch                 | axios                 |
// | --------------- | --------------------- | --------------------- |
// | Type            | Web API               | HTTP client library   |
// | Install needed  | ❌ No                  | ✅ Yes                 |
// | JSON handling   | Manual (`res.json()`) | Auto (`res.data`)     |
// | Error handling  | Only network errors   | HTTP + network errors |
// | Interceptors    | ❌ No                  | ✅ Yes                 |
// | Request cancel  | Complicated           | Easy                  |
// | Default headers | Manual                | Automatic             |
// | Browser support | Native                | Needs bundle          |
