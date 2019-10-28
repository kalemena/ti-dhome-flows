// name: Parse web relays
// outputs: 1
var outputMsgs = [];
timestampH = new Date().toISOString()
timestamp = new Date().getTime()

for (var i in msg.payload) {
    type = 'toggle'
    nodeid = msg.payload[i].switch
    entry = 0
    value = msg.payload[i].value
    
    var msgS = {}
    msgS.topic = 'sensors/iotheaters/nodes/' + nodeid + '/entries/' + entry + '/events/' + type;
    msgS.payload = { 
        "gateway":"iotheaters",
        "id": nodeid,
        "entry": entry,
        "type": type,
        "value": value,
        "timestamp": timestamp,
        "timestamp-human": timestampH
    }
    outputMsgs.push(msgS);
}

return [ outputMsgs ];