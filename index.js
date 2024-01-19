const xmpp = require("simple-xmpp")

xmpp.on("online", data => {
    console.log("You are online")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send (){
    setTimeout(send, 5000);
    xmpp.send("troy@localhost", `helooo${Date.now()}`)
}

xmpp.on("error", error => {
    console.log("Error", error.message)
})

xmpp.on("chat", (from, message)=>{
    console.log(`${from}: ${message}`)
})


xmpp.connect({
    "jid": "admin@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222
})