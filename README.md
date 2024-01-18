## Clock project

In this project, we display the current time in **seconds, minutes,** and **hours.**

![clock](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/b37796c2bbddb66411419890a4b4a478dfe1e8459e44ac44.png)

---

We use **SetInterval** to get the time from moment to moment

Then we use **new Data()** to get the time

```javascript
setInterval(()=>{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
})
```

## I did not understand

If you still don't understand, you can refer to the [w3scools](https://www.w3schools.com/jsref/jsref_gethours.asp) site
